<template>
  <section class="hero">
    <h1>{{ name }}</h1>
    <h3>{{ tagline }}</h3>
    <p>{{ description }}</p>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  name: string
  tagline: string
  description: string
}>()
</script>

<style scoped>
.hero {
  text-align: center;
  padding: 5rem 2rem;
}
</style>
