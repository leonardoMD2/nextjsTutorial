import { NextResponse } from "next/server";

// GET
export async function GET() {
  return NextResponse.json({ message: 'Hello world from API endpoint!' });
}

// POST
export async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json({ received: body });
}
