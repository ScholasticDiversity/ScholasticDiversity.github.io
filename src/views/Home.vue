<template>
  <p class="text-body-1 mb-3">Welcome to Scholastic Diversity. This website offers a wide variety of overview information and resources for various topics. Below is a list of topics currently available.</p>
  <v-container fluid>
    <v-row>
      <v-col v-for="card in cards" :cols="card.cols" :key="card.linkName">
        <v-hover v-slot="{ isHovering, props }">
          <v-card :to="{ name: card.linkName }" v-bind="props" :elevation="isHovering ? 5 : 2" hover density="compact">
            <v-card-text class="text-center"><strong>{{ card.title }}</strong></v-card-text>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
  <p class="text-body-1 mb-3">Note that the website is still a Work-in-progress.</p>

  <br>
  <p class="text-body-1 mb-3">Here are links to other resource websites:</p>
  <ul>
    <li><a href="https://standardebooks.org/">Standard Ebooks</a></li>
    <li><a href="https://www.khanacademy.org/">Khan Academy</a></li>
    <li><a href="https://www.edx.org/school/harvardx">HarvardX on EdX</a></li>
    <li><a href="https://www.edx.org/school/oxfordx">OxfordX on EdX</a></li>
    <li><a href="https://www.edx.org/school/notredamex">NotreDameX on EdX</a></li>
    <li><a href="https://www.edx.org/school/israelx">IsraelX on EdX</a></li>
    
    <li><a href="https://www.sefaria.org/">Sefaria</a></li>
    <li><a href="https://www.thetorah.com/">The Torah</a></li>

    <li><a href="https://www.qchristian.org/">Q Christian Fellowship</a></li>
    <li><a href="https://www.queertheology.com/">Queer Theology</a></li>
  </ul>
</template>

<script lang="ts" setup>
  //import router from '@/router';
  import { useRoute, useRouter } from 'vue-router';
  const route = useRoute();
  const router = useRouter();
  import { ref, readonly, DeepReadonly } from 'vue';
  let cards = ref([
    { title: "Religious Literacy Overview", cols: 4, linkName: "religiousliteracy" },
    { title: "Theology Overview", cols: 4, linkName: "theology" },
    { title: "Contextual Theology", cols: 4, linkName: "contextualtheologies"},
    { title: "Judaism", cols: 4, linkName: "judaism"},
    { title: "Christianity", cols: 4, linkName: "christianity"},
    { title: "Scriptures", cols: 4, linkName: "scriptures"},
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

