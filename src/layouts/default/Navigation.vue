<template>
    <v-navigation-drawer>
	<v-list nav>
		<template v-for="item in items" :key="item.title">
			<v-divider v-if="item.title === '-'" />
			<v-list-subheader v-else-if="item.title.startsWith('#')" :title="item.title.substring(1)"></v-list-subheader>
			<template v-else>
				<!-- Menu Item -->
				<v-list-item
				v-if="!item.items"
				:disabled="!item.to"
				:prepend-icon="item.icon"
				:title="item.title"
				:to="item.to"
				:key="item.title"
				:value="item.title"
				link
				/>
				<!-- Sub menu -->
				<v-list-group v-else-if="item.items" v-model="item.active">
				<template #activator="{ props }">
					<v-list-item
					v-bind="props"
					:prepend-icon="item.icon"
					:title="item.title"
					/>
				</template>
				<!-- Sub menu item -->
				<template v-for="subItem in item.items" :key="subItem.title">
					<v-divider v-if="subItem.title === '-'" />
					<v-list-subheader v-else-if="item.title.startsWith('#')" :title="item.title.substring(1)"></v-list-subheader>
					<v-list-item
					v-else
					:disabled="!subItem.to"
					:prepend-icon="subItem.icon"
					:title="subItem.title"
					:to="subItem.to"
					link
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
	const items: DrawerMenuItem[] = [
		{ title: 'Home', icon: 'mdi-home', to: { name: 'home' }, },
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
				{ title: 'Ancient Near Eastern Paganism' },
				{ title: 'Zoroastrianism' },
				{ title: 'Judaism', to: { name: "judaism" } },
				{ title: 'Samaritans' },
				{ title: 'Buddhism' },
				{ title: 'Jainism' },
				{ title: 'Greek Paganism' },
				{ title: 'Mystery Religions' },
				{ title: 'Christianity' },
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
				{ title: 'Vedas' },
				{ title: 'Tanakh (Hebrew Bible)' },
				{ title: 'OT Apocrypha/Deuterocanon' },
				{ title: 'New Testament' },
				{ title: 'Talmud' },
				{ title: 'Qur\'an' },
				{ title: 'The Book of Mormon' },
				{ title: 'Gnostic Gospels' },
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
