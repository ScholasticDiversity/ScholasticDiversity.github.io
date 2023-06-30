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
	<h1 class="text-h5 text-center">{{ version.englishName }}: {{ surahMeta.englishName }}</h1>
	<v-divider></v-divider>

	<v-container fluid :style="'margin: 0px; padding: 0px; max-width: 800px;'"> <!-- Not in Text, show index -->
		<p class="text-overline mt-1"><strong>Surah {{ surahMeta.number }}: {{ surahMeta.englishName }}</strong></p>
		<v-divider class="mb-3"></v-divider>
		<p class="text-body-1 text-justify scripturetext" v-html="sectionText"></p>
		<!--<v-btn variant="text" class="ma-1" v-for="s in surahs" :key="s" :href="'/#/scriptures/q/' + s" exact><strong>{{ s }}</strong></v-btn>-->
	</v-container>
	<p class="text-body-2 mt-6"><em>Powered by <a href="https://alquran.cloud">alquran.cloud</a></em></p>
</template>

<script lang="ts" setup>
	// TODO: Cache more stuff using the pinia store
	const props = defineProps({
		id: { type: String, required: true },
		surah: { type: String, required: true },
	});

	import { useRoute, useRouter, onBeforeRouteUpdate } from 'vue-router';
	const route = useRoute();
	const router = useRouter();

	import Vuetify from 'vuetify';
	import { VDataTable } from 'vuetify/labs/VDataTable';
	import GeneralIndex from '@/components/GeneralIndex.vue';
	import { ref, readonly, DeepReadonly, watch, computed, onBeforeMount } from 'vue';

	import Quran from "@/quranapi/quranapi";
	let surahMeta = ref({} as any);
	let version = ref({} as any);
	let surahInfo = ref({} as any);
	let metadata = ref({} as any);

	let sectionText = computed(() => {
		if (!surahInfo.value.data || !surahInfo.value.data.ayahs) {
			console.log("Test");
			return "";
		}
		let s = "";
		for (let a of surahInfo.value.data.ayahs) {
			s += " " + a.text;
		}
		return s;
	})

	// Watch if surah number changes, and if so, fetch the new surah data
	watch(() => route.params.surah, async (newSurah) => {
		if (!newSurah) return;
		surahInfo.value = {};
		surahMeta.value = await Quran.getSurahInfo(newSurah as string, metadata.value);
		surahInfo.value = await Quran.getSurah(newSurah as string, route.params.id as string);
	});

	onBeforeMount(async () => {
		// Get metadata of number of surahs and their names
		metadata.value = await Quran.getMeta();
		surahMeta.value = await Quran.getSurahInfo(props.surah, metadata.value);

		// Get name of current version
		version.value = await Quran.getVersionInfoFromIdentifier(props.id as string);

		surahInfo.value = await Quran.getSurah(props.surah, props.id as string);
		console.log(surahInfo.value.data);
	});
</script>

<style lang="scss">
@use 'vuetify/_settings';
.footnote {
	display: hidden;
}
</style>