import { NextResponse } from 'next/server';
import { events, userProfile } from '@/data/mock';
import { recommendEvents } from '@/utils/knn';

export async function GET() {
  try {
    // In a real app, we would get the user profile from a session/database.
    // Here we use the mock userProfile.
    const recommendations = recommendEvents(userProfile.interactionVector, events, 2);
    
    return NextResponse.json({ success: true, data: recommendations });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to generate recommendations' }, { status: 500 });
  }
}
