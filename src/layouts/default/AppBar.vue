<template>
    <v-app-bar>
    <template v-slot:prepend>
        <v-app-bar-nav-icon @click="expandBar()"></v-app-bar-nav-icon>
        <v-img
        src="@/assets/logo.png"
        width="50px"
        class="ml-2"
        ></v-img>
    </template>
    <v-app-bar-title style="margin-inline-start: 8px;">Scholastic Diversity</v-app-bar-title>
    <v-btn @click="toggleTheme">toggle theme</v-btn>
    </v-app-bar>
</template>

<script lang="ts" setup>
import { useTheme } from 'vuetify/lib/framework.mjs';

    const theme = useTheme();

    function expandBar() {
        console.log("Testing");
    }
    function toggleTheme() {
        theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';
    }
</script>
