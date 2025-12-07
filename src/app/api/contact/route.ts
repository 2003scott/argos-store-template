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
    const { to, subject, text, tel, names, surnames } = await request.json();

    const adminHtmlContent = `
      <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f5f5f5;">
        <h2 style="color: #333;">Correo :</h2>
        <div style="background-color: white; padding: 20px; border-radius: 8px;">
          <p><strong>Nombre:</strong> ${names}</p>
          <p><strong>Apellido:</strong> ${surnames}</p>
          <p><strong>Teléfono:</strong> ${tel}</p>
          <p><strong>Email:</strong> ${to}</p>
          <p><strong>Asunto:</strong> ${subject}</p>
          <hr style="border: 1px solid #ddd; margin: 20px 0;">
          <p><strong>Mensaje:</strong></p>
          <p>${text}</p>
        </div>
      </div>
    `;

    const userHtmlContent = `
      <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f5f5f5;">
        <h2 style="color: #333;">¡Gracias por contactarnos!</h2>
        <div style="background-color: white; padding: 20px; border-radius: 8px;">
          <p>Hola <strong>${names}</strong>,</p>
          <p>Tu correo fue recibido correctamente.</p>
          <p>Te atenderemos en cuanto estemos disponibles.</p>
          <hr style="border: 1px solid #ddd; margin: 20px 0;">
          <p style="color: #666; font-size: 12px;">
            <strong>Detalles de tu solicitud:</strong><br>
            Mensaje: ${text}
          </p>
        </div>
        <p style="color: #999; font-size: 12px; margin-top: 20px;">
          Este es un email automático, por favor no responder a este correo.
        </p>
      </div>
    `;

    const adminMailOptions = {
      from: process.env.GOOGLE_USER,
      to: process.env.GOOGLE_USER,
      subject: `Nuevo Contacto: ${subject}`,
      html: adminHtmlContent,
      text: text
    };

    const userMailOptions = {
      from: process.env.GOOGLE_USER,
      to: to,
      subject: 'Tu correo fue recibido correctamente',
      html: userHtmlContent
    };

    const adminInfo = await transporter.sendMail(adminMailOptions);
    const userInfo = await transporter.sendMail(userMailOptions);

    return NextResponse.json(
      {
        message: 'Email sent successfully',
        success: true,
        adminEmail: adminInfo.messageId,
        userEmail: userInfo.messageId
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error occurred';
    return NextResponse.json(
      {
        message: message,
        success: false
      },
      { status: 500 }
    );
  }
}
