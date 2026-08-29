import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      company,
      projectType,
      budget,
      timeline,
      message,
      preferredOffice = 'SG',
    } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields (name, email, message)' },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const fromEmail =
      process.env.RESEND_FROM_EMAIL || 'Smobler Scope <onboarding@resend.dev>';
    const toEmail = (
      process.env.RESEND_TO_EMAIL || 'loretta@smobler.io,veronica@smobler.io'
    )
      .split(',')
      .map((e) => e.trim())
      .filter(Boolean);

    // If Resend API Key is missing (e.g. initial dev setup)
    if (!apiKey) {
      console.warn(
        '[Resend API] RESEND_API_KEY is not configured in environment variables. Simulating email transmission.'
      );
      console.log('[Resend API] Scope dossier payload:', {
        name,
        email,
        company,
        projectType,
        budget,
        timeline,
        message,
        preferredOffice,
      });

      return NextResponse.json({
        success: true,
        simulated: true,
        message:
          'Dossier logged in development mode. Set RESEND_API_KEY in .env.local to send live emails.',
      });
    }

    const resend = new Resend(apiKey);

    // Human-readable project type map
    const projectTypeLabels: Record<string, string> = {
      'ai-products': 'AI Products & Optimization (Slashboard)',
      'ai-food-security': 'AI for Food Security (Nutra)',
      'ai-automation': 'AI Enterprise Automation',
      'blockchain-bunkering': 'Blockchain & Digital Bunkering',
      phygital: 'Phygital Activations',
      'nova-partnership': 'Nova Partnership',
      careers: 'Careers / Hiring Inquiry',
    };

    const projectLabel = projectTypeLabels[projectType] || projectType || 'General Scope';

    // HTML Email Template matching Smobler Brand System
    const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Smobler Project Scope Dossier</title>
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f4f5; margin: 0; padding: 24px; color: #18181b; }
        .container { max-width: 600px; margin: 0 auto; background: #ffffff; border: 2px solid #ffd100; border-radius: 4px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.08); }
        .header { background: #18181b; color: #ffffff; padding: 28px 32px; border-bottom: 3px solid #ffd100; }
        .tag { font-family: monospace; font-size: 11px; letter-spacing: 1px; color: #ffd100; font-weight: bold; margin-bottom: 8px; }
        .title { font-size: 22px; font-weight: 700; margin: 0; color: #ffffff; letter-spacing: -0.5px; }
        .content { padding: 32px; }
        .section-label { font-family: monospace; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #71717a; margin-bottom: 8px; font-weight: bold; }
        .detail-card { background: #fdfdfd; border: 1px solid #e4e4e7; border-left: 4px solid #ffd100; padding: 16px 20px; margin-bottom: 20px; border-radius: 2px; }
        .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px; }
        .field { margin-bottom: 12px; }
        .field-label { font-family: monospace; font-size: 10px; text-transform: uppercase; color: #a1a1aa; font-weight: bold; }
        .field-value { font-size: 14px; font-weight: 600; color: #18181b; margin-top: 2px; }
        .message-box { background: #fafafa; border: 1px solid #e4e4e7; padding: 20px; font-size: 14px; line-height: 1.6; color: #27272a; white-space: pre-wrap; margin-top: 8px; }
        .badge { display: inline-block; background: #ffd100; color: #000000; font-family: monospace; font-size: 11px; font-weight: bold; px: 8px; py: 4px; padding: 4px 8px; }
        .footer { background: #fafafa; border-top: 1px solid #e4e4e7; padding: 20px 32px; text-align: center; font-family: monospace; font-size: 11px; color: #a1a1aa; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="tag">▸ NEW PROJECT SCOPE TRANSMISSION</div>
          <h1 class="title">${projectLabel}</h1>
        </div>

        <div class="content">
          <div class="section-label">01 / REQUESTER DOSSIER</div>
          <div class="detail-card">
            <div class="field">
              <div class="field-label">NAME</div>
              <div class="field-value">${name}</div>
            </div>
            <div class="field">
              <div class="field-label">BUSINESS EMAIL</div>
              <div class="field-value"><a href="mailto:${email}" style="color: #18181b; text-decoration: underline;">${email}</a></div>
            </div>
            ${
              company
                ? `<div class="field" style="margin-bottom:0;">
                    <div class="field-label">COMPANY / ORGANIZATION</div>
                    <div class="field-value">${company}</div>
                  </div>`
                : ''
            }
          </div>

          <div class="section-label">02 / ROUTING & HUB SPECIFICATION</div>
          <div class="detail-card" style="border-left-color: #18181b;">
            <div class="field">
              <div class="field-label">TARGET REGIONAL HUB</div>
              <div class="field-value"><span class="badge">[${preferredOffice}] REGIONAL STUDIO</span></div>
            </div>
            <div class="field" style="margin-bottom:0;">
              <div class="field-label">BUILD CATEGORY</div>
              <div class="field-value">${projectLabel}</div>
            </div>
          </div>

          <div class="section-label">03 / PROJECT BRIEF & SCOPE</div>
          <div class="message-box">${message}</div>
        </div>

        <div class="footer">
          TRANSMITTED VIA SMOBLER WEB ENGINE · ${new Date().toUTCString()}
        </div>
      </div>
    </body>
    </html>
    `;

    // Send Team Notification Email via Resend
    const { data: teamData, error: teamError } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: `[Scope Transmission] ${projectLabel} - ${name}${company ? ` (${company})` : ''}`,
      replyTo: email,
      html: htmlContent,
    });

    if (teamError) {
      console.error('[Resend Error]', teamError);
      return NextResponse.json(
        { error: teamError.message || 'Failed to send notification email' },
        { status: 500 }
      );
    }

    // Send confirmation receipt to user if fromEmail is not using sandbox domain, or attempt gracefully
    try {
      await resend.emails.send({
        from: fromEmail,
        to: email,
        subject: `Scope Dossier Received — Smobler [${preferredOffice}]`,
        html: `
          <div style="font-family: sans-serif; max-width: 500px; padding: 24px; border: 1px solid #e4e4e7;">
            <h2 style="margin-top:0;">Thank you, ${name}.</h2>
            <p style="color: #52525b; line-height: 1.5;">
              We have received your project scope inquiry for <strong>${projectLabel}</strong>.
              Your details have been routed directly to our <strong>[${preferredOffice}]</strong> regional studio leads.
            </p>
            <p style="color: #52525b; line-height: 1.5;">
              Our technical team will review your requirements and follow up with you shortly.
            </p>
            <hr style="border: none; border-top: 1px solid #e4e4e7; margin: 20px 0;" />
            <p style="font-family: monospace; font-size: 11px; color: #a1a1aa; margin: 0;">
              Smobler Studios · Singapore & Honolulu
            </p>
          </div>
        `,
      });
    } catch (receiptErr) {
      // Non-blocking if sandbox environment restrictions apply
      console.log('[Resend Receipt Notice]', receiptErr);
    }

    return NextResponse.json({
      success: true,
      data: teamData,
    });
  } catch (error: any) {
    console.error('[Contact API Route Error]', error);
    return NextResponse.json(
      { error: error?.message || 'An internal error occurred' },
      { status: 500 }
    );
  }
}
