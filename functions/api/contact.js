function getCountryFlag(countryCode) {
  if (!countryCode || countryCode.length !== 2 || countryCode === 'XX' || countryCode === 'Unknown' || countryCode === 'GL') {
    return '🌐';
  }
  try {
    const codePoints = countryCode
      .toUpperCase()
      .split('')
      .map((char) => 127397 + char.charCodeAt(0));
    return String.fromCodePoint(...codePoints);
  } catch (_) {
    return '🌐';
  }
}

function parseUserAgent(ua) {
  let browser = 'Unknown Browser';
  let os = 'Unknown OS';
  let device = 'Desktop';

  if (!ua || ua === 'Unknown') {
    return { browser, os, device };
  }

  if (/ipad/i.test(ua)) {
    device = 'Tablet (iPad)';
    const v = ua.match(/cpu os (\d+[._\d]+)/i)?.[1]?.replace(/_/g, '.') || '';
    os = v ? `iPadOS ${v}` : 'iPadOS';
  } else if (/iphone/i.test(ua)) {
    device = 'Mobile (iPhone)';
    const v = ua.match(/iphone os (\d+[._\d]+)/i)?.[1]?.replace(/_/g, '.') || '';
    os = v ? `iOS ${v}` : 'iOS';
  } else if (/android/i.test(ua)) {
    device = /mobile/i.test(ua) ? 'Mobile (Android)' : 'Tablet (Android)';
    const v = ua.match(/android (\d+[._\d]+)/i)?.[1] || '';
    os = v ? `Android ${v}` : 'Android';
  } else if (/windows nt 10.0/i.test(ua)) {
    os = 'Windows 10/11';
  } else if (/mac os x (\d+[._\d]+)/i.test(ua)) {
    const v = ua.match(/mac os x (\d+[._\d]+)/i)?.[1]?.replace(/_/g, '.') || '';
    os = v ? `macOS ${v}` : 'macOS';
  } else if (/linux/i.test(ua)) {
    os = 'Linux';
  }

  if (/edg\/(\d+[\.\d]+)/i.test(ua)) {
    browser = `Microsoft Edge ${ua.match(/edg\/(\d+[\.\d]+)/i)?.[1] || ''}`;
  } else if (/opr\/(\d+[\.\d]+)/i.test(ua)) {
    browser = `Opera ${ua.match(/opr\/(\d+[\.\d]+)/i)?.[1] || ''}`;
  } else if (/chrome\/(\d+[\.\d]+)/i.test(ua) && !/edg|opr/i.test(ua)) {
    browser = `Google Chrome ${ua.match(/chrome\/(\d+[\.\d]+)/i)?.[1] || ''}`;
  } else if (/version\/(\d+[\.\d]+).*safari/i.test(ua)) {
    browser = `Apple Safari ${ua.match(/version\/(\d+[\.\d]+)/i)?.[1] || ''}`;
  } else if (/firefox\/(\d+[\.\d]+)/i.test(ua)) {
    browser = `Mozilla Firefox ${ua.match(/firefox\/(\d+[\.\d]+)/i)?.[1] || ''}`;
  }

  return { browser: browser.trim(), os: os.trim(), device: device.trim() };
}

function arrayBufferToBase64(buffer) {
  if (typeof Buffer !== 'undefined') {
    return Buffer.from(buffer).toString('base64');
  }
  let binary = '';
  const bytes = new Uint8Array(buffer);
  const len = bytes.byteLength;
  const chunkSize = 0x8000;
  for (let i = 0; i < len; i += chunkSize) {
    binary += String.fromCharCode.apply(null, bytes.subarray(i, i + chunkSize));
  }
  return btoa(binary);
}

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Accept, Authorization, X-Requested-With'
};

