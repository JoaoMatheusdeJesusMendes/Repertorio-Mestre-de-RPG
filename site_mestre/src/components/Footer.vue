<script setup lang="ts">
import type { Contact } from "../services/masterService"

defineProps<{ contacts: Contact[] }>()
</script>

<template>
    <footer class = "footer">
        <div class = "footerContainer">
            <div class="footerColumn">
                <h3>Serviços</h3>
                <ul>
                    <li>Campanhas personalizadas</li>
                    <li>Sessões únicas</li>
                    <li>Consultoria para mestres iniciantes</li>
                </ul>
            </div>
            <div class="footerColumn">
                <h3>Contato</h3>
                    <ul id="contact">
                        <li
                            v-for="contact in contacts"
                            :key="contact.label"
                        >
                            <strong>{{ contact.label }}: </strong>
                            <a
                            :href="contact.link"
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                            {{ contact.value }}
                            </a>
                        </li>
                    </ul>
            </div>
        </div>
    <div class="footerBottom">
        <p>© 2026 Mestre Biel. Todos os direitos reservados.</p>
    </div>
    </footer>
</template>

<style scoped>

</style>