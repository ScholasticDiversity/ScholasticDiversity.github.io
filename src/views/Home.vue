<template>
  <p class="text-body-1 mb-3">Welcome to Scholastic Diversity. This website offers a wide variety of overview information and resources for various topics. Below is a list of topics currently available.</p>
  <v-container fluid>
    <v-row>
      <v-col v-for="card in cards" :cols="card.cols">
        <v-hover v-slot="{ isHovering, props }">
          <v-card @click="goto(card.linkName)" v-bind="props" :elevation="isHovering ? 5 : 2">
            <v-card-title v-text="card.title" class="text-center"></v-card-title>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
  <p class="text-body-1 mb-3">Note that the website is still a Work-in-progress.</p>
</template>

<script lang="ts" setup>
  import router from '@/router';
  import { ref, readonly, DeepReadonly } from 'vue';
  let cards = ref([
    { title: "Religious Literacy Overview", cols: 4, linkName: "religiousliteracy" },
    { title: "Theology Overview", cols: 4, linkName: "theology" },
    { title: "Contextual Theology", cols: 4, linkName: "contextualtheologies"},
  ])

  function goto(name: string) {
    router.push({ name: name });
  }
</script>

<style lang="scss">
@use 'vuetify/_settings';
v-card:hover {
  cursor:pointer;
}
</style>

