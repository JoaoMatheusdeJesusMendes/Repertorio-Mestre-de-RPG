<template>
  <SectionWrapper title="O que os jogadores dizem">
    <div class="carousel">
      <button @click="prev">‹</button>
      <div class="card">
        <p>"{{ feedbacks[current].comment }}"</p>
        <strong>— {{ feedbacks[current].name }}</strong>
      </div>
      <button @click="next">›</button>
    </div>
  </SectionWrapper>
</template>

<script setup lang="ts">
import { ref } from "vue"
import SectionWrapper from "./SectionWrapper.vue"
import type { Feedback } from "../services/masterService"

const props = defineProps<{ feedbacks: Feedback[] }>()
const current = ref(0)

const next = () =>
  (current.value = (current.value + 1) % props.feedbacks.length)

const prev = () =>
  (current.value =
    (current.value - 1 + props.feedbacks.length) %
    props.feedbacks.length)
</script>

<style scoped>
.carousel {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}
.card {
  max-width: 400px;
  text-align: center;
}
</style>
