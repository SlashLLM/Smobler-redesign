import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const fromEmail =
      process.env.RESEND_FROM_EMAIL || 'Smobler Dispatch <onboarding@resend.dev>';
    const toEmail = (
      process.env.RESEND_TO_EMAIL || 'loretta@smobler.io,veronica@smobler.io'
    )
      .split(',')
      .map((e) => e.trim())
      .filter(Boolean);

    if (!apiKey) {
      console.warn(
        '[Resend API] RESEND_API_KEY is missing. Simulating newsletter subscription.'
      );
      console.log('[Resend API] Newsletter subscriber:', email);
      return NextResponse.json({
        success: true,
        simulated: true,
      });
    }

    const resend = new Resend(apiKey);

    // Notify Smobler team of new Dispatch subscriber
    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: `[Dispatch Subscription] New subscriber: ${email}`,
      html: `
        <div style="font-family: monospace; padding: 20px; background: #fafafa; border: 1px solid #e4e4e7;">
          <div style="color: #ffd100; font-weight: bold; background: #000; padding: 6px 12px; display: inline-block;">▸ NEW DISPATCH SUBSCRIBER</div>
          <p style="margin-top: 16px; font-size: 14px;"><strong>Email:</strong> ${email}</p>
          <p style="color: #71717a; font-size: 11px;">Subscribed on ${new Date().toUTCString()}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('[Newsletter API Error]', error);
    return NextResponse.json(
      { error: error?.message || 'Failed to process subscription' },
      { status: 500 }
    );
  }
}
