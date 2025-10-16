import { z } from "zod";

export const leadSchema = z.object({
  email: z.string().email(),
  name: z.string().min(1).optional(),
  orgName: z.string().min(1).optional(),
  city: z.string().min(1).optional(),
  sector: z.string().min(1).optional(),
  message: z.string().max(1500).optional(),
});

export type LeadSchema = z.infer<typeof leadSchema>;
