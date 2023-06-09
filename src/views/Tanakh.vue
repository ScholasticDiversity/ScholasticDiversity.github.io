<template>
	<v-breadcrumbs>
		<v-breadcrumbs-item title="Scriptures" :to="{ name: 'scriptures' }"></v-breadcrumbs-item>
		<!--<v-breadcrumbs-divider></v-breadcrumbs-divider>
		<v-breadcrumbs-item title="Tanakh" :active="!isText" :to="{ name: 'tanakhscriptures' }"></v-breadcrumbs-item>-->
		<span v-for="s in categories.filter((t) => (t != 't' && t != 'r'))" :key="s">
			<v-breadcrumbs-divider></v-breadcrumbs-divider>
			<v-breadcrumbs-item :href="'/#/scriptures/j/' + categories.slice(0, categories.indexOf(s) + 1).join('/')">{{ s }}</v-breadcrumbs-item>
		</span>
	</v-breadcrumbs>
	<h1 class="text-h5 text-center">{{ isText ? textName : toc.category }}</h1>
	<v-divider></v-divider>

	<v-container fluid :style="'margin: 0px; padding: 0px;'" v-if="isText && sections.length == 0"> <!-- Text root, show sections -->
		<p v-if="indexDetails.enDesc" class="text-body-1 mb-6 mt-3 text-justify">{{ indexDetails.enDesc }}</p>
		<div v-if="hasChapters">
			<p class="text-overline mt-1"><strong>Chapters</strong></p>
			<v-divider class="mb-3"></v-divider>
			<v-btn variant="text" class="ma-1" v-for="chapter in chapters" :key="chapter" :href="'/#/scriptures/j/t/' + textName + '.' + chapter" exact><strong>{{ chapter }}</strong></v-btn>
		</div>
		<div v-if="hasDafs">
			<p class="text-overline mt-1"><strong>Dafs</strong></p>
			<v-divider class="mb-3"></v-divider>
			<v-btn variant="text" class="ma-1" v-for="daf in dafs" :key="daf" :href="'/#/scriptures/j/t/' + textName + '.' + daf" exact><strong>{{ daf }}</strong></v-btn>
		</div>
		<div v-if="hasIntSections">
			<p class="text-overline mt-1"><strong>Paragraphs</strong></p>
			<v-divider class="mb-3"></v-divider>
			<v-btn variant="text" class="ma-1" v-for="p in intSections" :key="p" :href="'/#/scriptures/j/t/' + textName + '.' + p" exact><strong>{{ p }}</strong></v-btn>
		</div>
	</v-container>
	<v-container fluid :style="'margin: auto; padding: 0px; max-width: 720px;'" v-else-if="isText && sections.length > 0"> <!-- Inside a text section, show subsections or text -->
		<div v-if="isChapter || isIntSection || isDaf"> <!-- If last section is a chapter, show text for whole chapter -->
			<p class="text-overline mt-1"><strong>{{ indexDetails.schema ? indexDetails.schema.sectionNames[sections.length - 1] : "" }} {{ sections[sections.length - 1] }}</strong></p>
			<v-divider class="mb-3"></v-divider>
			<p class="text-body-1 text-justify scripturetext" v-html="sectionText"></p>
		</div>
		<p class="text-body-2 mt-3"><em>{{ sectionTextInfo.versionTitle }}</em></p>
	</v-container>
	<v-container fluid :style="'margin: 0px; padding: 0px;'" v-else> <!-- Not in Text, show index -->
		<v-row dense :style="'margin: 0px; padding: 0px;'">
			<SefariaIndex :root="toc" hideroot="true" :depth="3" isroot="true" :categories="categories"></SefariaIndex>
		</v-row>
	</v-container>
	<p class="text-body-2 mt-6"><em>Powered by <a href="https://sefaria.org">Sefaria</a>.</em></p>
</template>

