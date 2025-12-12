<script setup lang="ts">
import BookCard from "./BookCard.vue";
import { type Book, type BookStatus } from "~/booksSchema";

const props = defineProps<{
  name: string;
  books: Book[];
}>();
</script>

<template>
  <div class="book-category">
    <h2>{{ props.name }}</h2>
    <ul class="book-grid">
      <BookCard v-for="book in books" :key="book.title" :book="book" />
    </ul>
  </div>
</template>

<style scoped>
.book-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 2rem;
  margin-top: 1rem;
  padding: 0;
}

.book-category {
  margin-top: 2rem;
}
</style>
