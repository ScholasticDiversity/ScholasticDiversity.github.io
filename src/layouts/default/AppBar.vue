<template>
    <v-app-bar>
    <template v-slot:prepend>
        <v-app-bar-nav-icon @click="expandBar()"></v-app-bar-nav-icon>
    </template>
    <v-app-bar-title>Scholastic Diversity</v-app-bar-title>
    </v-app-bar>
</template>

<script lang="ts" setup>
    function expandBar() {
        console.log("Testing");
    }
</script>
