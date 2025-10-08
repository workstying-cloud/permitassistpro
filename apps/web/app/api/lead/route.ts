import { prisma } from '@/lib/db';
import { sendMail } from '@/lib/mailer';
import { NextResponse } from 'next/server';
import { z } from 'zod';

export const leadSchema = z.object({
  email: z.string().email(),
  name: z.string().min(1).optional(),
  orgName: z.string().min(1).optional(),
  city: z.string().min(1).optional(),
  sector: z.string().min(1).optional(),
  message: z.string().max(1500).optional(),
});

type LeadSchema = z.infer<typeof leadSchema>;

const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string) {
  const now = Date.now();
  const entry = rateLimitStore.get(ip);
  if (!entry || entry.resetAt < now) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + 1000 * 60 * 60 });
    return true;
  }

  if (entry.count >= 5) {
    return false;
  }

  entry.count += 1;
  rateLimitStore.set(ip, entry);
  return true;
}

async function handleLead(payload: LeadSchema) {
  const lead = await prisma.lead.create({ data: payload });

  await sendMail({
    to: 'support@permitassist.pro',
    subject: `New demo request: ${payload.email}`,
    html: `<p>${payload.name ?? 'Unknown contact'} requested a demo.</p>`,
  });

  await sendMail({
    to: payload.email,
    subject: 'PermitAssist Pro — Demo request received',
    html: `<p>Thanks for your interest! Your NDA-backed demo is scheduled within 1 business day.</p>`,
  });

  return lead;
}

export async function POST(request: Request) {
  const ip = request.headers.get('x-forwarded-for') ?? 'unknown';
  if (!checkRateLimit(ip)) {
    return NextResponse.json({ error: 'Rate limit exceeded' }, { status: 429 });
  }

  const data = await request.json();
  const payload = leadSchema.parse(data);

  const lead = await handleLead(payload);

  return NextResponse.json({ lead });
}

export const internal = { checkRateLimit, handleLead };
