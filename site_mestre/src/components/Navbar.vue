<script setup lang="ts">
import { getBrandInfo } from '../services/brandService'

const { name, logo } = getBrandInfo()
</script>

<template>
  <nav class="navbar">
    <div class="logo-area">
      <img :src="logo" alt="Logo Mestre Biel" class="logo" />
      <span class="brand-name">{{ name }}</span>
    </div>

    <div class="actions">
      <button class="btn-nav">Quem eu sou?</button>
      <button class="btn-nav">Onde posso leva-lo?</button>
      <button class="btn-nav">Fale comigo!</button>
    </div>
  </nav>
</template>
