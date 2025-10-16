import { z } from "zod";

export const leadSchema = z.object({
  email: z.string().email(),
  name: z.string().optional(),
  orgName: z.string().optional(),
  city: z.string().optional(),
  sector: z.string().optional(),
  message: z.string().optional(),
});
