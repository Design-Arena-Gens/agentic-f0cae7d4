import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Basic validation
    if (!data?.email || !data?.name) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Simulate persistence/logging; integrate with CRM or email in production
    console.log("New lead:", {
      name: data.name,
      email: data.email,
      phone: data.phone ?? null,
      interest: data.interest ?? null,
      notes: data.notes ?? null,
      at: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
