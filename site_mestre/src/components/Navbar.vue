<script setup lang="ts">
import { getBrandInfo } from '../services/brandService'

const { name, logo } = getBrandInfo()

const scrollToSection = (SectionId: string) => {
  const section = document.getElementById(SectionId)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth'})
  }
}
</script>

<template>
  <nav class="navbar">
    <div class="logo-area">
      <img :src="logo" alt="Logo Mestre Biel" class="logo" />
      <span class="brand-name">{{ name }}</span>
    </div>

    <div class="actions">
      <button class="btn-nav" @click="scrollToSection('about')">Quem eu sou?</button>
      <button class="btn-nav" @click="scrollToSection('feedback')">Sussuros da taverna</button>
      <button class="btn-nav" @click="scrollToSection('services')">Onde posso leva-lo?</button>
      <button class="btn-nav" @click="scrollToSection('contact')">Fale comigo!</button>
    </div>
  </nav>
</template>
