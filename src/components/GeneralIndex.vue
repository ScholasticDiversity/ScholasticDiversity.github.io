<template>
	<v-col :cols="6" v-if="!root.contents || depth < 2"> <!-- If a text or category is too far deep, present as a card rather than as a heading -->
		<v-card density="compact" ripple :to="root.to ? root.to : undefined" :href="root.href ? root.href : undefined" variant="flat" :hover="true">
			<v-card-text>
				<p class="text-body-1"><strong>{{ root.title }}</strong></p>
				<p class="text-body-2 text-justify">{{ root.desc }}</p>
			</v-card-text>
		</v-card>
	</v-col>
	<v-col :cols="12" v-else> <!-- Otherwise, present as a heading, and if depth limit not met, list children (recursively) -->
		<span v-if="!hideroot">
			<h2 class="text-overline"><strong>{{ root.title }}</strong></h2>
			<p v-if="root.desc" class="text-body-2 mb-2">{{ root.desc }}</p>
			<v-divider class=""></v-divider>
		</span>
		<v-container fluid v-if="depth >= 2" :style="isroot ? 'margin: 0px; padding: 0px;' : ''">
			<v-row dense v-for="row in Math.ceil(root.contents.length / 2.0)" :key="row">
				<GeneralIndex v-for="r in root.contents.slice(row * 2 - 2, row*2)" :root="r" :key="r.title" :hideroot="false" :depth="depth - 1" :isroot="false" :categories="categories.concat([r.category])"></GeneralIndex>
				<v-divider v-if="!root.contents[row * 2 - 2].contents && row != Math.ceil(root.contents.length / 2.0)"></v-divider>
			</v-row>
		</v-container>
	</v-col>
</template>

<script lang="ts" setup>
	const props = defineProps(["root", "hideroot", "depth", "isroot", "categories"]);
	import { computed } from 'vue';

	const isText = computed(() => props.root.isText ? true : false);
</script>