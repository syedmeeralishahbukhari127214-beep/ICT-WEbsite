import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ success: false, message: "Email is required" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.titan.email", // same as your contact form
      port: 587,
      secure: false,
      auth: {
        user: process.env.TITAN_EMAIL,    // your Titan email
        pass: process.env.TITAN_PASSWORD, // your Titan password
      },
    });

    await transporter.sendMail({
      from: `"Newsletter Signup" <${process.env.TITAN_EMAIL}>`,
      to: "admission@ict.net.pk",       // where you want to receive subscriber emails
      replyTo: email,
      subject: "New Newsletter Subscription",
      text: `New subscriber: ${email}`,
      html: `<p>New subscriber: <strong>${email}</strong></p>`,
    });

    return NextResponse.json({ success: true, message: "Subscriber email sent!" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}