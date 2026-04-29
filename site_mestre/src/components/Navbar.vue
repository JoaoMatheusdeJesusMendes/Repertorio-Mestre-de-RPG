<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue"
import { getBrandInfo } from '../services/brandService'

const isOpen = ref(true)
const root = ref<HTMLElement | null>(null)
const { name, logo } = getBrandInfo()

const scrollToSection = (SectionId: string) => {
  const section = document.getElementById(SectionId)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth'})
  }
}

const handleOutsideClick = (e: MouseEvent) => {
  const target = e.target as Node

  if (root.value && !root.value.contains(target)) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener("click", handleOutsideClick)
})

onBeforeUnmount(() => {
  document.removeEventListener("click", handleOutsideClick)
})

</script>

<template>
  <nav class="navbar" ref="root">
    <div class="logo-area">
      <img :src="logo" alt="Logo Mestre Biel" class="logo" />
      <span class="brand-name">{{ name }}</span>
    </div>

    <button class="menu-toggle" @click="isOpen = !isOpen">
        ☰
    </button>

    <div class="actions" v-show="isOpen">
      <button class="btn-nav" @click="scrollToSection('about')">Quem eu sou?</button>
      <button class="btn-nav" @click="scrollToSection('feedback')">Sussuros da taverna</button>
      <button class="btn-nav" @click="scrollToSection('services')">Onde posso leva-lo?</button>
      <button class="btn-nav" @click="scrollToSection('contact')">Fale comigo!</button>
    </div>
  </nav>
</template>