<script lang="ts" setup>
	// TODO: Sefaria.sectionString - Returns a pair of nice strings (en, he) of the sections indicated in ref
	// TODO: Handle when there's no English text

	const props = defineProps({
		categories: { type: Array<string>, required: true },
	});

	import { useRoute, useRouter, onBeforeRouteUpdate  } from 'vue-router';
	const route = useRoute();
	const router = useRouter();

	import Vuetify from 'vuetify';
	import { VDataTable } from 'vuetify/labs/VDataTable';
	import SefariaIndex from '@/components/SefariaIndex.vue';
	import { ref, readonly, DeepReadonly, watch, computed, onBeforeMount } from 'vue';

	//let categories = ref((route.params.categories || []) as Array<string>);
	
	let toc = computed(() => {
		let currentCategoryIndex = 0;
		console.log(props.categories);
		if (isText.value) { // If a text, no need for a toc
			return { contents: [] };
		}

		let root = { contents: Sefaria.toc };
		let current = root as any;

		outer: while (currentCategoryIndex < props.categories.length) {
			console.log("Test");
			for (let e of (current.contents as Array<any>)) {
				console.log("Test2: ", (e as any).category);
				if (e.category.localeCompare(props.categories[currentCategoryIndex], undefined, { sensitivity: "base" }) == 0) {
					currentCategoryIndex++;
					current = e;
					console.log("Found ", e);
					continue outer;
				}
			}
			break;
		}

		return current;
	})

	// TODO: Deal with schemas that are more complex
	// Some have a tree of nodes to deal with subsections. An example is Chayei Adam.

	let tanakhToc = ref(Sefaria.toc[0]);
	let textShape = ref([] as any);
	let indexDetails = ref({} as any);
	let hasChapters = computed(() => {
		return indexDetails.value.schema && indexDetails.value.schema.addressTypes && indexDetails.value.schema.addressTypes[sections.value.length] == 'Perek';
	});
	let isChapter = computed(() => {
		return indexDetails.value.schema && indexDetails.value.schema.addressTypes && indexDetails.value.schema.addressTypes[sections.value.length - 1] == 'Perek';
	});
	let hasDafs = computed(() => {
		return indexDetails.value.schema && indexDetails.value.schema.addressTypes && indexDetails.value.schema.addressTypes[sections.value.length] == 'Talmud';
	});
	let isDaf = computed(() => {
		return indexDetails.value.schema && indexDetails.value.schema.addressTypes && indexDetails.value.schema.addressTypes[sections.value.length - 1] == 'Talmud';
	});
	let hasIntSections = computed(() => { // Integer sections are used for paragraphs
		return indexDetails.value.schema && indexDetails.value.schema.addressTypes && indexDetails.value.schema.addressTypes[sections.value.length] == 'Integer';
	});
	let isIntSection = computed(() => {
		return indexDetails.value.schema && indexDetails.value.schema.addressTypes && indexDetails.value.schema.addressTypes[sections.value.length - 1] == 'Integer';
	});
	let chapters = computed(() => { // TODO: This isn't working on refresh
		if (indexDetails.value.schema) { // Note: Perek is Hebrew for Chapter
			let chapterIndex = indexDetails.value.schema.addressTypes.indexOf("Perek");
			if (chapterIndex > -1) {
				return indexDetails.value.schema.lengths[chapterIndex];
			}
		} else if (textShape.value[0]) {
			return textShape.value[0].chapters.length;
		}
		return 0;
	});
	let dafs = computed(() => {
		if (indexDetails.value.schema) {
			let dafsIndex = indexDetails.value.schema.addressTypes.indexOf("Talmud");
			if (dafsIndex > -1) {
				let dafLength = indexDetails.value.schema.lengths[dafsIndex];
				console.log("DafsIndex: ", dafsIndex);
				let dafs = [];
				let current = 2;
				for (let i = 2; i < dafLength; i+=2) {
					dafs.push(current + "a");
					if (i + 1 < dafLength) {
						dafs.push(current + "b");
					}
					current += 1;
				}
				return dafs;
			}
		}
		return [];
	});
	let intSections = computed(() => { // Integer sections are used for paragraphs
		if (indexDetails.value.schema) { // Note: Perek is Hebrew for Chapter
			let chapterIndex = indexDetails.value.schema.addressTypes.indexOf("Integer");
			if (chapterIndex > -1) {
				return indexDetails.value.schema.lengths[chapterIndex];
			}
		}
		return 0;
	})
	const isText = computed(() => {
		if (!props.categories) {
			return false;
		}
		console.log(props.categories[0]);
		return props.categories[0] == "t";
	});
	const textName = computed(() => {
		if (isText.value) {
			return props.categories[1].split('.')[0];
		} else {
			return "";
		}
	});
	const sections = computed(() => { // Merge with categories?
		if (isText.value) {
			return props.categories[1].split('.').slice(1);
		}
		return [];
	})
	const sectionTextInfo = ref({} as any);
	const sectionText = computed(() => {
		console.log(sectionTextInfo.value)
		if (!sectionTextInfo.value.text) return "";
		if (typeof sectionTextInfo.value.text === "string") {
			return sectionTextInfo.value.text.replaceAll('יהוה', 'LORD').replaceAll('— ', '—');
		} else {
			return sectionTextInfo.value.text.join(" ").replaceAll('יהוה', 'LORD').replaceAll('— ', '—');
		}
	})
	/*const sectionText = computed(async () => {
		if (isText.value) {
			if (indexDetails.value.schema && indexDetails.value.schema.addressTypes[sections.length - 1] == 'Perek') {
				return 
			}
		}
	})*/
	onBeforeRouteUpdate(async (to, from) => {
		//console.log("Route params changed!");
		if (to.params.categories && to.params.categories[0] == "t") {
			let _sections = to.params.categories[1].split('.');
			console.log(_sections);
			let textName = _sections[0];
			let cache = Sefaria.getIndexDetailsFromCache(textName);
			if (cache) {
				indexDetails.value = cache;
			} else {
				indexDetails.value = await Sefaria.getIndexDetails(textName);
			}

			if (_sections.length > 1) {
				console.log("Length over 1");
				let sectionAddressType = indexDetails.value.schema.addressTypes[_sections.length - 2];
				if (sectionAddressType == 'Perek' || sectionAddressType == 'Talmud' || sectionAddressType == "Integer") {
					let textCache = Sefaria.getTextFromCache(_sections.join("."));
					if (textCache) {
						sectionTextInfo.value = textCache;
						console.log("Text from cache!");
					} else {
						sectionTextInfo.value = await Sefaria.getText(_sections.join("."))
					}
					console.log(sectionTextInfo.value)
				}
			}
			//textShape.value = await Sefaria.getShape(to.params.categories[1]);
		}
	});
	onBeforeMount(async () => {
		//console.log("Mounted!");
		if (route.params.categories && route.params.categories[0] == "t") {
			let _sections = route.params.categories[1].split('.');
			let textName = _sections[0];
			let cache = Sefaria.getIndexDetailsFromCache(textName);
			if (cache) {
				indexDetails.value = cache;
			} else {
				indexDetails.value = await Sefaria.getIndexDetails(textName);
			}

			if (_sections.length > 1) {
				let sectionAddressType = indexDetails.value.schema.addressTypes[_sections.length - 2];
				if (sectionAddressType == 'Perek' || sectionAddressType == 'Talmud' || sectionAddressType == "Integer") {
					let textCache = Sefaria.getTextFromCache(_sections.join("."));
					if (textCache) {
						sectionTextInfo.value = textCache;
						console.log("Text from cache!");
					} else {
						sectionTextInfo.value = await Sefaria.getText(_sections.join("."))
					}
					console.log(sectionTextInfo.value)
				}
			}
			//textShape.value = await Sefaria.getShape(route.params.categories[1]);
		}

	});

</script>

<style lang="scss">
@use 'vuetify/_settings';
.footnote {
	display: hidden;
}
</style>