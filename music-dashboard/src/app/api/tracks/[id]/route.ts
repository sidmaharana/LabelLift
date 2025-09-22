
import { NextRequest, NextResponse } from 'next/server';
import { tracks } from '@/lib/data';

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const track = tracks.find((t) => t.id === params.id);
  if (track) {
    return NextResponse.json(track);
  } else {
    return NextResponse.json({ message: 'Track not found' }, { status: 404 });
  }
}
