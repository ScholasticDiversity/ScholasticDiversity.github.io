<template>
	<h1 class="text-h4 text-center">Tempus Calendar</h1>
	<v-divider class="mb-6"></v-divider>
	<v-container fluid>
	</v-container>
</template>
  
<script lang="ts" setup>
	import router from '@/router';
	import { ref, readonly, DeepReadonly } from 'vue';
  
	function goto(name: string) {
		router.push({ name: name });
	}
</script>
  
<style lang="scss">
	@use 'vuetify/_settings';
</style>

  