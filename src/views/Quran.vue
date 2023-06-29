<template>
	<v-breadcrumbs>
		<v-breadcrumbs-item title="Scriptures" :to="{ name: 'scriptures' }"></v-breadcrumbs-item>
		<v-breadcrumbs-divider></v-breadcrumbs-divider>
		<v-breadcrumbs-item title="Qur'an" active :to="{ name: 'quran' }"></v-breadcrumbs-item>
		<!--<span v-for="s in categories.filter((t) => (t != 't' && t != 'r'))" :key="s">
			<v-breadcrumbs-divider></v-breadcrumbs-divider>
			<v-breadcrumbs-item :href="'/#/scriptures/j/' + categories.slice(0, categories.indexOf(s) + 1).join('/')">{{ s }}</v-breadcrumbs-item>
		</span>-->
	</v-breadcrumbs>
	<h1 class="text-h5 text-center">Qur'an</h1>
	<v-divider></v-divider>

	<!--<p class="text-overline mt-1"><strong>Jewish</strong></p>
	<p class="text-body-2 mb-2">Powered by <a href="https://sefaria.org">Sefaria</a></p>
	<v-divider class="mb-3"></v-divider>-->
	<v-container fluid :style="'margin: 0px; padding: 0px;'"> <!-- Not in Text, show index -->
		<v-row dense :style="'margin: 0px; padding: 0px;'">
			<GeneralIndex :root="index" hideroot="true" :depth="3" isroot="true" :categories="[]"></GeneralIndex>
		</v-row>
	</v-container>
	<p class="text-body-2 mt-6"><em>Powered by <a href="https://alquran.cloud">alquran.cloud</a></em></p>
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
	import GeneralIndex from '@/components/GeneralIndex.vue';
	import { ref, readonly, DeepReadonly, watch, computed, onBeforeMount } from 'vue';

	import Quran from "@/quranapi/quranapi";

	let index = ref({
		title: "Quran",
		contents: [
			{
				title: "English Versions",
				contents: [] as Array<any>,
			},
		] as Array<any>,
	});

	onBeforeMount(async () => {
		let data = await Quran.getEnglishVersions();
		for (let v of data.data) {
			index.value.contents[0].contents.push({
				title: v.englishName,
				identifier: v.identifier,
				to: { name: "qurantranslation", params: { id: v.identifier } },
			})
		}
		console.log("Quran data: ", data);
	});
</script>

<style lang="scss">
@use 'vuetify/_settings';
.footnote {
	display: hidden;
}
</style>