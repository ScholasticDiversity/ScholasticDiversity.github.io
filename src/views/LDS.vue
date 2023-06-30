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

	<v-container fluid :style="'margin: 0px; padding: 0px;'" v-if="!hasChapters"> <!-- Not in Text, show index -->
		<v-row dense :style="'margin: 0px; padding: 0px;'">
			<GeneralIndex :root="index" hideroot="true" :depth="3" isroot="true" :categories="[]"></GeneralIndex>
		</v-row>
		<p class="text-body-2 mt-6" v-if="index.external"><a :href="index.external">View <span v-if="index.externalType">{{ index.externalType }}</span></a> from The Church of Jesus Christ of Latter-day Saints Website</p>
	</v-container>
	<v-container fluid :style="'margin: 0px; padding: 0px;'" v-else-if="!inChapter">
		<p class="text-body-1 mt-3 mb-6 text-justify" v-if="index.intro">{{ index.intro }}</p>
		<p class="text-overline mt-1"><strong>Chapters</strong></p>
		<v-divider class="mb-3"></v-divider>
		<v-btn variant="text" class="ma-1" v-for="chapter in chapters" :key="chapter" :href="'/#/scriptures/l/' + book.join('/') + '.' + chapter" exact><strong>{{ chapter }}</strong></v-btn>
		<p class="text-body-2 mt-6" v-if="index.external"><a :href="index.external">View <span v-if="index.externalType">{{ index.externalType }}</span></a> from The Church of Jesus Christ of Latter-day Saints Website</p>
	</v-container>
	<v-container fluid :style="'margin: auto; padding: 0px; max-width: 720px;'" v-else>
		<div v-if="chapters > 1">
			<p class="text-overline"><strong>Chapter {{ getChapter }}</strong></p>
			<v-divider></v-divider>
		</div>
		<p class="text-body-1 text-justify scripturetext" :class="chapters == 1 ? 'mt-4' : ''" v-html="sectionText"></p>
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
		return index.value.chapters >= 1;
	});
	let chapters = computed(() => {
		if (hasChapters.value) {
			return index.value.chapters;
		}
		return 0;
	});
	let inChapter = computed(() => {
		if ((index.value.chapters == 0 || index.value.chapters == 1) && !index.value.contents) return true;
		const parts = props.book[props.book.length - 1].split('.');
		return parts.length > 1;
	})
	let getChapter = computed(() => { // 0 if more subsections, 1 if no chapters, >1 if chapters
		if (inChapter.value) {
			if ((index.value.chapters == 0 || index.value.chapters == 1) && !index.value.contents) return 1;
		}
		if (hasChapters.value) {
			const parts = props.book[props.book.length - 1].split('.');
			return parseInt(parts[1], 10)
		}
		return index.value.contents ? 0 : 1;
	});
	let sectionTextInfo = ref([] as any[]);
	let sectionText = computed(() => {
		let s = "";
		let separator = " ";
		let prefix = "";
		let suffix = "";
		if (index.value.paragraphs) {
			prefix = "<p class='indent'>"
			suffix = "</p>"
		}
		for (let a of sectionTextInfo.value) {
			s += separator + prefix + a.scripture_text + suffix;
		}
		return s;
	})

	watch(() => route.params.book as Array<string>, async (newBook: Array<string>) => {
		if (!newBook) return;
		const parts = newBook[newBook.length - 1].split('.');
		index.value = LDSApi.getBookFromIndex(parts[0]);

		if ((index.value.chapters == 0 || index.value.chapters == 1) && !index.value.contents) {
			const bookText = await LDSApi.getBookText(newBook.concat(["1"]).join('.'));
			sectionTextInfo.value = bookText;
		} else {
			const bookText = await LDSApi.getBookText(newBook.join('.'));
			sectionTextInfo.value = bookText;
		}
	});

	onBeforeMount(async () => {
		const parts = props.book[props.book.length - 1].split('.');
		index.value = LDSApi.getBookFromIndex(parts[0]);

		let bookText = [] as Array<any>;
		if ((index.value.chapters == 0 || index.value.chapters == 1) && !index.value.contents) {
			bookText = await LDSApi.getBookText(props.book.concat(["1"]).join('.'));
			sectionTextInfo.value = bookText;
		} else {
			bookText = await LDSApi.getBookText(props.book.join('.'));
			sectionTextInfo.value = bookText;
		}
		console.log("BookText: ", bookText);
	});
</script>

<style lang="scss">
@use 'vuetify/_settings';
.footnote {
	display: hidden;
}
</style>