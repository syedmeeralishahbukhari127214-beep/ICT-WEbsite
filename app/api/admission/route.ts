import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

interface AdmissionForm {
  name: string;
  email: string;
  course: string;
  mode: string;
}

export async function POST(req: Request) {
  try {
    const { name, email, course, mode }: AdmissionForm = await req.json();

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
      from: "Website Admission <admission@ict.net.pk>",
      to: "admission@ict.net.pk",
      replyTo: email,
      subject: `New Admission Form Submission`,
      text: `
New Admission Form Submission:

Name: ${name}
Email: ${email}
Course: ${course}
Mode: ${mode}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Admission form send error:", error);
    return NextResponse.json({ success: false, error: "Failed to send message" }, { status: 500 });
  }
}