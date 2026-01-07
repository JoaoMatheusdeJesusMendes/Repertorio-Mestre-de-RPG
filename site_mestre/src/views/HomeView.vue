<template>
  <HeroSection v-bind="master" />
  <FeedbackCarousel :feedbacks="feedbacks" />
  <ServicesSection :services="services" />
</template>

<script setup lang="ts">
import HeroSection from "../components/HeroSection.vue"
import FeedbackCarousel from "../components/FeedbackCarousel.vue"
import ServicesSection from "../components/ServicesSection.vue"

import {
  getMasterInfo,
  getFeedbacks,
  getServices
} from "../services/masterService"

const master = getMasterInfo()
const feedbacks = getFeedbacks()
const services = getServices()
</script>
