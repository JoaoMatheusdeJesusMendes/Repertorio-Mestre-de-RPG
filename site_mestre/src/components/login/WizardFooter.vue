<script setup lang="ts">
defineProps<{
  isLast: boolean
  disabled?: boolean
}>()

const emit = defineEmits(['next'])
</script>

<template>
  <div class="wizard-footer">
    <button
      class="btn-primary"
      :disabled="disabled"
      @click="emit('next')"
    >
      {{ isLast ? 'Finalizar' : 'Continuar' }}
    </button>
  </div>
</template>
