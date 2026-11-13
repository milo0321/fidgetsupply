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
  } else if (/windows nt 6.3/i.test(ua)) {
    os = 'Windows 8.1';
  } else if (/windows nt 6.1/i.test(ua)) {
    os = 'Windows 7';
  } else if (/mac os x (\d+[._\d]+)/i.test(ua)) {
    const v = ua.match(/mac os x (\d+[._\d]+)/i)?.[1]?.replace(/_/g, '.') || '';
    os = v ? `macOS ${v}` : 'macOS';
  } else if (/linux/i.test(ua)) {
    os = 'Linux';
  } else if (/cros/i.test(ua)) {
    os = 'ChromeOS';
  }

  if (/edg\/(\d+[.\d]+)/i.test(ua)) {
    browser = `Microsoft Edge ${ua.match(/edg\/(\d+[.\d]+)/i)?.[1] || ''}`;
  } else if (/opr\/(\d+[.\d]+)/i.test(ua)) {
    browser = `Opera ${ua.match(/opr\/(\d+[.\d]+)/i)?.[1] || ''}`;
  } else if (/chrome\/(\d+[.\d]+)/i.test(ua) && !/edg|opr/i.test(ua)) {
    browser = `Google Chrome ${ua.match(/chrome\/(\d+[.\d]+)/i)?.[1] || ''}`;
  } else if (/version\/(\d+[.\d]+).*safari/i.test(ua)) {
    browser = `Apple Safari ${ua.match(/version\/(\d+[.\d]+)/i)?.[1] || ''}`;
  } else if (/firefox\/(\d+[.\d]+)/i.test(ua)) {
    browser = `Mozilla Firefox ${ua.match(/firefox\/(\d+[.\d]+)/i)?.[1] || ''}`;
  }

  return { browser: browser.trim(), os: os.trim(), device: device.trim() };
}

function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Accept, Authorization, X-Requested-With'
};

export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: corsHeaders
  });
}

export async function onRequestGet() {
  return new Response(
    JSON.stringify({
      status: 'ok',
      service: 'FidgetSupply WhatsApp Lead Intelligence API'
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        ...corsHeaders
      }
    }
  );
}

