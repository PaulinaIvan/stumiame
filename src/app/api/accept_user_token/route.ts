import { NextResponse } from 'next/server';
import { SpotifyApi } from '@spotify/web-api-ts-sdk';

let sdk: SpotifyApi | null = null;

export async function POST(request: Request) {
  const data = await request.json();
  try {
    sdk = SpotifyApi.withAccessToken("2ed4fc268c514d97999c37c2c9773243", data); //Hardcoded
    return NextResponse.json({ message: 'Token accepted' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to initialize SDK' }, { status: 500 });
  }
}