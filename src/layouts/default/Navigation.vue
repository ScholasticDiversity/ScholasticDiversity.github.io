<template>
    <v-navigation-drawer>
	<v-list density="compact" nav :lines="false">
		<template v-for="item in items" :key="item.title">
			<v-divider v-if="item.title === '-'" />
			<v-list-subheader v-else-if="item.title.startsWith('#')" :title="item.title.substring(1)"></v-list-subheader>
			<template v-else>
				<!-- Menu Item -->
				<v-list-item
				v-if="!item.items"
				:disabled="!item.to && !item.href"
				:prepend-icon="item.icon"
				:title="item.title"
				:to="item.to"
				:href="item.href"
				:key="item.title"
				:value="item.title"
				link
				exact
				:active="isRouteActive(item.to)"
				/>
				<!-- Sub menu -->
				<v-list-group v-else-if="item.items" v-model="item.active">
				<template #activator="{ props }">
					<v-list-item
					v-bind="props"
					:prepend-icon="item.icon"
					:title="item.title"
					exact
					/>
				</template>
				<!-- Sub menu item -->
				<template v-for="subItem in item.items" :key="subItem.title">
					<v-divider v-if="subItem.title === '-'" />
					<v-list-subheader v-else-if="item.title.startsWith('#')" :title="item.title.substring(1)"></v-list-subheader>
					<v-list-item
					v-else
					:disabled="!subItem.to && !subItem.href"
					:prepend-icon="subItem.icon"
					:title="subItem.title"
					:to="subItem.to"
					:href="subItem.href"
					link
					exact
					/>
				</template>
				</v-list-group>
			</template>
		</template>
	</v-list>
	</v-navigation-drawer>
</template>

<script lang="ts" setup>
	import type DrawerMenuItem from '@/interfaces/DrawerMenuItemInterface';
	import { RouteLocationRaw, RouteLocationNamedRaw, useRouter } from "vue-router";
	import { computed } from 'vue'
	const router = useRouter();

	const isRouteActive = (route: RouteLocationRaw | undefined) => {
		if (route == undefined) {
			return false;
		}
		return router.currentRoute.value.name == (route as RouteLocationNamedRaw).name;
	}

	const items: DrawerMenuItem[] = [
		{ title: 'Home', icon: 'mdi-home', to: { name: 'home' }, },
		{ title: 'Tempus Calendar', icon: 'mdi-calendar', to: { name: 'tempuscalendar' }, },
		{ title: 'Blog', icon: 'mdi-notebook', to: { name: 'blog' }, },
		{ title: "Github", href: "https://github.com/ScholasticDiversity/ScholasticDiversity.github.io" },
		{ title: '-', }, // Divider
		{ title: '#Categories', }, // Subheader
		{ title: 'Mathematics' },
		{ title: 'Computer Science' },
		{ title: 'Anti-semitism' },
		{ title: 'Race and Racism' },
		{ title: 'Women' },
		{ title: 'LGBTQIA+' },
		{ title: 'Linguistics' },
		{ title: 'Literature' },
		{ title: 'Religious Literacy', 
			items: [
				{ title: "Overview", to: { name: "religiousliteracy" } },
				{ title: 'Hinduism' },
				{ title: 'Sikhism' },
				{ title: 'Confucianism' },
				{ title: 'Daoism' },
				{ title: 'Shinto' },
				{ title: 'Ancient Near Eastern Paganism', to: { name: "ancientneareast" } },
				{ title: 'Zoroastrianism' },
				{ title: 'Judaism', to: { name: "judaism" } },
				{ title: 'Samaritans' },
				{ title: 'Buddhism' },
				{ title: 'Jainism' },
				{ title: 'Greek Paganism' },
				{ title: 'Mystery Religions' },
				{ title: 'Christianity', to: { name: "christianity" } },
				{ title: 'Gnosticism' },
				{ title: 'Islam' },
				{ title: 'Baha\'i' },
				{ title: 'Wicca' },
				{ title: 'Christian Science' },
				{ title: 'Scientology' },
			]
		},
		{ title: 'Scriptures', 
			items: [
				{ title: "Overview", to: { name: "scriptures" } },
				{ title: 'Vedas' },
				{ title: 'Tanakh (Hebrew Bible)', to: { name: "sefaria", params: { categories: ["Tanakh"] } } },
				{ title: 'Christian Old Testament' },
				{ title: 'OT Apocrypha/Deuterocanon' },
				{ title: 'Septuagint', to: { name: "septuagint" } },
				{ title: 'New Testament' },
				{ title: 'Bavli Talmud', to: { name: "sefaria", params: { categories: ["Talmud", "Bavli"] } } },
				{ title: 'Yerushalmi Talmud', to: { name: "sefaria", params: { categories: ["Talmud", "Yerushalmi"] } } },
				{ title: "Other Jewish Scriptures", to: { name: "jewishscriptures", params: { categories: [] } } },
				{ title: 'Qur\'an', to: { name: "quran" } },
				{ title: 'The Book of Mormon', to: { name: "lds", params: { book: ["The Book of Mormon"] } } },
				{ title: 'Gnostic Gospels' },
			]
		},
		{ title: "Trivia",
			items: [
				{ title: "Bible Test", to: { name: "bible_test" } },
			]
		},
		{ title: 'Philosophy', 
			items: [
				{ title: 'Pre-Socratic' },
				{ title: 'Plato' },
				{ title: 'Aristotle' },
				{ title: 'Stoicism' },
				{ title: 'Neoplatonism' },
				{ title: 'Medieval Jewish' },
				{ title: 'Analytic' },
				{ title: 'Rationalism' },
				{ title: 'Empiricism' },
				{ title: 'Haskalah (Jewish Enlightenment)' },
				{ title: 'German Idealism' },
				{ title: 'Continental' },
				{ title: 'Marxism' },
				{ title: 'Existentialism' },
				{ title: 'Positivism' },
				{ title: 'Modernism' },
				{ title: 'Frankfurt School' },
				{ title: 'Structuralism' },
				{ title: 'Postmodernism' },
				{ title: 'Poststructuralism' },
				{ title: 'Contemporary' },
			]
		},
		{ title: 'Theology', 
			items: [
				{ title: 'Overview', to: { name: "theology" } },
				{ title: 'Jewish Theology' },
				{ title: 'Christian Theology', },
				{ title: 'Islamic Theology', },
				{ title: 'Contextual Theologies', to: { name: 'contextualtheologies' }, },
			]
		},
	]
</script>
