<template>
	<!--<h1 class="text-h4 text-center">Tempus Calendar</h1>
	<v-divider class="mb-6"></v-divider>
	<v-container fluid>
	</v-container>-->
	<v-img src="https://img.itch.zone/aW1nLzEwNDc5MDA5LnBuZw==/original/R1Jcbd.png"></v-img>
	<br />
	<v-card density="compact" href="https://clseibold.itch.io/tempus-calendar" hover>
		<v-card-text class="text-center"><strong>$7 on Itch.io</strong></v-card-text>
	</v-card>
	<v-divider class="mb-6"></v-divider>
	<p class="text-body-1 mb-3"><strong>Tempus Calendar</strong> is an efficient calendar program for Windows. Linux and macOS support are coming later. It supports 3 main calendars (Gregorian, Julian, and Jewish), with more (e.g. Hijri) coming soon. Holidays of Christianity, Islam, and Judaism are supported. Additionally, the weekly Jewish parshiyot is supported, as well as the Catholic liturgical year.</p>
	<p class="text-body-1 mb-3">Tempus Calendar will also calculate sunrise, sunset, dawn, and dusk times based on a given location. This is all done locally - no internet connection is made. Simply put in your longitude and latitude, and the program will do all the calculations itself.</p>
	<p class="text-body-1 mb-3">Finally, it will calculate Jewish Zmanim, Islamic Salah, and Christian prayer times.</p>
	<p class="text-body-1 mb-3">The project is still in heavy development, and therefore in a beta state, but it is functional enough to be useful.</p>
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

  