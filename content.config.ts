import { defineCollection, defineContentConfig } from "@nuxt/content";
import { bookSchema } from "./app/booksSchema";

export default defineContentConfig({
  collections: {
    books: defineCollection({
      type: "data",
      source: "books/**.yml",
      schema: bookSchema,
    }),
  },
});
