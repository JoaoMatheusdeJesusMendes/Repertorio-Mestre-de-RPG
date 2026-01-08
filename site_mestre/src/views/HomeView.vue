<script setup lang="ts">
import HeroSection from "../components/HeroSection.vue"
import FeedbackCarousel from "../components/FeedbackCarousel.vue"
import ServicesSection from "../components/ServicesSection.vue"
import ContactSection from "../components/ContactSection.vue"

import {
  getMasterInfo,
  getFeedbacks,
  getServices,
  getContacts
} from "../services/masterService"

const master = getMasterInfo()
const feedbacks = getFeedbacks()
const services = getServices()
const contacts = getContacts()
</script>

<template>
  <HeroSection v-bind="master" />
  <FeedbackCarousel :feedbacks="feedbacks" />
  <ServicesSection :services="services" />
  <ContactSection :contacts="contacts" />
</template>
