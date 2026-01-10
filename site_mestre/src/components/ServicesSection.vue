<template>
  <SectionWrapper title="Serviços" v-reveal>
    <div class="services">
      <div v-for="service in services" :key="service.title" class="service">
        <h4>{{ service.title }}</h4>
        <p>{{ service.description }}</p>
      </div>
    </div>
  </SectionWrapper>
</template>

<script setup lang="ts">
import SectionWrapper from "./SectionWrapper.vue"
import type { Service } from "../services/masterService"

defineProps<{ services: Service[] }>()
</script>

<style scoped>
.services {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}
</style>
