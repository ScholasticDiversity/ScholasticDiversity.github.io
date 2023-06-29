<template>
	<v-breadcrumbs>
		<v-breadcrumbs-item title="Scriptures" :to="{ name: 'scriptures' }"></v-breadcrumbs-item>
		<!--<v-breadcrumbs-divider></v-breadcrumbs-divider>
		<v-breadcrumbs-item title="Tanakh" :active="!isText" :to="{ name: 'tanakhscriptures' }"></v-breadcrumbs-item>-->
		<!--<span v-for="s in categories.filter((t) => (t != 't' && t != 'r'))" :key="s">
			<v-breadcrumbs-divider></v-breadcrumbs-divider>
			<v-breadcrumbs-item :href="'/#/scriptures/j/' + categories.slice(0, categories.indexOf(s) + 1).join('/')">{{ s }}</v-breadcrumbs-item>
		</span>-->
	</v-breadcrumbs>
	<h1 class="text-h5 text-center">Scriptures</h1>
	<v-divider></v-divider>

	<p class="text-overline mt-1"><strong>Jewish</strong></p>
	<p class="text-body-2 mb-2">Powered by <a href="https://sefaria.org">Sefaria</a></p>
	<v-divider class="mb-3"></v-divider>
	<v-container fluid :style="'margin: 0px; padding: 0px;'"> <!-- Not in Text, show index -->
		<v-row dense :style="'margin: 0px; padding: 0px;'">
			<SefariaIndex :root="jewishScriptures" hideroot="true" :depth="2" isroot="true" :categories="[]"></SefariaIndex>
		</v-row>
	</v-container>
</template>

<script lang="ts" setup>
	/*const props = defineProps({
		categories: { type: Array<string>, required: true },
	});*/

	import { useRoute, useRouter, onBeforeRouteUpdate  } from 'vue-router';
	const route = useRoute();
	const router = useRouter();

	import Vuetify from 'vuetify';
	import { VDataTable } from 'vuetify/labs/VDataTable';
	import SefariaIndex from '@/components/SefariaIndex.vue';
	import { ref, readonly, DeepReadonly, watch, computed, onBeforeMount } from 'vue';

	let jewishScriptures = ref({ contents: Sefaria.toc });
</script>

<style lang="scss">
@use 'vuetify/_settings';
.footnote {
	display: hidden;
}
</style>