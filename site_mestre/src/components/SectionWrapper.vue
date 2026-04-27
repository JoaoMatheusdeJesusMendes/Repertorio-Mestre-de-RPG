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
h2 {
  margin-bottom: 1.5rem;
}
</style>
