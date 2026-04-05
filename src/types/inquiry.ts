import { z } from "zod";

export const inquirySchema = z.object({
  name: z.string().min(2, "Kérjük adja meg a nevét").max(100),
  email: z.string().email("Érvénytelen email cím"),
  phone: z.string().min(7, "Kérjük adja meg a telefonszámát").max(30),
  company: z.string().max(100).optional(),
  type: z.enum(["b2b", "b2c"]),
  message: z.string().min(10, "Kérjük írjon egy rövid üzenetet").max(2000),
});

export type InquiryData = z.infer<typeof inquirySchema>;
