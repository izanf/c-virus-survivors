import { NextResponse } from 'next/server';

import survivorsList from '../mocks/survivors-list.json'

export async function GET() {
  return NextResponse.json(survivorsList);
}
