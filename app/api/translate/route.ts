// pages/api/translate.js (for Pages Router)
// or app/api/translate/route.ts (for App Router)

import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: any) {
  try {
    const { signs } = await req.json();

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a translator that converts sequences of ASL signs into natural English sentences."
        },
        {
          role: "user",
          content: `Translate the following sequence of ASL signs into a natural English sentence: ${signs.join(' ')}`
        }
      ],
    });

    return NextResponse.json({ translation: response.choices[0].message.content });
  } catch (error) {
    console.error('Error during translation:', error);
    return NextResponse.json({ error: 'An error occurred during translation' }, { status: 500 });
  }
}