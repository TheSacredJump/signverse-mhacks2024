import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'Hello from API!' });
}

export async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json({ message: `Received: ${body.input}` });
}