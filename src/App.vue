<template>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
</router-view>

</template>

<script lang="ts" setup>
  import { useTheme } from 'vuetify/lib/framework.mjs';

  const theme = useTheme();
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
      const newColorScheme = event.matches ? "dark" : "light";
      theme.global.name.value = newColorScheme;
  });
</script>
