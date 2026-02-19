import { NextResponse } from "next/server";
import { supabase } from "@/utils/supabase";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, program, city, education, reason } = body;

    if (!name || !phone || !email || !program || !city || !education || !reason) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const { error } = await supabase.from("ict_leads").insert([
      { name, phone, email, program, city, education, reason },
    ]);

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json(
        { error: "Failed to save lead" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 400 }
    );
  }
}
