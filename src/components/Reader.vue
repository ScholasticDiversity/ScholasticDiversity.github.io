<template>
    <v-container fluid :style="'margin: auto; padding: 0px; max-width: 720px;'"> <!-- Not in Text, show index -->
		<p class="text-overline mt-1"><strong>{{ sectiontitle }}</strong></p>
		<v-divider class="mb-3"></v-divider>

		<p class="text-body-1 text-justify scripturetext" v-if="!epub" v-html="sectionText"></p>
        
        <p class="text-body-2 mt-3"><em>{{ copyright }}</em></p>
	</v-container>
    <p class="text-body-2 mt-6" v-if="poweredby"><em>Powered by <a :href="poweredby.link">{{ poweredby.name }}</a></em></p>
</template>

<script lang="ts" setup>
    // epub is a link to an epub file. If used, sectionText is not used.
	const props = defineProps(["sectiontitle", "sectionText", "epub", "copyright", "poweredby"]); // poweredby { link, name }
	import { computed } from 'vue';

</script>