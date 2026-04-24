<script setup lang="ts">
defineProps<{ role: string | null }>()
const emit = defineEmits(['update:role'])
</script>

<template>
  <div class="step reveal-card">
    <h2>Você é...</h2>

    <div class="choice-grid">
      <button
        :class="{ active: role === 'master' }"
        @click="emit('update:role', 'master')"
      >
        Mestre 🎲
      </button>

      <button
        :class="{ active: role === 'player' }"
        @click="emit('update:role', 'player')"
      >
        Jogador 🧙‍♂️
      </button>
    </div>
  </div>
</template>
