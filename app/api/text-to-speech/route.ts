// app/api/text-to-speech/route.js
import { NextResponse } from 'next/server';
import OpenAI from 'openai';

export async function POST(request) {
  const { text } = await request.json();

  if (!text) {
    return NextResponse.json({ error: 'Text is required' }, { status: 400 });
  }

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  try {
    const mp3 = await openai.audio.speech.create({
      model: "tts-1",
      voice: "nova",
      input: text,
    });

    const buffer = Buffer.from(await mp3.arrayBuffer());
    
    return new NextResponse(buffer, {
      status: 200,
      headers: {
        'Content-Type': 'audio/mpeg',
      },
    });
  } catch (error) {
    console.error('Error in text-to-speech API:', error);
    return NextResponse.json({ error: 'Error generating speech' }, { status: 500 });
  }
}