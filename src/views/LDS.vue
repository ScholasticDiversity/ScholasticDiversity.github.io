<template>
	<v-breadcrumbs>
		<v-breadcrumbs-item title="Scriptures" :to="{ name: 'scriptures' }"></v-breadcrumbs-item>
		<div v-for="b in book" :key="b">
			<v-breadcrumbs-divider></v-breadcrumbs-divider>
			<v-breadcrumbs-item :title="b.split('.')[0]" active :to="{ name: 'lds', params: { book: book.slice(0, book.indexOf(b) + 1) } }"></v-breadcrumbs-item>
		</div>
		<!--<span v-for="s in categories.filter((t) => (t != 't' && t != 'r'))" :key="s">
			<v-breadcrumbs-divider></v-breadcrumbs-divider>
			<v-breadcrumbs-item :href="'/#/scriptures/j/' + categories.slice(0, categories.indexOf(s) + 1).join('/')">{{ s }}</v-breadcrumbs-item>
		</span>-->
	</v-breadcrumbs>
	<h1 class="text-h5 text-center">{{ index.title }}</h1>
	<v-divider></v-divider>

	<!--<p class="text-overline mt-1"><strong>Jewish</strong></p>
	<p class="text-body-2 mb-2">Powered by <a href="https://sefaria.org">Sefaria</a></p>
	<v-divider class="mb-3"></v-divider>-->
	<v-container fluid :style="'margin: 0px; padding: 0px;'"> <!-- Not in Text, show index -->
		<v-row dense :style="'margin: 0px; padding: 0px;'" v-if="!hasChapters">
			<GeneralIndex :root="index" hideroot="true" :depth="3" isroot="true" :categories="[]"></GeneralIndex>
		</v-row>
		<div v-else-if="!inChapter">
			<p class="text-overline mt-1"><strong>Chapters</strong></p>
			<v-divider class="mb-3"></v-divider>
			<v-btn variant="text" class="ma-1" v-for="chapter in chapters" :key="chapter" :href="'/#/scriptures/l/' + book.join('/') + '.' + chapter" exact><strong>{{ chapter }}</strong></v-btn>
		</div>
		<div v-else style="max-width: 800px; margin: auto;">
			<p class="text-overline mt-1"><strong>Chapter {{ getChapter }}</strong></p>
			<v-divider class="mb-3"></v-divider>
			<p class="text-body-1 text-justify scripturetext" v-html="sectionText"></p>
		</div>
		<p class="text-body-2 mt-6" v-if="index.external"><a :href="index.external">View <span v-if="index.externalType">{{ index.externalType }}</span></a> from The Church of Jesus Christ of Latter-day Saints Website</p>
	</v-container>
	<!--<p class="text-body-2 mt-6"><em>Powered by <a href="https://alquran.cloud">alquran.cloud</a></em></p>-->
</template>

<script lang="ts" setup>
	const props = defineProps({
		book: { type: Array<string>, required: true },
	});

	import { useRoute, useRouter, onBeforeRouteUpdate  } from 'vue-router';
	const route = useRoute();
	const router = useRouter();

	import Vuetify from 'vuetify';
	import { VDataTable } from 'vuetify/labs/VDataTable';
	import GeneralIndex from '@/components/GeneralIndex.vue';
	import { ref, readonly, DeepReadonly, watch, computed, onBeforeMount } from 'vue';

	import LDSApi from "@/ldsapi/ldsapi";
	let index = ref(LDSApi.getBookFromIndex(props.book[props.book.length - 1]) as any);

	// If the book has chapters only, and no subsections
	let hasChapters = computed(() => {
		return index.value.chapters;
	});
	let chapters = computed(() => {
		if (hasChapters.value) {
			return index.value.chapters;
		}
		return 0;
	});
	let inChapter = computed(() => {
		const parts = props.book[props.book.length - 1].split('.');
		return parts.length > 1;
	})
	let getChapter = computed(() => { // 0 if more subsections, 1 if no chapters, >1 if chapters
		if (hasChapters.value) {
			const parts = props.book[props.book.length - 1].split('.');
			return parseInt(parts[1], 10)
		}
		return index.value.contents ? 0 : 1;
	});
	let sectionTextInfo = ref([] as any[]);
	let sectionText = computed(() => {
		let s = "";
		for (let a of sectionTextInfo.value) {
			s += " " + a.scripture_text;
		}
		return s;
	})

	watch(() => route.params.book as Array<string>, async (newBook: Array<string>) => {
		if (!newBook) return;
		const parts = newBook[newBook.length - 1].split('.');
		index.value = LDSApi.getBookFromIndex(parts[0]);

		const bookText = await LDSApi.getBookText(newBook.join('.'));
		sectionTextInfo.value = bookText;
	});

	onBeforeMount(async () => {
		const parts = props.book[props.book.length - 1].split('.');
		index.value = LDSApi.getBookFromIndex(parts[0]);
		const bookText = await LDSApi.getBookText(props.book.join('.'));
		sectionTextInfo.value = bookText;
		console.log("BookText: ", bookText);
	});
</script>

<style lang="scss">
@use 'vuetify/_settings';
.footnote {
	display: hidden;
}
</style>