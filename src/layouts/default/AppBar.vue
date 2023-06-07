<template>
    <v-app-bar>
    <template v-slot:prepend>
        <v-app-bar-nav-icon @click="expandBar()"></v-app-bar-nav-icon>
        <v-img
        src="logo.jpg"
        width="50px"
        class="ml-2"
        ></v-img>
    </template>
    <v-app-bar-title style="margin-inline-start: 8px;">Scholastic Diversity</v-app-bar-title>
    </v-app-bar>
</template>

<script lang="ts" setup>
    function expandBar() {
        console.log("Testing");
    }
</script>
