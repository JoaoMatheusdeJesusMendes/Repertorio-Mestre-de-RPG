<template>
  <section class="hero" v-reveal>
    
    <div class="hero-content">
      <img
        :src="heroImage"
        alt="Imagem promocional do mestre"
        class="hero-image"
      />

      <div class="hero-text">
        <h1>Mestre Biel</h1>
        <h3>Narrativas imersivas, decisões reais.</h3>
        <p>Mestre de RPG focado em experiências narrativas profundas.</p>
      </div>
    </div>
  </section>
</template>


<script setup lang="ts">
defineProps<{
  heroImage: string
}>()
</script>


<style scoped>
.hero-image {
  width: 100%;
  max-width: 320px;
  height: auto;

  border-radius: 1.25rem;

  box-shadow:
    0 15px 30px rgba(0, 0, 0, 0.45);
}

</style>
