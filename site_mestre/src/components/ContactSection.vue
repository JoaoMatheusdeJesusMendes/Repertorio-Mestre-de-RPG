<template>
  <SectionWrapper title="Contato">
    <ul class="contacts">
      <li
        v-for="contact in contacts"
        :key="contact.label"
        class="contact-item"
      >
        <strong>{{ contact.label }}:</strong>
        <a
          :href="contact.link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ contact.value }}
        </a>
      </li>
    </ul>
  </SectionWrapper>
</template>

<script setup lang="ts">
import SectionWrapper from "./SectionWrapper.vue"
import type { Contact } from "../services/masterService"

defineProps<{ contacts: Contact[] }>()
</script>

<style scoped>
.contacts {
  list-style: none;
  display: grid;
  gap: 1rem;
}

.contact-item a {
  color: var(--accent);
  text-decoration: none;
}

.contact-item a:hover {
  text-decoration: underline;
}
</style>
