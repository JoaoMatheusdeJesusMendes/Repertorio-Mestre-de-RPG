<script setup lang="ts">
import HomeView from "./views/HomeView.vue"
import Navbar from './components/Navbar.vue'
</script>

<template>
  <Navbar />
  <router-view />
</template>


<style>
#app {
  min-height: 100vh;
}
</style>
