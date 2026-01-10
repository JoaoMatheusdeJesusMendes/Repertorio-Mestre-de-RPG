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
      <button class="btn-outline">Entrar</button>
      <button class="btn-primary">Cadastrar-se</button>
    </div>
  </nav>
</template>
