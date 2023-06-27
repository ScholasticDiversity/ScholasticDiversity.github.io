<template>
    <v-main>
        <div class="pa-6" style="max-width: 900px; margin: auto;">
            <router-view v-slot="{ Component }">
                <keep-alive>
                    <component :is="Component" />
                </keep-alive>
            </router-view>
        </div>
        <v-footer class="pb-10" style="max-width: 900px; margin: auto;">
            <a href="https://notbyai.fyi/" class="pr-4"><v-img inline src="@/assets/Not-By-AI/English/Written By Human/SVG/Written-By-Human-Not-By-AI-Badge-black.svg" height="40" alt="Written by Human, not by AI"></v-img></a>
            <span>2023 — <strong>Scholastic Diversity</strong></span>
        </v-footer>
    </v-main>
</template>

<script lang="ts" setup>
</script>
