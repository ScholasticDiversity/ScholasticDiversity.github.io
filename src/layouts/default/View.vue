<template>
    <v-main>
        <div class="pa-6" style="max-width: 900px; margin: auto;">
            <router-view v-slot="{ Component }">
                <keep-alive>
                    <component :is="Component" />
                </keep-alive>
            </router-view>
        </div>
        <v-footer class="mt-14">
            <v-container style="max-width: 900px; margin: auto; vertical-align: middle;">
                <a href="https://notbyai.fyi/" class="pr-4"><v-img inline src="@/assets/Written-By-Human-Not-By-AI-Badge-black.svg" height="40" alt="Written by Human, not by AI" /></a>
                <span>2023 — <strong>Scholastic Diversity</strong></span>
            </v-container>
        </v-footer>
    </v-main>
</template>

<script lang="ts" setup>
</script>
