import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';
import { isValidSignature, SIGNATURE_HEADER_NAME } from '@sanity/webhook';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const requestHeaders = new Headers(request.headers);
  const signature = requestHeaders.get(SIGNATURE_HEADER_NAME) as string;
  try {
    if (
      !isValidSignature(
        JSON.stringify(body),
        signature,
        process.env.SANITY_WEBHOOK_SECRET!
      )
    ) {
      return new NextResponse('Invalid request', { status: 401 });
    }

    const { paths } = body;

    paths.forEach((path: string) => revalidatePath(path));

    return new NextResponse('OK', { status: 200 });
  } catch (error) {
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
