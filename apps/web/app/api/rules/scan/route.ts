import { prisma } from '@/lib/db';
import { NextResponse } from 'next/server';
import { z } from 'zod';

const payloadSchema = z.object({
  city: z.string().min(2),
  sector: z.string().min(2),
  locale: z.string().optional(),
});

export async function POST(request: Request) {
  const json = await request.json();
  const payload = payloadSchema.parse(json);

  const rules = await prisma.rule.findMany({
    where: {
      city: payload.city,
      sector: payload.sector,
    },
    orderBy: { updatedAt: 'desc' },
  });

  return NextResponse.json({ rules });
}
