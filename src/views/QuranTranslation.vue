<template>
	<v-breadcrumbs>
		<v-breadcrumbs-item title="Scriptures" :to="{ name: 'scriptures' }"></v-breadcrumbs-item>
		<v-breadcrumbs-divider></v-breadcrumbs-divider>
		<v-breadcrumbs-item title="Qur'an" :to="{ name: 'quran' }"></v-breadcrumbs-item>
		<v-breadcrumbs-divider></v-breadcrumbs-divider>
		<v-breadcrumbs-item :title="version.englishName" active :to="{ name: 'qurantranslation', params: { id: $route.params.id } }"></v-breadcrumbs-item>
		<!--<span v-for="s in categories.filter((t) => (t != 't' && t != 'r'))" :key="s">
			<v-breadcrumbs-divider></v-breadcrumbs-divider>
			<v-breadcrumbs-item :href="'/#/scriptures/j/' + categories.slice(0, categories.indexOf(s) + 1).join('/')">{{ s }}</v-breadcrumbs-item>
		</span>-->
	</v-breadcrumbs>
	<h1 class="text-h5 text-center">Qur'an: {{ version.englishName }}</h1>
	<v-divider></v-divider>

	<v-container fluid :style="'margin: 0px; padding: 0px;'"> <!-- Not in Text, show index -->
		<!--<p class="text-overline mt-1"><strong>Surah</strong></p>
		<v-divider class="mb-3"></v-divider>
		<v-btn variant="text" class="ma-1" v-for="s in surahs" :key="s" :href="'/#/scriptures/q/' + s" exact><strong>{{ s }}</strong></v-btn>-->
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
	let surahs = ref(0);
	let version = ref({} as any);
	let metadata = ref({} as any);

	let index = ref({
		title: route.params.id,
		contents: [
			{
				title: "Surah",
				contents: [] as Array<any>,
			},
		] as Array<any>,
	});

	watch(() => route.params.id, async (newId) => {
		if (!newId) return;
		// Get metadata of number of surahs and their names
		surahs.value = metadata.value.data.surahs.count;
		index.value.contents[0].contents = [];
		for (let s of metadata.value.data.surahs.references) {
			index.value.contents[0].contents.push({
				title: s.number + ". " + s.englishName,
				desc: s.englishNameTranslation,
				to: { name: "quransurah", params: { id: route.params.id, surah: s.number } },
			});
		}
		console.log(metadata.value.data);

		// Get name of current version
		version.value = await Quran.getVersionInfoFromIdentifier(route.params.id as string);
	})

	onBeforeMount(async () => {
		// Get metadata of number of surahs and their names
		metadata.value = await Quran.getMeta();
		surahs.value = metadata.value.data.surahs.count;
		for (let s of metadata.value.data.surahs.references) {
			index.value.contents[0].contents.push({
				title: s.number + ". " + s.englishName,
				desc: s.englishNameTranslation,
				to: { name: "quransurah", params: { id: route.params.id, surah: s.number } },
			});
		}
		console.log(metadata.value.data);

		// Get name of current version
		version.value = await Quran.getVersionInfoFromIdentifier(route.params.id as string);
	});
</script>

<style lang="scss">
@use 'vuetify/_settings';
.footnote {
	display: hidden;
}
</style>