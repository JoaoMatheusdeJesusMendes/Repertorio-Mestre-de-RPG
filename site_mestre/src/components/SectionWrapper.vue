<template>
  <section class="section">
    <h2>{{ title }}</h2>
    <slot />
  </section>
</template>

<script setup lang="ts">
defineProps<{ title: string }>()
</script>

<style scoped>
.section {
  padding: 4rem 1.5rem;
  max-width: 900px;
  margin: auto;
}
h2 {
  margin-bottom: 1.5rem;
}
</style>
