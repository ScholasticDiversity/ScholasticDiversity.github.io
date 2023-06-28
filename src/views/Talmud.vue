<template>
	<v-breadcrumbs>
		<v-breadcrumbs-item title="Scriptures" :to="{ name: 'scriptures' }"></v-breadcrumbs-item>
		<v-breadcrumbs-divider></v-breadcrumbs-divider>
		<v-breadcrumbs-item title="Talmud" active></v-breadcrumbs-item>
	</v-breadcrumbs>
	<h1 class="text-h5 text-center">Talmud</h1>
	<v-divider class="mb-6"></v-divider>

	<v-container fluid :style="'margin: 0px; padding: 0px;'">
		<v-row dense :style="'margin: 0px; padding: 0px;'">
			<SefariaIndex :root="tanakhToc" hideroot="true" :depth="3" isroot="true" :categories="['Talmud']"></SefariaIndex>
		</v-row>
	</v-container>
</template>

<script lang="ts" setup>
	import Vuetify from 'vuetify';
	import { VDataTable } from 'vuetify/labs/VDataTable';
	import SefariaIndex from '@/components/SefariaIndex.vue';
	import { ref, readonly, DeepReadonly } from 'vue';
	let tanakhToc = ref(Sefaria.toc[2]);
</script>
