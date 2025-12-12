<script setup lang="ts">
import type { BookCategory, BookStatus } from "./booksSchema";
import "./styles.css";
import "sanitize.css";
import "sanitize.css/typography.css";

const { data: data } = await useAsyncData("all", () => {
  return queryCollection("books").all();
});

const sortStatusOrder: Record<BookStatus, number> = {
  Recommended: 0,
  Read: 1,
  Started: 2,
};

function sortByStatus(a: { status: BookStatus }, b: { status: BookStatus }) {
  return sortStatusOrder[a.status] - sortStatusOrder[b.status];
}

const sortCategoryOrder: Record<BookCategory, number> = {
  Technical: 0,
  "Non-Fiction": 1,
  Fiction: 2,
};

function sortByCategory(
  a: { category: BookCategory },
  b: { category: BookCategory }
) {
  return sortCategoryOrder[a.category] - sortCategoryOrder[b.category];
}
</script>

<template>
  <div v-if="data">
    <Intro />
    <BookList
      v-for="category in Object.groupBy(
        data.toSorted(sortByCategory),
        ({ category }) => category
      )"
      :name="category?.[0]?.category || 'Uncategorized'"
      :books="category?.toSorted(sortByStatus) || []"
    />
  </div>
</template>
