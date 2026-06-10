import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Basic in-memory rate limiting
const rateLimit = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX = 3; // max requests per window

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);

  if (!entry || now - entry.timestamp > RATE_LIMIT_WINDOW) {
    rateLimit.set(ip, { count: 1, timestamp: now });
    return false;
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return true;
  }

  entry.count++;
  return false;
}

// Validation
function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function sanitize(str: string): string {
  return str.replace(/[<>]/g, '').trim();
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      request.headers.get('x-real-ip') ||
      'unknown';

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    // Parse body
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, subject, and message are required.' },
        { status: 400 }
      );
    }

    // Validate email format
    if (!validateEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email address format.' },
        { status: 400 }
      );
    }

    // Validate field lengths
    if (name.length > 100 || email.length > 200 || message.length > 5000) {
      return NextResponse.json(
        { error: 'Field values exceed maximum allowed length.' },
        { status: 400 }
      );
    }

    // Validate subject
    const validSubjects = ['Speaking', 'Collaboration', 'Brand Partnership', 'Other'];
    if (!validSubjects.includes(subject)) {
      return NextResponse.json(
        { error: 'Invalid subject selection.' },
        { status: 400 }
      );
    }

    // Check for API key
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Email service is not configured. Please try again later.' },
        { status: 500 }
      );
    }

    // Send email via Resend
    const resend = new Resend(apiKey);

    const sanitizedName = sanitize(name);
    const sanitizedMessage = sanitize(message);
    const sanitizedPhone = phone ? sanitize(phone) : 'Not provided';

    const { error } = await resend.emails.send({
      from: 'Raj Shamani Website <onboarding@resend.dev>',
      to: ['contact@rajshamani.com'],
      subject: `[Website] ${subject} — ${sanitizedName}`,
      html: `
        <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #ffffff; padding: 32px; border-radius: 16px;">
          <div style="border-bottom: 2px solid #d4a853; padding-bottom: 16px; margin-bottom: 24px;">
            <h1 style="font-size: 24px; margin: 0; background: linear-gradient(135deg, #d4a853, #f0d48a); -webkit-background-clip: text; color: #d4a853;">
              New Contact Form Submission
            </h1>
          </div>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #a0a0a0; width: 120px;">Name</td>
              <td style="padding: 8px 0; font-weight: 600;">${sanitizedName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #a0a0a0;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #d4a853;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #a0a0a0;">Phone</td>
              <td style="padding: 8px 0;">${sanitizedPhone}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #a0a0a0;">Subject</td>
              <td style="padding: 8px 0; color: #d4a853; font-weight: 600;">${subject}</td>
            </tr>
          </table>

          <div style="margin-top: 24px; padding: 16px; background: #1a1a1a; border-radius: 8px; border-left: 3px solid #d4a853;">
            <p style="color: #a0a0a0; margin: 0 0 8px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Message</p>
            <p style="margin: 0; line-height: 1.6; white-space: pre-wrap;">${sanitizedMessage}</p>
          </div>

          <p style="margin-top: 24px; font-size: 12px; color: #666;">
            Sent from rajshamani.com contact form
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email. Please try again later.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Message sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}