export async function onRequestPost(context) {
  const { request, env = {} } = context;

  try {
    const contentType = request.headers.get('content-type') || '';
    let data = {};
    let fileAttachment = null;

    if (contentType.includes('application/json')) {
      data = await request.json();
    } else if (
      contentType.includes('multipart/form-data') ||
      contentType.includes('application/x-www-form-urlencoded')
    ) {
      const formData = await request.formData();
      const entries = {};
      for (const [key, value] of formData.entries()) {
        if (typeof value === 'string') {
          entries[key] = value;
        }
      }
      data = entries;

      // Extract and validate attached artwork/spec file (strictly <= 15MB)
      const fileEntry = formData.get('artworkFile');
      if (fileEntry && typeof fileEntry === 'object' && 'arrayBuffer' in fileEntry) {
        const file = fileEntry;
        if (file.size > 0) {
          const MAX_FILE_SIZE = 15 * 1024 * 1024; // 15MB limit
          if (file.size > MAX_FILE_SIZE) {
            return new Response(
              JSON.stringify({
                success: false,
                error:
                  'File size exceeds the 15MB limit. Please upload a smaller file or provide a download link in the project notes.'
              }),
              { status: 400, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
            );
          }

          const allowedExtensions = [
            '.pdf',
            '.ai',
            '.eps',
            '.svg',
            '.cdr',
            '.psd',
            '.png',
            '.jpg',
            '.jpeg',
            '.webp',
            '.zip',
            '.rar',
            '.7z'
          ];
          const extMatch = (file.name || '').match(/\.[^.]+$/);
          const ext = extMatch ? extMatch[0].toLowerCase() : '';
          if (!allowedExtensions.includes(ext)) {
            return new Response(
              JSON.stringify({
                success: false,
                error: `Unsupported file format (${ext || 'unknown'}). Supported formats are: PDF, AI, EPS, SVG, CDR, PSD, PNG, JPG, WEBP, ZIP, RAR, 7Z.`
              }),
              { status: 400, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
            );
          }

          const buffer = await file.arrayBuffer();
          fileAttachment = {
            filename: file.name,
            content: arrayBufferToBase64(buffer),
            size: file.size
          };
        }
      }
    } else {
      data = await request.json().catch(() => ({}));
    }

    const {
      fullName = '',
      workEmail = '',
      companyName = '',
      destinationCountry = '',
      productName = '',
      estimatedQuantity = '',
      brandingMode = '',
      inquiryDetails = '',
      browsingJourney = '',
      rx_bot_trap_hp9 = '',
      pageUrl = '',
      pageReferrer = 'Direct Visit',
      browserLanguage = 'N/A',
      screenResolution = 'N/A',
      clientTimezone = '',
      clientLocalTime = '',
      timeOnPageSeconds = 'N/A',
      utmSource = '',
      utmMedium = '',
      utmCampaign = '',
      utmTerm = '',
      utmContent = '',
      token = '',
      turnstileToken: turnstileTokenDirect = ''
    } = data;

    const turnstileTokenAlt = data['cf-turnstile-response'] || '';

    if (!workEmail || !productName) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Work Email and Target Product / SKU are required.',
          message: 'Work Email and Target Product / SKU are required.'
        }),
        { status: 400, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
      );
    }

    // Anti-bot Honeypot check
    const turnstileToken = (turnstileTokenDirect || turnstileTokenAlt || token || '').trim();
    if (rx_bot_trap_hp9 && rx_bot_trap_hp9.trim().length > 0 && !turnstileToken && !fileAttachment) {
      return new Response(
        JSON.stringify({
          success: true,
          message: 'Inquiry received successfully.',
          emailDispatched: false
        }),
        { status: 200, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
      );
    }

    const cfObj = request.cf || {};
    const clientIp =
      request.headers.get('cf-connecting-ip') ||
      request.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
      request.headers.get('x-real-ip') ||
      '127.0.0.1';
    const cfCountry = request.headers.get('cf-ipcountry') || cfObj.country || destinationCountry || 'GL';
    const cfCity = request.headers.get('cf-ipcity') || cfObj.city || '';
    const cfRegion = request.headers.get('cf-region') || cfObj.region || '';
    const cfPostal = request.headers.get('cf-postal-code') || cfObj.postalCode || '';
    const cfTimezone = request.headers.get('cf-timezone') || cfObj.timezone || '';
    const cfAsn = cfObj.asn ? `AS${cfObj.asn}` : '';
    const cfAsOrg = cfObj.asOrganization || '';
    const rawUserAgent = request.headers.get('user-agent') || 'Unknown';
    const parsedUa = parseUserAgent(rawUserAgent);
    const countryFlag = getCountryFlag(cfCountry);

    const locationParts = [cfCity, cfRegion, cfPostal, cfCountry !== 'GL' ? cfCountry : ''].filter(Boolean);
    const verifiedLocation = locationParts.length > 0 ? locationParts.join(', ') : cfCountry;

    // Cloudflare Turnstile verification (supports both TURNSTILE_SECRET_KEY and TURNSTILE_SECRET)
    const secretKey = env.TURNSTILE_SECRET_KEY || env.TURNSTILE_SECRET;
    if (secretKey) {
      if (!turnstileToken || typeof turnstileToken !== 'string' || turnstileToken.length > 2048) {
        return new Response(
          JSON.stringify({
            success: false,
            error: 'Please complete the security verification check and try again.'
          }),
          { status: 403, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
        );
      }
      try {
        const bodyParams = new URLSearchParams({
          secret: secretKey,
          response: turnstileToken
        });
        if (clientIp && clientIp !== '127.0.0.1') {
          bodyParams.set('remoteip', clientIp);
        }
        const verifyRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: bodyParams
        });
        const verifyOutcome = await verifyRes.json();
        if (!verifyOutcome.success) {
          return new Response(
            JSON.stringify({
              success: false,
              error: 'Anti-bot security verification failed. Please refresh and try again.'
            }),
            { status: 403, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
          );
        }
      } catch (_) {}
    }

    let parsedJourney = [];
    if (browsingJourney) {
      try {
        parsedJourney = typeof browsingJourney === 'string' ? JSON.parse(browsingJourney) : browsingJourney;
        if (!Array.isArray(parsedJourney)) parsedJourney = [];
      } catch (_) {
        parsedJourney = [];
      }
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

    const utmEntries = Object.entries({
      source: utmSource,
      medium: utmMedium,
      campaign: utmCampaign,
      term: utmTerm,
      content: utmContent
    }).filter(([_, v]) => Boolean(v));
    const utmSummary = utmEntries.map(([k, v]) => `${k}=${v}`).join('&');

    let emailDispatched = false;
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
      const attachmentTag = fileAttachment ? ' 📎 [File Attached]' : '';
      const prominentSubject = `${countryFlag} ${cfCountry} | ${fullName || 'Buyer'} - ${productName}${attachmentTag}`;

      const emailHtml = `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 680px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); padding: 22px 24px; color: #ffffff;">
            <div style="font-size: 11px; font-weight: 700; color: #38bdf8; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 4px;">FidgetSupply Global Sourcing Desk</div>
            <h2 style="margin: 0; font-size: 19px; font-weight: 800; color: #ffffff;">New Wholesale &amp; Custom Logo Inquiry</h2>
            <p style="margin: 4px 0 0 0; font-size: 12px; color: #94a3b8;">Received on ${new Date().toUTCString()}</p>
          </div>
          <div style="padding: 24px;">
            <h3 style="font-size: 14px; font-weight: 700; color: #0f172a; border-bottom: 2px solid #0284c7; padding-bottom: 6px; margin: 0 0 12px 0;">📋 Buyer &amp; Sourcing Requirements</h3>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 18px; font-size: 13px;">
              <tr><td style="padding: 8px 12px; font-weight: 600; color: #475569; width: 140px; background: #f8fafc; border: 1px solid #e2e8f0;">Full Name:</td><td style="padding: 8px 12px; color: #0f172a; font-weight: 700; border: 1px solid #e2e8f0;">${fullName || 'N/A'}</td></tr>
              <tr><td style="padding: 8px 12px; font-weight: 600; color: #475569; background: #f8fafc; border: 1px solid #e2e8f0;">Business Email:</td><td style="padding: 8px 12px; border: 1px solid #e2e8f0;"><a href="mailto:${cleanCustomerEmail}" style="color: #0284c7; font-weight: 700;">${cleanCustomerEmail}</a> &nbsp; <a href="${mailtoUrl}" target="_blank" style="display: inline-block; background: #16a34a; color: #ffffff; font-size: 11px; font-weight: 700; padding: 3px 10px; border-radius: 4px; text-decoration: none;">⚡️ 一键回复</a></td></tr>
              <tr><td style="padding: 8px 12px; font-weight: 600; color: #475569; background: #f8fafc; border: 1px solid #e2e8f0;">Company:</td><td style="padding: 8px 12px; color: #0f172a; border: 1px solid #e2e8f0;">${companyName || 'N/A'}</td></tr>
              <tr><td style="padding: 8px 12px; font-weight: 600; color: #475569; background: #f8fafc; border: 1px solid #e2e8f0;">Declared Country:</td><td style="padding: 8px 12px; color: #0f172a; border: 1px solid #e2e8f0;">${destinationCountry || cfCountry}</td></tr>
              <tr><td style="padding: 8px 12px; font-weight: 600; color: #475569; background: #f8fafc; border: 1px solid #e2e8f0;">Target Product / SKU:</td><td style="padding: 8px 12px; color: #0f172a; font-weight: 700; border: 1px solid #e2e8f0;">${productName}</td></tr>
              <tr><td style="padding: 8px 12px; font-weight: 600; color: #475569; background: #f8fafc; border: 1px solid #e2e8f0;">Estimated Quantity:</td><td style="padding: 8px 12px; color: #0f172a; font-weight: 700; border: 1px solid #e2e8f0;">${estimatedQuantity || 'N/A'}</td></tr>
              <tr><td style="padding: 8px 12px; font-weight: 600; color: #475569; background: #f8fafc; border: 1px solid #e2e8f0;">Branding Mode:</td><td style="padding: 8px 12px; color: #0f172a; border: 1px solid #e2e8f0;">${brandingMode || 'N/A'}</td></tr>
              ${
                fileAttachment
                  ? `
              <tr>
                <td style="padding: 8px 12px; font-weight: 600; color: #166534; background: #f0fdf4; border: 1px solid #bbf7d0;">📎 Customer File:</td>
                <td style="padding: 8px 12px; color: #15803d; font-weight: 700; border: 1px solid #bbf7d0; background: #f0fdf4;">
                  <strong>${fileAttachment.filename}</strong> (${(fileAttachment.size / (1024 * 1024)).toFixed(2)} MB)
                  <span style="display: inline-block; font-size: 11px; font-weight: 600; color: #15803d; margin-left: 8px; background: #dcfce7; border: 1px solid #86efac; padding: 2px 8px; border-radius: 4px;">Attached Directly to Email</span>
                </td>
              </tr>`
                  : ''
              }
            </table>

            <p style="font-size: 13px; font-weight: 700; color: #0f172a; margin-bottom: 6px;">📝 Project Details &amp; Notes:</p>
            <div style="background: #f8fafc; padding: 12px 14px; border-radius: 6px; border-left: 3px solid #0284c7; font-size: 13px; color: #1e293b; line-height: 1.5; white-space: pre-wrap; margin-bottom: 18px;">${inquiryDetails || 'No additional notes.'}</div>

            <div style="margin: 18px 0 22px 0; text-align: center;">
              <a href="${mailtoUrl}" target="_blank" style="display: inline-block; background: #16a34a; color: #ffffff; font-weight: 700; font-size: 15px; text-decoration: none; padding: 12px 28px; border-radius: 8px;">
                ✉️ 点击一键回复邮件 &rarr;
              </a>
            </div>

            ${journeyHtml}

            <h3 style="font-size: 13px; font-weight: 700; color: #0f172a; border-bottom: 1px solid #e2e8f0; padding-bottom: 6px; margin: 20px 0 10px 0;">🌍 Geolocation, Device &amp; Attribution Telemetry</h3>
            <table style="width: 100%; border-collapse: collapse; font-size: 12px;">
              <tr><td style="padding: 6px 10px; font-weight: 600; color: #475569; width: 140px; background: #f8fafc; border: 1px solid #e2e8f0;">Verified Location:</td><td style="padding: 6px 10px; color: #0f172a; border: 1px solid #e2e8f0;">${countryFlag} ${verifiedLocation} (${clientIp} ${cfAsOrg ? `· ${cfAsOrg} ${cfAsn}` : ''})</td></tr>
              <tr><td style="padding: 6px 10px; font-weight: 600; color: #475569; background: #f8fafc; border: 1px solid #e2e8f0;">Client Local Time:</td><td style="padding: 6px 10px; color: #0f172a; border: 1px solid #e2e8f0;">${clientLocalTime || 'N/A'} (${clientTimezone || cfTimezone || 'N/A'}) · Stayed ${timeOnPageSeconds}</td></tr>
              <tr><td style="padding: 6px 10px; font-weight: 600; color: #475569; background: #f8fafc; border: 1px solid #e2e8f0;">Device &amp; Browser:</td><td style="padding: 6px 10px; color: #0f172a; border: 1px solid #e2e8f0;">${parsedUa.device} · ${parsedUa.os} · ${parsedUa.browser} (${browserLanguage}) · ${screenResolution}</td></tr>
              <tr><td style="padding: 6px 10px; font-weight: 600; color: #475569; background: #f8fafc; border: 1px solid #e2e8f0;">Page &amp; Referrer:</td><td style="padding: 6px 10px; color: #0f172a; border: 1px solid #e2e8f0; word-break: break-all;">${pageUrl || 'N/A'} (Ref: ${pageReferrer})${utmSummary ? ` · UTM: ${utmSummary}` : ''}</td></tr>
            </table>
          </div>
        </div>
      `;

      const resendPayload = {
        from: env.RESEND_FROM_EMAIL || 'FidgetSupply Inquiries <noreply@fidgetsupply.com>',
        to: [env.NOTIFICATION_EMAIL || 'sales@fidgetsupply.com'],
        reply_to: cleanCustomerEmail,
        subject: prominentSubject,
        html: emailHtml
      };

      if (fileAttachment) {
        resendPayload.attachments = [
          {
            filename: fileAttachment.filename,
            content: fileAttachment.content
          }
        ];
      }

      let resendRes = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(resendPayload)
      });

      if (!resendRes.ok) {
        const fallbackPayload = { ...resendPayload };
        delete fallbackPayload.reply_to;
        resendRes = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(fallbackPayload)
        });
      }

      emailDispatched = resendRes.ok;
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Inquiry received successfully.',
        emailDispatched,
        hasAttachment: Boolean(fileAttachment)
      }),
      { status: 200, headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store', ...corsHeaders } }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({
        success: false,
        error: `Error processing inquiry: ${err?.message || 'Unknown error'}`,
        message: 'Error processing inquiry.'
      }),
      { status: 500, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
    );
  }
}
