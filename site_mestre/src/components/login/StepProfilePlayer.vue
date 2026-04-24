<script setup lang="ts">
defineProps<{ form: any }>()
const emit = defineEmits(['update:form'])

const updateProfile = (key: string, value: any) => {
  emit('update:form', {
    ...$props.form,
    profile: { ...$props.form.profile, [key]: value }
  })
}
</script>

<template>
  <div class="step reveal-card">
    <h2>Perfil de Jogador</h2>

    <textarea
      placeholder="Que tipo de personagem você prefere jogar?"
      @input="updateProfile('playstyle', $event.target.value)"
    />

    <textarea
      placeholder="O que você mais valoriza numa mesa?"
      @input="updateProfile('values', $event.target.value)"
    />
  </div>
</template>
