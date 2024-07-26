import { NextResponse } from 'next/server';
import { SpotifyApi } from '@spotify/web-api-ts-sdk';

let sdk: SpotifyApi | null = null;

export async function GET() {
  if (!sdk) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  }

  try {
    const userData = await sdk.currentUser.profile();
    return NextResponse.json(userData);
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching user data' }, { status: 500 });
  }
}