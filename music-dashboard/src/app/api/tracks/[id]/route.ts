
import { NextRequest, NextResponse } from 'next/server';
import { tracks } from '@/lib/data';

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const resolvedParams = await context.params;
  const track = tracks.find((t) => t.id === resolvedParams.id);
  if (track) {
    return NextResponse.json(track);
  } else {
    return NextResponse.json({ message: 'Track not found' }, { status: 404 });
  }
}
