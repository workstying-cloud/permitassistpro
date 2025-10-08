import Stripe from 'stripe';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const payload = await request.text();
  const signature = request.headers.get('stripe-signature') ?? '';
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? '', {
    apiVersion: '2023-10-16',
  });

  try {
    stripe.webhooks.constructEvent(payload, signature, process.env.STRIPE_WEBHOOK_SECRET ?? '');
  } catch (error) {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  return NextResponse.json({ received: true });
}
