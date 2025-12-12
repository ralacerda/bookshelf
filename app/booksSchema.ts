import { z } from "zod";

const BookCategory = z.enum(["Technical", "Non-Fiction", "Fiction"]);
const BookStatus = z.enum(["Recommended", "Read", "Started"]);

export const bookSchema = z.object({
  category: BookCategory,
  status: BookStatus,
  title: z.string(),
  author: z.string(),
  year: z.number(),
  cover_image: z.string().optional(),
});

export type Book = z.infer<typeof bookSchema>;
export type BookCategory = z.infer<typeof BookCategory>;
export type BookStatus = z.infer<typeof BookStatus>;
