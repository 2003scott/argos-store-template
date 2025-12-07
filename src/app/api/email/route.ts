import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GOOGLE_USER,
    pass: process.env.GOOGLE_PASSWORD
  }
});

export async function POST(request: Request) {
  try {
    const { to } = await request.json();

    const mailOptions = {
      from: process.env.GOOGLE_USER,
      to: to,
      subject: 'Argos Store',
      text: 'This is a test email sent from a Next.js API route using Nodemailer.'
    };

    const info = await transporter.sendMail(mailOptions);

    return NextResponse.json({
      message: 'Email sent successfully',
      info
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error occurred';
    return NextResponse.json({
      message: message
    });
  }
}
