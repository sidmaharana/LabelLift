
import { NextRequest, NextResponse } from 'next/server';
import { tracks, Track } from '@/lib/data';

export async function GET() {
  return NextResponse.json(tracks);
}

export async function POST(req: NextRequest) {
  const { title, artist, releaseDate, genre } = await req.json();
  const newTrack: Track = {
    id: (tracks.length + 1).toString(),
    title,
    artist,
    releaseDate,
    genre,
    status: 'Uploaded',
  };
  tracks.push(newTrack);
  return NextResponse.json(newTrack, { status: 201 });
}
