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
    <h2>Perfil de Mestre</h2>

    <textarea
      placeholder="Que tipo de campanhas você mestra?"
      @input="updateProfile('style', $event.target.value)"
    />

    <textarea
      placeholder="Quantos anos de experiência?"
      @input="updateProfile('experience', $event.target.value)"
    />
  </div>
</template>
