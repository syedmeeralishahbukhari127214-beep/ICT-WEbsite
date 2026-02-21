import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { email, phone, address, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.titan.email",
      port: 587,
      secure: false,
      auth: {
        user: process.env.TITAN_EMAIL,
        pass: process.env.TITAN_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: "Website Contact <admission@ict.net.pk>",
      to: "admission@ict.net.pk",
      replyTo: email, // user ka email
      subject: "New Contact Form Submission",
      text: `
User Email: ${email}
Phone: ${phone}
Address: ${address}

Message:
${message}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}