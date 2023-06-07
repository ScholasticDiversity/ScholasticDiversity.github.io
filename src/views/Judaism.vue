<template>
	<v-breadcrumbs>
		<v-breadcrumbs-item title="Religious Literacy" :to="{ name: 'religiousliteracy' }"></v-breadcrumbs-item>
		<v-breadcrumbs-divider></v-breadcrumbs-divider>
		<v-breadcrumbs-item title="Judaism" active></v-breadcrumbs-item>
	</v-breadcrumbs>
	<h1 class="text-h4 text-center">Judaism</h1>
	<v-divider class="mb-6"></v-divider>

	<h2 class="text-h5 mb-3 mt-6">Book List</h2>
</template>

<script lang="ts" setup>
	import Vuetify from 'vuetify';
	import { ref, readonly, DeepReadonly } from 'vue';
</script>