export async function onRequestPost(context) {
  const { request, env } = context;

  try {
    const payload = (await request.json().catch(() => ({}))) || {};

    const {
      event = 'message_sent',
      triggerSource = 'WhatsApp Chat Modal',
      userEmail = '',
      userName = '',
      userCompany = '',
      pageUrl = '',
      pagePath = '',
      pageTitle = 'FidgetSupply.com',
      productName = 'Wholesale Metal EDC Fidgets',
      messageText = '',
      browsingJourney = '',
      rx_bot_trap_hp9 = '',
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
      utmContent = ''
    } = payload;

    // Only dispatch email notification when visitor initiates a WhatsApp message
    if (event !== 'message_sent') {
      return new Response(
        JSON.stringify({ success: true, status: 'skipped_not_message_sent' }),
        {
          status: 200,
          headers: { 'Content-Type': 'application/json', ...corsHeaders }
        }
      );
    }

    // Anti-bot Honeypot & Crawler UA shield
    const rawUserAgent = request.headers.get('user-agent') || 'Unknown';
    if (
      (rx_bot_trap_hp9 && String(rx_bot_trap_hp9).trim().length > 0) ||
      /Googlebot|Bingbot|AhrefsBot|SemrushBot|MJ12bot|DotBot|PetalBot|Baiduspider|YandexBot|HeadlessChrome/i.test(rawUserAgent)
    ) {
      return new Response(
        JSON.stringify({ success: true, leadDispatched: false }),
        {
          status: 200,
          headers: { 'Content-Type': 'application/json', ...corsHeaders }
        }
      );
    }

    const cleanCustomerEmail = String(userEmail || '').trim().replace(/[\r\n\s]+/g, '');
    const hasEmail = Boolean(cleanCustomerEmail && cleanCustomerEmail.includes('@'));

    // 1. Extract Server-side Cloudflare Geolocation & Network Intelligence
    const cfObj = request.cf || {};
    const clientIp =
      request.headers.get('cf-connecting-ip') ||
      request.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
      request.headers.get('x-real-ip') ||
      '127.0.0.1';

    const cfCountry = request.headers.get('cf-ipcountry') || cfObj.country || 'Unknown';
    const cfCity = request.headers.get('cf-ipcity') || cfObj.city || '';
    const cfRegion = request.headers.get('cf-region') || cfObj.region || '';
    const cfPostal = request.headers.get('cf-postal-code') || cfObj.postalCode || '';
    const cfTimezone = request.headers.get('cf-timezone') || cfObj.timezone || '';
    const cfAsn = cfObj.asn
      ? `AS${cfObj.asn}`
      : request.headers.get('cf-asn')
      ? `AS${request.headers.get('cf-asn')}`
      : '';
    const cfAsOrg = cfObj.asOrganization || '';
    const parsedUa = parseUserAgent(rawUserAgent);

    let countryCode2 = 'GL';
    if (cfCountry && cfCountry.length === 2 && cfCountry !== 'XX' && cfCountry !== 'Unknown') {
      countryCode2 = cfCountry.toUpperCase();
    }
    const countryFlag = getCountryFlag(countryCode2);

    const locationParts = [cfCity, cfRegion, cfPostal, cfCountry !== 'Unknown' ? cfCountry : ''].filter(Boolean);
    const verifiedLocation = locationParts.length > 0 ? locationParts.join(', ') : 'Location not available';

    // 2. Parse Browsing Journey
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
      if (isNaN(sec) || sec <= 0) return '1s';
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
          const stepNum = idx + 1;
          const durStr = formatDuration(Number(step.duration) || 0);
          const isCurrentTag = step.isCurrent
            ? `<span style="display: inline-block; background: #dcfce7; color: #15803d; font-weight: 700; font-size: 11px; padding: 1px 6px; border-radius: 4px; margin-left: 6px;">📍 发起 WhatsApp 询盘</span>`
            : '';
          return `
            <div style="margin-bottom: 5px; font-size: 12px; line-height: 1.5;">
              <span style="display: inline-block; background: #e2e8f0; color: #475569; font-weight: 700; font-size: 10px; width: 18px; height: 18px; line-height: 18px; text-align: center; border-radius: 50%; margin-right: 4px;">${stepNum}</span>
              <span style="font-family: monospace; font-weight: 600; color: #0f172a; word-break: break-all;">${escapeHtml(step.path || '/')}</span>
              &nbsp;—&nbsp;
              <span style="background: #f1f5f9; border: 1px solid #cbd5e1; color: #0284c7; font-weight: 700; font-size: 11px; padding: 1px 6px; border-radius: 4px;">⏱️ 停留 ${durStr}</span>
              ${isCurrentTag}
            </div>
          `;
        })
        .join('');

      journeyHtml = `
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 10px 12px; margin: 16px 0;">
          <div style="font-size: 11px; font-weight: 700; color: #0284c7; text-transform: uppercase; margin-bottom: 6px; letter-spacing: 0.5px;">
            🧭 客户全站浏览轨迹 (共 ${parsedJourney.length} 个页面 · 站内总时长 ${formatDuration(totalJourneySec)})
          </div>
          ${stepItems}
        </div>
      `;
    }

    // 3. Build UTM Summary String
    const utmEntries = Object.entries({
      source: utmSource,
      medium: utmMedium,
      campaign: utmCampaign,
      term: utmTerm,
      content: utmContent
    }).filter(([_, v]) => Boolean(v));
    const utmSummary = utmEntries.map(([k, v]) => `${k}=${v}`).join('&');

    const targetProduct = String(productName || 'Wholesale Metal EDC Fidgets').trim();
    const fullPageUrl = pageUrl || (pagePath ? `https://fidgetsupply.com${pagePath}` : 'https://fidgetsupply.com');

    // 4. Prominent Subject Line matching ruixinggifts.com
    const prominentSubject = hasEmail
      ? `${countryFlag} ${countryCode2} | ${cleanCustomerEmail} - ${targetProduct} [WhatsApp]`.trim()
      : `💬 ${countryFlag} ${countryCode2} | WhatsApp Chat Started - ${targetProduct}`.trim();

    // 5. One-click Reply mailto URI (if email captured)
    const replySubject = `Re: Wholesale Quote for ${targetProduct} — FidgetSupply.com`;
    const todayDate = new Date().toISOString().split('T')[0];
    const quotedMessage = String(messageText || '')
      .trim()
      .split('\n')
      .map((line) => `> ${line}`)
      .join('\n');

    const replyBody = `Dear ${userName || 'Customer'},




Best regards,
FidgetSupply Sourcing Desk
https://fidgetsupply.com
WhatsApp: +86 187 5012 6315

----- Original WhatsApp Inquiry -----
On ${todayDate}, <${cleanCustomerEmail || 'Customer'}> wrote:
> Target Product: ${targetProduct}
> Page URL: ${fullPageUrl}
> WhatsApp Message:
${quotedMessage}`;

    const rfcBody = replyBody.replace(/\r?\n/g, '\r\n');
    const mailtoUrl = hasEmail
      ? `mailto:${cleanCustomerEmail}?subject=${encodeURIComponent(replySubject)}&body=${encodeURIComponent(rfcBody)}`
      : '';

    // 6. Structured Email HTML matching ruixinggifts.com
    const emailHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 680px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">
        <!-- Header Banner -->
        <div style="background: linear-gradient(135deg, ${hasEmail ? '#064e3b' : '#0f766e'} 0%, #0f172a 100%); padding: 24px; color: #ffffff;">
          <div style="font-size: 11px; font-weight: 700; color: #4ade80; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 6px;">
            ${hasEmail ? '🔥 HIGH INTENT WHATSAPP CONVERSION (EMAIL CAPTURED)' : '💬 LIVE WHATSAPP CHAT INITIATED (DIRECT 1-CLICK)'}
          </div>
          <h1 style="margin: 0; font-size: 20px; font-weight: 800; color: #ffffff; line-height: 1.3;">
            ${hasEmail ? 'WhatsApp Wholesale Inquiry with Email' : 'WhatsApp Direct Sourcing Chat Initiated'}
          </h1>
          <p style="margin: 6px 0 0 0; font-size: 13px; color: #94a3b8;">Triggered on ${new Date().toUTCString()}</p>
        </div>

        <div style="padding: 24px;">
          <!-- 1. WhatsApp Activity & Lead Status -->
          <h2 style="font-size: 14px; font-weight: 700; color: #0f172a; border-bottom: 2px solid #22c55e; padding-bottom: 6px; margin: 0 0 14px 0;">
            💬 WhatsApp Lead &amp; Product Context
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 13px;">
            <tr>
              <td style="padding: 8px 12px; font-weight: 600; color: #475569; width: 140px; background: #f8fafc; border: 1px solid #e2e8f0;">Customer Email:</td>
              <td style="padding: 8px 12px; border: 1px solid #e2e8f0; font-weight: 700;">
                ${
                  hasEmail
                    ? `
                  <a href="mailto:${escapeHtml(cleanCustomerEmail)}" style="color: #0284c7; text-decoration: none; font-size: 14px;">${escapeHtml(cleanCustomerEmail)}</a>
                  &nbsp;&nbsp;
                  <a href="${mailtoUrl}" target="_blank" style="display: inline-block; background: #16a34a; color: #ffffff; font-size: 11px; font-weight: 700; padding: 4px 10px; border-radius: 4px; text-decoration: none; vertical-align: middle;">⚡️ 一键回复</a>
                `
                    : `
                  <span style="color: #64748b; font-weight: 500;">(Not provided - Direct 1-Click WhatsApp Chat)</span>
                `
                }
              </td>
            </tr>
            ${
              userName || userCompany
                ? `
            <tr>
              <td style="padding: 8px 12px; font-weight: 600; color: #475569; background: #f8fafc; border: 1px solid #e2e8f0;">Buyer / Company:</td>
              <td style="padding: 8px 12px; color: #0f172a; font-weight: 600; border: 1px solid #e2e8f0;">${escapeHtml([userName, userCompany].filter(Boolean).join(' · '))}</td>
            </tr>
            `
                : ''
            }
            <tr>
              <td style="padding: 8px 12px; font-weight: 600; color: #475569; background: #f8fafc; border: 1px solid #e2e8f0;">Activity Status:</td>
              <td style="padding: 8px 12px; border: 1px solid #e2e8f0; font-weight: 700; color: #16a34a;">
                ${hasEmail ? '🔥 访客已填写信息并拉起 WhatsApp 对话' : '💬 访客已点击并直接拉起 WhatsApp 对话'} (${escapeHtml(triggerSource)})
              </td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; font-weight: 600; color: #475569; background: #f8fafc; border: 1px solid #e2e8f0;">Target Product:</td>
              <td style="padding: 8px 12px; color: #0f172a; font-weight: 700; border: 1px solid #e2e8f0;">${escapeHtml(targetProduct)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; font-weight: 600; color: #475569; background: #f8fafc; border: 1px solid #e2e8f0;">Current Page:</td>
              <td style="padding: 8px 12px; border: 1px solid #e2e8f0;"><a href="${escapeHtml(fullPageUrl)}" style="color: #0284c7; font-weight: 600; text-decoration: none; word-break: break-all;">${escapeHtml(fullPageUrl)}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; font-weight: 600; color: #475569; background: #f8fafc; border: 1px solid #e2e8f0;">Page Title:</td>
              <td style="padding: 8px 12px; color: #0f172a; border: 1px solid #e2e8f0;">${escapeHtml(pageTitle)}</td>
            </tr>
          </table>

          ${
            messageText
              ? `
          <div style="margin-bottom: 24px;">
            <div style="font-size: 12px; font-weight: 700; color: #166534; text-transform: uppercase; margin-bottom: 6px;">📨 WhatsApp Inquiry Message:</div>
            <div style="background: #f0fdf4; padding: 14px 16px; border-radius: 8px; border-left: 4px solid #22c55e; color: #1e293b; font-size: 13px; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(messageText)}</div>
          </div>
          `
              : ''
          }

          ${
            hasEmail
              ? `
          <!-- Standalone One-Click Reply Button -->
          <div style="margin: 20px 0 24px 0; text-align: center;">
            <a href="${mailtoUrl}" target="_blank" style="display: inline-block; background: linear-gradient(135deg, #16a34a 0%, #15803d 100%); color: #ffffff; font-weight: 800; font-size: 15px; text-decoration: none; padding: 13px 32px; border-radius: 8px; box-shadow: 0 4px 14px rgba(22, 163, 74, 0.35); letter-spacing: 0.3px;">
              ✉️ 点击一键回复邮件 &rarr;
            </a>
          </div>
          `
              : ''
          }

          ${journeyHtml}

          <!-- 2. Geolocation Intelligence -->
          <h2 style="font-size: 14px; font-weight: 700; color: #0f172a; border-bottom: 2px solid #10b981; padding-bottom: 6px; margin: 24px 0 14px 0;">
            🌍 Geolocation &amp; Network Intelligence (Cloudflare Verified)
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 13px;">
            <tr>
              <td style="padding: 8px 12px; font-weight: 600; color: #475569; width: 140px; background: #f8fafc; border: 1px solid #e2e8f0;">Verified Location:</td>
              <td style="padding: 8px 12px; color: #0f172a; font-weight: 700; border: 1px solid #e2e8f0;">${countryFlag} ${escapeHtml(verifiedLocation)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; font-weight: 600; color: #475569; background: #f8fafc; border: 1px solid #e2e8f0;">Client Local Time:</td>
              <td style="padding: 8px 12px; color: #0f172a; border: 1px solid #e2e8f0;"><strong>${escapeHtml(clientLocalTime || 'N/A')}</strong> <span style="color: #64748b;">(${escapeHtml(clientTimezone || cfTimezone || 'N/A')})</span></td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; font-weight: 600; color: #475569; background: #f8fafc; border: 1px solid #e2e8f0;">Client IP &amp; Network:</td>
              <td style="padding: 8px 12px; color: #0f172a; font-family: monospace; border: 1px solid #e2e8f0;">${escapeHtml(clientIp)} ${cfAsOrg ? `(${escapeHtml(cfAsOrg)} ${escapeHtml(cfAsn)})` : ''}</td>
            </tr>
          </table>

          <!-- 3. Device & System Fingerprint -->
          <h2 style="font-size: 14px; font-weight: 700; color: #0f172a; border-bottom: 2px solid #8b5cf6; padding-bottom: 6px; margin: 24px 0 14px 0;">
            💻 Device &amp; Hardware Fingerprint
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 13px;">
            <tr>
              <td style="padding: 8px 12px; font-weight: 600; color: #475569; width: 140px; background: #f8fafc; border: 1px solid #e2e8f0;">Device &amp; OS:</td>
              <td style="padding: 8px 12px; color: #0f172a; border: 1px solid #e2e8f0;">${escapeHtml(parsedUa.device)} — ${escapeHtml(parsedUa.os)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; font-weight: 600; color: #475569; background: #f8fafc; border: 1px solid #e2e8f0;">Browser:</td>
              <td style="padding: 8px 12px; color: #0f172a; border: 1px solid #e2e8f0;">${escapeHtml(parsedUa.browser)} <span style="color: #64748b;">(${escapeHtml(browserLanguage)})</span></td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; font-weight: 600; color: #475569; background: #f8fafc; border: 1px solid #e2e8f0;">Screen Resolution:</td>
              <td style="padding: 8px 12px; color: #0f172a; border: 1px solid #e2e8f0;">${escapeHtml(screenResolution)}</td>
            </tr>
          </table>

          <!-- 4. Traffic Source & Marketing Attribution -->
          <h2 style="font-size: 14px; font-weight: 700; color: #0f172a; border-bottom: 2px solid #f59e0b; padding-bottom: 6px; margin: 24px 0 14px 0;">
            🎯 Traffic Source &amp; Marketing Attribution
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 10px; font-size: 13px;">
            <tr>
              <td style="padding: 8px 12px; font-weight: 600; color: #475569; width: 140px; background: #f8fafc; border: 1px solid #e2e8f0;">Submission Page:</td>
              <td style="padding: 8px 12px; border: 1px solid #e2e8f0;"><a href="${escapeHtml(fullPageUrl)}" style="color: #0284c7; text-decoration: none; word-break: break-all;">${escapeHtml(fullPageUrl)}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; font-weight: 600; color: #475569; background: #f8fafc; border: 1px solid #e2e8f0;">Inbound Referrer:</td>
              <td style="padding: 8px 12px; color: #0f172a; border: 1px solid #e2e8f0; word-break: break-all;">${escapeHtml(pageReferrer)}</td>
            </tr>
            ${
              utmSummary
                ? `<tr><td style="padding: 8px 12px; font-weight: 600; color: #475569; background: #f8fafc; border: 1px solid #e2e8f0;">Campaign (UTM):</td><td style="padding: 8px 12px; color: #0f172a; font-family: monospace; border: 1px solid #e2e8f0;">${escapeHtml(utmSummary)}</td></tr>`
                : ''
            }
            <tr>
              <td style="padding: 8px 12px; font-weight: 600; color: #475569; background: #f8fafc; border: 1px solid #e2e8f0;">Time on Page:</td>
              <td style="padding: 8px 12px; color: #0f172a; border: 1px solid #e2e8f0;">${escapeHtml(timeOnPageSeconds)}</td>
            </tr>
          </table>
        </div>

        <!-- Footer Banner -->
        <div style="background: #f8fafc; padding: 14px 24px; border-top: 1px solid #e2e8f0; font-size: 11px; color: #94a3b8; text-align: center;">
          FidgetSupply.com Sourcing Hub · Live WhatsApp Lead Intelligence System
        </div>
      </div>
    `;

    let leadDispatched = false;
    const resendApiKey = env.RESEND_API_KEY;
    const recipientRaw = env.NOTIFICATION_EMAIL || 'sales@fidgetsupply.com';
    const recipientEmails = recipientRaw.split(',').map((e) => e.trim()).filter(Boolean);
    const senderEmail = env.RESEND_FROM_EMAIL || 'FidgetSupply Inquiries <quotes@send.fidgetsupply.com>';

    if (resendApiKey) {
      try {
        const emailPayload = {
          from: senderEmail,
          to: recipientEmails,
          subject: prominentSubject,
          html: emailHtml
        };
        if (hasEmail) {
          emailPayload.reply_to = cleanCustomerEmail;
        }

        let resendRes = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(emailPayload)
        });

        if (!resendRes.ok) {
          const errText = await resendRes.text();
          console.error('WhatsApp tracking Resend primary error:', errText);
          const fallbackPayload = { ...emailPayload };
          delete fallbackPayload.reply_to;
          if (errText.includes('not verified') || errText.includes('domain')) {
            fallbackPayload.from = 'FidgetSupply Inquiries <quotes@send.ruixinggifts.com>';
          }
          resendRes = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${resendApiKey}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(fallbackPayload)
          });
        }

        leadDispatched = resendRes.ok;
      } catch (sendErr) {
        console.error('WhatsApp Resend fetch exception:', sendErr);
      }
    }

    return new Response(
      JSON.stringify({ success: true, leadDispatched }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store', ...corsHeaders }
      }
    );
  } catch (err) {
    console.error('WhatsApp track API error:', err);
    return new Response(
      JSON.stringify({ success: true, leadDispatched: false }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json', ...corsHeaders }
      }
    );
  }
}
