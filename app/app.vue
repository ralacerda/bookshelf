<script setup lang="ts">
import "./styles.css";

const { data } = await useAsyncData("all", () => {
  return queryCollection("books").all();
});
</script>

<template>
  <div>
    <BookList name="All Books" v-if="data" :books="data" />
  </div>
</template>
