<script setup lang="ts">
defineProps<{ form: any }>()
const emit = defineEmits(['update:form'])

const update = (key: string, value: any) => {
  emit('update:form', { ...$props.form, [key]: value })
}
</script>

<template>
  <div class="step reveal-card">
    <h2>Crie sua conta</h2>

    <input
      type="email"
      placeholder="Email"
      :value="form.email"
      @input="update('email', $event.target.value)"
    />

    <input
      type="password"
      placeholder="Senha"
      :value="form.password"
      @input="update('password', $event.target.value)"
    />

    <label class="checkbox">
      <input
        type="checkbox"
        :checked="form.acceptTerms"
        @change="update('acceptTerms', $event.target.checked)"
      />
      Concordo com os termos de uso e política de privacidade
    </label>
  </div>
</template>
