<script setup lang="ts">
import Badge from "./Badge.vue";
</script>

<template>
  <h1>Bookshelf</h1>
  <p class="intro">
    Welcome to my bookshelf! Here you'll find a selection of books I've either
    read, started, or currently reading. This is not an exhaustive list, so if a
    book is missing, it's either forgettable or didn't resonate with me. Books
    marked as "Read" are titles I enjoyed, but keep in mind that personal tastes
    can vary. Books marked as "Started" are titles I began reading but have yet
    to finish, though I plan to do so. I believe they are of good quality and
    worth the effort to complete, which is why they are included on this list.
    Finally, books marked as "Recommended" are not only great in my opinion, but
    I believe they have broad appeal and can bring value to a wide range of
    readers
  </p>
  <div class="legend">
    <p>Legend</p>
    <dl>
      <div>
        <dt>
          <Badge status="Recommended" :size="20" />
        </dt>
        <dd>Recommended</dd>
      </div>
      <div>
        <dt>
          <Badge status="Read" :size="20" />
        </dt>
        <dd>Read</dd>
      </div>
      <div>
        <dt>
          <Badge status="Started" :size="20" />
        </dt>
        <dd>Started</dd>
      </div>
    </dl>
  </div>
</template>

<style scoped>
dl > div {
  font-size: 1.2rem;
  display: flex;
}

dt {
  display: flex;
  align-items: center;
}

dd {
  margin-left: 0.6rem;
}

.intro {
  max-width: 70ch;
  line-height: 1.6;
  margin-top: 0.5rem;
}

.legend p {
  font-size: 1.2rem;
  font-weight: bold;
}

.legend {
  margin-top: 1rem;
}
</style>
