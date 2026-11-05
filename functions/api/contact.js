export async function onRequestPost(context) {
  const { request, env } = context;
  try {
    const data = await request.json();
    const {
      fullName,
      workEmail,
      companyName,
      destinationCountry,
      productName,
      estimatedQuantity,
      brandingMode,
      inquiryDetails,
      browsingJourney,
      token
    } = data;

    if (!workEmail || !productName) {
      return new Response(
        JSON.stringify({ success: false, message: 'Work Email and Target Product are required.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Optional Cloudflare Turnstile verification
    const turnstileToken = token || data['cf-turnstile-response'];
    if (turnstileToken && env.TURNSTILE_SECRET_KEY) {
      const verifyFormData = new FormData();
      verifyFormData.append('secret', env.TURNSTILE_SECRET_KEY);
      verifyFormData.append('response', turnstileToken);
      const clientIpHeader = request.headers.get('CF-Connecting-IP') || request.headers.get('x-forwarded-for');
      if (clientIpHeader) verifyFormData.append('remoteip', clientIpHeader);
      try {
        await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
          method: 'POST',
          body: verifyFormData
        });
      } catch (_) {}
    }

    const clientIp = request.headers.get('cf-connecting-ip') || request.headers.get('x-forwarded-for') || '127.0.0.1';
    const cfCountry = request.headers.get('cf-ipcountry') || destinationCountry || 'GL';

    let parsedJourney = [];
    if (browsingJourney) {
      try {
        parsedJourney = typeof browsingJourney === 'string' ? JSON.parse(browsingJourney) : browsingJourney;
      } catch (_) {}
    }

    const formatDuration = (sec) => {
      if (isNaN(sec) || sec <= 0) return '0s';
      if (sec < 60) return `${sec}s`;
      const m = Math.floor(sec / 60);
      const s = sec % 60;
      return s > 0 ? `${m}m ${s}s` : `${m}m`;
    };

    const totalJourneySec = parsedJourney.reduce((sum, item) => sum + (Number(item.duration) || 0), 0);
    let journeyHtml = '';
    if (parsedJourney.length > 0) {
      const stepItems = parsedJourney
        .map((step, idx) => {
          const durStr = formatDuration(Number(step.duration) || 0);
          return `
            <div style="margin-bottom: 5px; font-size: 12px; line-height: 1.5;">
              <span style="display: inline-block; background: #e2e8f0; color: #475569; font-weight: 700; font-size: 10px; width: 18px; height: 18px; line-height: 18px; text-align: center; border-radius: 50%; margin-right: 4px;">${idx + 1}</span>
              <span style="font-family: monospace; font-weight: 600; color: #0f172a; word-break: break-all;">${step.path}</span>
              &nbsp;—&nbsp;
              <span style="background: #f1f5f9; border: 1px solid #cbd5e1; color: #0284c7; font-weight: 700; font-size: 11px; padding: 1px 6px; border-radius: 4px;">⏱️ ${durStr}</span>
            </div>
          `;
        })
        .join('');

      journeyHtml = `
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 10px 12px; margin: 12px 0;">
          <div style="font-size: 11px; font-weight: 700; color: #0284c7; text-transform: uppercase; margin-bottom: 6px; letter-spacing: 0.5px;">
            🧭 客户全站浏览轨迹 (共 ${parsedJourney.length} 个页面 · 站内总时长 ${formatDuration(totalJourneySec)})
          </div>
          ${stepItems}
        </div>
      `;
    }

    const resendApiKey = env.RESEND_API_KEY;
    if (resendApiKey) {
      const cleanCustomerEmail = (workEmail || '').trim().replace(/[\r\n\s]+/g, '');
      const replySubject = `Re: Wholesale Quote for ${productName} — FidgetSupply.com`;
      const todayDate = new Date().toISOString().split('T')[0];
      const quotedDetails = (inquiryDetails || 'N/A')
        .trim()
        .split('\n')
        .map((line) => `> ${line}`)
        .join('\n');

      const replyBody = `Dear ${fullName || 'Customer'},




Best regards,
FidgetSupply Sourcing Desk
https://fidgetsupply.com
WhatsApp: +86 187 5012 6315

----- Original Inquiry -----
On ${todayDate}, ${fullName || 'Customer'} <${cleanCustomerEmail}> wrote:
> Target Product: ${productName}
> Estimated Quantity: ${estimatedQuantity || 'Not Specified'}
> Customization Mode: ${brandingMode || 'Not Specified'}
> Company: ${companyName || 'N/A'}
> Destination Country: ${destinationCountry || cfCountry}
> Notes:
${quotedDetails}`;

      const mailtoUrl = `mailto:${cleanCustomerEmail}?subject=${encodeURIComponent(replySubject)}&body=${encodeURIComponent(replyBody.replace(/\r?\n/g, '\r\n'))}`;
      const prominentSubject = `🌐 ${cfCountry} | ${fullName || 'Buyer'} - ${productName}`;

      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          from: env.RESEND_FROM_EMAIL || 'FidgetSupply Inquiries <noreply@fidgetsupply.com>',
          to: env.NOTIFICATION_EMAIL || 'sales@fidgetsupply.com',
          reply_to: cleanCustomerEmail,
          subject: prominentSubject,
          html: `
            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 650px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
              <div style="background: #0f172a; padding: 20px 24px; color: #ffffff;">
                <h2 style="margin: 0; font-size: 18px; font-weight: 800; color: #ffffff;">New FidgetSupply Wholesale Inquiry</h2>
                <p style="margin: 4px 0 0 0; font-size: 12px; color: #94a3b8;">Direct Edge Function RFQ Channel</p>
              </div>
              <div style="padding: 24px;">
                <h3 style="font-size: 14px; font-weight: 700; color: #0f172a; border-bottom: 1px solid #e2e8f0; padding-bottom: 6px; margin: 0 0 12px 0;">📋 Buyer Information</h3>
                <p style="margin: 6px 0; font-size: 13px;"><strong>Name:</strong> ${fullName || 'N/A'}</p>
                <p style="margin: 6px 0; font-size: 13px;"><strong>Email:</strong> <a href="mailto:${cleanCustomerEmail}" style="color: #0284c7;">${cleanCustomerEmail}</a> &nbsp; <a href="${mailtoUrl}" target="_blank" style="display: inline-block; background: #16a34a; color: #ffffff; font-size: 11px; font-weight: 700; padding: 3px 10px; border-radius: 4px; text-decoration: none;">⚡️ 一键回复</a></p>
                <p style="margin: 6px 0; font-size: 13px;"><strong>Company:</strong> ${companyName || 'N/A'}</p>
                <p style="margin: 6px 0; font-size: 13px;"><strong>Country:</strong> ${destinationCountry || cfCountry} (${clientIp})</p>
                <p style="margin: 6px 0; font-size: 13px;"><strong>Target Product / SKU:</strong> ${productName}</p>
                <p style="margin: 6px 0; font-size: 13px;"><strong>Quantity:</strong> ${estimatedQuantity || 'N/A'}</p>
                <p style="margin: 6px 0; font-size: 13px;"><strong>Branding Mode:</strong> ${brandingMode || 'N/A'}</p>
                ${journeyHtml}
                <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
                <p style="font-size: 13px; font-weight: 700; color: #0f172a; margin-bottom: 4px;">Project Details &amp; Notes:</p>
                <div style="background: #f8fafc; padding: 12px; border-radius: 6px; border-left: 3px solid #0284c7; font-size: 13px; color: #1e293b; line-height: 1.5; white-space: pre-wrap; margin-bottom: 20px;">${inquiryDetails || 'No additional notes.'}</div>
                <div style="margin: 18px 0 20px 0; text-align: center;">
                  <a href="${mailtoUrl}" target="_blank" style="display: inline-block; background: #16a34a; color: #ffffff; font-weight: 700; font-size: 15px; text-decoration: none; padding: 12px 28px; border-radius: 8px;">
                    ✉️ 点击一键回复邮件 &rarr;
                  </a>
                </div>
              </div>
            </div>
          `
        })
      });
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Inquiry received successfully.'
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ success: false, message: 'Error processing inquiry.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
