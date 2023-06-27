<template>
	<v-breadcrumbs>
		<v-breadcrumbs-item title="Religious Literacy" :to="{ name: 'religiousliteracy' }"></v-breadcrumbs-item>
		<v-breadcrumbs-divider></v-breadcrumbs-divider>
		<v-breadcrumbs-item title="Judaism" active></v-breadcrumbs-item>
	</v-breadcrumbs>
	<h1 class="text-h4 text-center">Judaism</h1>
	<v-divider class="mb-6"></v-divider>
	<p class="text-body-1 mb-3"><strong>Judaism</strong> is a monotheistic religion that develops out of Ancient Near Eastern polytheism, moves from polytheism to monolatry by worshipping the god Yahweh (considered part of the Ancient Near Eastern Pantheon) over other gods (who are still considered to exist), and eventually undergoes drastic changes in Theology and practice after 586 BCE, when the Babylonians take over Judah, destroy the first Temple in Jerusalem, and exile the Israelites to Babylonia.</p>
	<p class="text-body-1 mb-3">In Babylonia, they interact with Zoroastrianism, which was monotheistic at the time. During this time, many of their already-developed stories and texts are edited and revised in light of the fall of Judah and the start of the Diaspora in order to explain these events through a new perspective on the past. They do this by compiling and editing (redacting) these stories, which become the Torah and Deuteronomistic History (Genesis to II Kings, excluding Ruth), in a way that shows the cycle of sin and repentance of the people. This cycle of sin and repentance explained Theologically the reasons for the destruction of the Temple and the Diaspora at the time. This is also when we see a clear shift, particularly shown in the Prophets, away from the Temple and Sacrificial practices, especially now that the Temple is destroyed and unusable.</p>
	<p class="text-body-1 mb-3">One other important development during this time was the shift from a God that is limited to a place, and might have been thought to be inferior to the god(s) of the conquerors (as was usual for the time), to a God that <em>uses</em> the conquerors to punish the people. This is what allowed the people to continue their belief and practice when usually they might have assimilated to the conqueror's religion, and is what furthered the development of monotheism and an all-powerful universal God of <em>everyone</em> within Judaism.</p>
	<p class="text-body-1 mb-3"> In 539-538 BCE, when Cyrus became King of Babylonia (after the Persian Empire in 559 BCE), he declared a position of religious toleration, and so allowed Jews (along with other religious groups within the Empire) to return to Israel and rebuild the Temple in Jerusalem. This becomes the Second Temple. Later, when Chronicles and Ezra-Nehemiah are written, this is portrayed as a fulfilment of prophecy (particularly of Jeremiah) when God has forgiven the people and allowed them to return. Ezra 1:4 suggests that some Jews stayed behind in Babylonia/Persia.</p>
	<!--<p class="text-body-1 mb-3">By the time of the first century CE, Judaism of the masses becomes widely diverse, and we start seeing four distinct sects of Judaism, separate from the diverse masses: the Sadducees, the Pharisees, the Zealots, and the Essenes. The Saducees are the Temples Priests. They only hold the Torah as sacred. The Pharisees are the teachers of the masses, and they hold the Torah, the Prophets, and much of the Writings as sacred. The Zealots are those who desire to overtake Israel as a sovereign state by fighting back against the Romans. And finally, the Essenes are a sect cut off from society. They also hold the Torah, Prophets, and Writings as sacred, and they opposed the Sadducees.</p>-->

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
		{ category: "General", name: "Judaism: A Very Short Introduction", author: "", awards: "", tradition: "All" },
		{ category: "General", name: "Jewish History: A Very Short Introduction", author: "", awards: "", tradition: "All" },
		{ category: "General", name: "Essential Judaism (Updated Edition)", author: "George Robinson", awards: "", tradition: "All" },
		{ category: "General", name: "To Be A Jew", author: "Rabbi Hayim Halevy Donin", awards: "", tradition: "Orthodox" },
		{ category: "Translation", name: "Jewish Bible Translations: Personalities, Passions, Politics, Progress", author: "Leonard Greenspoon", awards: "", tradition: "All" },
		{ category: "Bible Interpretation", name: "The Bible with and without Jesus", author: "Amy-Jill Levine, Marc Zvi Brettler", awards: "", tradition: "All" },
		{ category: "Bible Interpretation", name: "The Prophets", author: "Abraham J. Heschel", awards: "", tradition: "All" },
		{ category: "Bible, Bible Interpretation, Feminist, Jewish-Christian Relations", name: "The Jewish Annotated New Testament (2nd ed.)", author: "Amy-Jill Levine, Marc Zvi Brettler", awards: "", tradition: "Judeo-Christian" },
		{ category: "Religious Studies, Bible Criticism", name: "Inheriting Abraham: The Legacy of the Patriarch in Judaism, Christianity, and Islam", author: "Jon D. Levenson", awards: "", tradition: "All" },
		{ category: "Apologetics", name: "Why Be Jewish?", author: "David J. Wolpe", awards: "", tradition: "Progressive" },
		{ category: "Halakhah", name: "Halakhah: The Rabbinic Idea of Law", author: "Chaim N. Saiman", awards: "", tradition: "All" },
		{ category: "Halakhah", name: "Evolving Halakhah: A Progressive Approach to Traditional Jewish Law", author: "Rabbi Dr. Moshe Zemer", awards: "", tradition: "Progressive" },
		{ category: "Halakhah, Aggadah", name: "Heavenly Torah as Refracted Through the Generations", author: "Abraham J. Heschel", awards: "", tradition: "All" },
		{ category: "Ritual", name: "The Sabbath", author: "Abraham J. Heschel", awards: "", tradition: "All" },
		{ category: "Ritual", name: "Jewish Meditation", author: "Aryeh Kaplan", awards: "", tradition: "Orthodox" },
		{ category: "Ritual, Prayer", name: "To Pray As A Jew", author: "Rabbi Hayim Halevy Donin", awards: "", tradition: "Orthodox" },
		{ category: "Ritual, Halakhah, Theology, Feminist, Prayer", name: "My People's Prayer Book Series", author: "Rabbi Lawrence A. Hoffman, et al.", awards: "National Jewish Book Awards", tradition: "All" },
		{ category: "Theology", name: "The Love of God: Divine Gift, Human Gratitude, and Mutual Faithfulness in Judaism", author: "Jon D. Levenson", awards: "", tradition: "All" },
		{ category: "Philosophy, Theology", name: "Man Is Not Alone: A Philosophy of Religion", author: "Abraham J. Heschel", awards: "", tradition: "All" },
		{ category: "Philosophy, Theology", name: "God In Search of Man: A Philosophy of Judaism", author: "Abraham J. Heschel", awards: "", tradition: "All" },
		{ category: "LGBTQ+", name: "Wrestling with God & Men: Homosexuality in the Jewish Tradition", author: "Rabbi Steven Greenberg", awards: "", tradition: "Orthodox" },
		{ category: "LGBTQ+", name: "A Rainbow Thread: An Anthology of Queer Jewish Texts from the First Century to 1969", author: "Noam Sienna", awards: "2020 Reference Award (Association of Jewish Libraries) and 2020 Anthology Award (Lambda Literary Foundation)", tradition: "All" },
		{ category: "LGBTQ+", name: "Torah Queeries: Weekly Commentaries on the Hebrew Bible", author: "Gregg Drinkwater, et al.", awards: "", tradition: "All" },
		{ category: "LGBTQ+", name: "Mishkan Ga'avah: Where Pride Dwells: A Celebration of LGBTQ Jewish Life and Ritual", author: "Rabbi Denise L. Eger", awards: "", tradition: "Reform" },
		{ category: "Feminist", name: "Studies in Bible and Feminist Criticism", author: "Tikva Frymer-Kensky", awards: "", tradition: "Progressive" },
	]);
</script>
