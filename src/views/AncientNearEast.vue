<template>
    <v-breadcrumbs>
		<v-breadcrumbs-item title="Religious Literacy" :to="{ name: 'religiousliteracy' }"></v-breadcrumbs-item>
		<v-breadcrumbs-divider></v-breadcrumbs-divider>
		<v-breadcrumbs-item title="Ancient Near Eastern Paganism" active></v-breadcrumbs-item>
	</v-breadcrumbs>
	<h1 class="text-h4 text-center">Ancient Near Eastern Paganism</h1>
	<v-divider class="mb-6"></v-divider>
	<p class="text-body-1 mb-3"></p>
	
	<h2 class="text-h5 mb-3 mt-6">Book List</h2>
	<v-text-field
		prepend-inner-icon="mdi-magnify"
        v-model="search"
        label="Search Books"
        single-line
		clearable
		variant="outlined"
		density="compact"
      ></v-text-field>
	<v-data-table
		v-model:items-per-page="itemsPerPage"
		:headers="bookHeaders"
		:items="books"
		item-value="name"
		:search="search"
		class="elevation-1"></v-data-table>
</template>


<script lang="ts" setup>
	import Vuetify from 'vuetify';
	import { VDataTable } from 'vuetify/labs/VDataTable';
	import { ref, readonly, DeepReadonly } from 'vue';
	const itemsPerPage = ref(20);
	const bookHeaders: DeepReadonly<any> = readonly([
		{ title: 'Category', align: 'start', sortable: true, key: 'category', value: "category" },
		{ title: 'Title', align: 'start', sortable: true, key: 'name', value: "name" },
		{ title: 'Author', align: 'start', sortable: true, key: 'author', value: "author" },
		{ title: 'Awards', align: 'start', sortable: true, key: 'awards', value: "awards" },
		{ title: 'Tradition', align: 'start', sortable: true, key: 'tradition', value: "tradition" },
	]);
	let search = ref('');
	var books = ref([
		{ category: "", name: "", author: "", awards: "", tradition: "All" },
	]);
</script>
