// app/api/generate-text/route.ts

import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { word } = await req.json();
    
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        { role: "system", content: "You are a helpful assistant that explains ASL signs." },
        { role: "user", content: `Explain how to sign the word "${word}" in American Sign Language. Provide a clear, step-by-step description.` }
      ],
    });

    const explanation = completion.choices[0].message.content;
    return NextResponse.json({ explanation });
  } catch (error) {
    console.error('Error generating text:', error);
    return NextResponse.json({ error: 'Failed to generate text explanation' }, { status: 500 });
  }
}