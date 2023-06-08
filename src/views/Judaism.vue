<template>
	<v-breadcrumbs>
		<v-breadcrumbs-item title="Religious Literacy" :to="{ name: 'religiousliteracy' }"></v-breadcrumbs-item>
		<v-breadcrumbs-divider></v-breadcrumbs-divider>
		<v-breadcrumbs-item title="Judaism" active></v-breadcrumbs-item>
	</v-breadcrumbs>
	<h1 class="text-h4 text-center">Judaism</h1>
	<v-divider class="mb-6"></v-divider>
	<p class="text-body-1 mb-3"><strong>Judaism</strong> is a monotheistic religion that develops out of Ancient Near Eastern polytheism, moves from polytheism to monolatry by worshipping the god Yahweh (considered part of the Ancient Near Eastern Pantheon) over other gods (who are still considered to exist), and eventually undergoes drastic changes in Theology and practice after 586 BCE, when the Babylonians take over Judah, destroy the first Temple in Jerusalem, and exile the Israelites to Babylonia.</p>
	<p class="text-body-1 mb-3">In Babylonia, they interact with Zoroastrianism, which was monotheistic at the time. During this time, many already-developed stories and texts are edited and revised in light of the fall of Judah and the start of the Diaspora in order to explain these events through a new perspective on the past. They do this by compiling and editing (redacting) these stories, which become the Torah and Deuteronomistic History (Genesis to 2 Kings, excluding Ruth), in a way that shows the cycle of sin and repentance of the people. This cycle of sin and repentance explained Theologically the reasons for the destruction of the Temple and the Diaspora at the time.</p>
	<p class="text-body-1 mb-3">One other important development during this time was the shift from a God that is limited to a place, and might have been thought to be inferior to the god(s) of the conquerors (as was usual for the time), to a God that <em>uses</em> the conquerors to punish the people. This is what allowed the people to continue the religion when usually they might have assimilated, and what furthered the development of monotheism and an All-powerful God of <em>everyone</em>.</p>

	<h2 class="text-h5 mb-3 mt-6">Book List</h2>
</template>

<script lang="ts" setup>
	import Vuetify from 'vuetify';
	import { ref, readonly, DeepReadonly } from 'vue';
</script>
