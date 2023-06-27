<template>
	<v-breadcrumbs>
		<v-breadcrumbs-item title="Religious Literacy" :to="{ name: 'religiousliteracy' }"></v-breadcrumbs-item>
		<v-breadcrumbs-divider></v-breadcrumbs-divider>
		<v-breadcrumbs-item title="Christianity" active></v-breadcrumbs-item>
	</v-breadcrumbs>
	<h1 class="text-h4 text-center">Christianity</h1>
	<v-divider class="mb-6"></v-divider>
	<p class="text-body-1 mb-3"><strong>Christianity</strong> is a monotheistic religion that develops out of Hellenistic Judaism and Greco-Roman religion during the first century CE. It is based on interpretations of the teachings of Jesus as expressed in the writings of Paul, the four Gospels, and other writings of the New Testament.</p>
	<!--<p class="text-body-1 mb-3">In Babylonia, they interact with Zoroastrianism, which was monotheistic at the time. During this time, many of their already-developed stories and texts are edited and revised in light of the fall of Judah and the start of the Diaspora in order to explain these events through a new perspective on the past. They do this by compiling and editing (redacting) these stories, which become the Torah and Deuteronomistic History (Genesis to II Kings, excluding Ruth), in a way that shows the cycle of sin and repentance of the people. This cycle of sin and repentance explained Theologically the reasons for the destruction of the Temple and the Diaspora at the time. This is also when we see a clear shift, particularly shown in the Prophets, away from the Temple and Sacrificial practices, especially now that the Temple is destroyed and unusable.</p>
	<p class="text-body-1 mb-3">One other important development during this time was the shift from a God that is limited to a place, and might have been thought to be inferior to the god(s) of the conquerors (as was usual for the time), to a God that <em>uses</em> the conquerors to punish the people. This is what allowed the people to continue their belief and practice when usually they might have assimilated to the conqueror's religion, and is what furthered the development of monotheism and an all-powerful universal God of <em>everyone</em> within Judaism.</p>
	<p class="text-body-1 mb-3"> In 539-538 BCE, when Cyrus became King of Babylonia (after the Persian Empire in 559 BCE), he declared a position of religious toleration, and so allowed Jews (along with other religious groups within the Empire) to return to Israel and rebuild the Temple in Jerusalem. This becomes the Second Temple. Later, when Chronicles and Ezra-Nehemiah are written, this is portrayed as a fulfilment of prophecy (particularly of Jeremiah) when God has forgiven the people and allowed them to return. Ezra 1:4 suggests that some Jews stayed behind in Babylonia/Persia.</p>-->
	<p class="text-body-1 mb-3">By the time of the first century CE, Judaism of the masses becomes widely diverse, and we start seeing four distinct sects of Judaism, separate from the diverse masses: the Sadducees, the Pharisees, the Zealots, and the Essenes. The Saducees are the Temples Priests. They only hold the Torah as sacred. The Pharisees are the teachers of the masses, and they hold the Torah, the Prophets, and much of the Writings as sacred. St. Paul was a Pharisee. The Zealots are those who desire to overtake Israel as a sovereign state by fighting back against the Romans. And finally, the Essenes are a sect cut off from society. They also hold the Torah, Prophets, and Writings as sacred, and they opposed the Sadducees.</p>
	<p class="text-body-1 mb-3">While we do not know which sect Jesus belonged to, and he may not have been part of any sect, we do know that he shares a lot of similarities with the Pharisees, which is what led him to debate more frequently with them. The Pharisees and Jesus both held the Torah, Prophets, and Writings as sacred, in contrast to the Sadducees, who did not. The Phraisees and Jesus, therefore, also held the beliefs of angels, heaven, and Satan which are developed within and from the Prophets and Writings of the Tanakh (Old Testament).</p>

	<h2 class="text-h5 mb-3 mt-6">Book List</h2>
	<p class="text-body-1 mb-3">Note: To distinguish between trinitarian traditions and non-trinitarian traditions, the former will be classified as <strong>Trinitarian</strong>. <strong>Catholic</strong> uppercase refers to the Catholic Church as distinct from Protestant, Orthodox, and Anglican. <strong>All</strong> refers to both trinitarian and non-trinitarian traditions.</p>
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
		{ category: "General, Bible Interpretation", name: "A Brief Introduction to the New Testament", author: "Bard D. Ehrman", awards: "", tradition: "All" },
		{ category: "General, History, Theology", name: "Documents of the Christian Church", author: "Henry Bettenson, Chris Maunder", awards: "", tradition: "All" },
		{ category: "General, Theology, Christology", name: "Christology: A Global Introduction", author: "Veli-Matti Karkkainen", awards: "", tradition: "All" },
		{ category: "Bible Interpretation", name: "The Bible with and without Jesus", author: "Amy-Jill Levine, Marc Zvi Brettler", awards: "", tradition: "All" },
		{ category: "Theology", name: "Confessions", author: "St. Augustine", awards: "", tradition: "Trinitarian" },
		{ category: "General, History, Theology", name: "The History of Christianity (2 vols.)", author: "Justo L. Gonzalez", awards: "", tradition: "All" },
		{ category: "Ritual, Prayer", name: "The Way of the Heart: Connecting with God Through Prayer, Wisdom, and Silence", author: "Henri J. M. Nouwen", awards: "", tradition: "All" },
		{ category: "Ritual", name: "A Spirituality of Living", author: "Henri J. M. Nouwen", awards: "", tradition: "All" },
		{ category: "Ritual, Theology", name: "The Sacraments", author: "Kevin W. Irwin", awards: "", tradition: "Catholic" },
		{ category: "Ritual, Theology, Bible Interpretation", name: "Charity", author: "Gary A. Anderson", awards: "", tradition: "All" },
		{ category: "Theology", name: "The Cost of Discipleship", author: "Deitrich Bonhoeffer", awards: "", tradition: "Protestant" },
		{ category: "Theology", name: "New Seeds of Contemplation", author: "Thomas Merton", awards: "", tradition: "All" },
		{ category: "Theology", name: "The Reckless Way of Love: Notes on Following Jesus", author: "Dorothy Day", awards: "", tradition: "All" },
		{ category: "Morality", name: "Glittering Vices: A New Look at the Seven Deadly Sins and Their Remedies", author: "Rebecca Konyndyk DeYoung", awards: "", tradition: "All" },
		{ category: "Feminist", name: "The Hidden History of Women's Ordination: Female Clergy in the Medieval West", author: "Gary Macy", awards: "", tradition: "All" },
		{ category: "Bible, Bible Interpretation, Feminist, Jewish-Christian Relations", name: "The Jewish Annotated New Testament (2nd ed.)", author: "Amy-Jill Levine and Marc Zvi Brettler", awards: "", tradition: "All" },
		{ category: "Feminist, LGBTQ+", name: "Just Love: A Framework for Christian Sexual Ethics", author: "Margaret A. Farley", awards: "Grawemeyer Award (University of Louisville)", tradition: "Protestant" },
		{ category: "African, LBGTQ+", name: "Enfleshing Freedom: body, race, and being", author: "M. Shawn Copeland", awards: "", tradition: "All" },
		{ category: "Disability", name: "Vulnerable Communion: A Theology of Disability and Hospitality", author: "Thomas E. Reynolds", awards: "", tradition: "All" },
		{ category: "LGBTQ+", name: "Together in Love and Faith: Personal Reflections and Next Steps for the Church", author: "Bishop Steven Croft", awards: "", tradition: "Church of England" },
		{ category: "LGBTQ+, Bible Interpretation", name: "The Queer Bible Commentary (2nd ed.)", author: "Deryn Guest, et al.", awards: "", tradition: "All" },
		{ category: "History, Jewish-Christian Relations", name: "The Misunderstood Jew: The Church and the Scandal of the Jewish Jesus", author: "Amy-Jill Levine", awards: "", tradition: "All" },
		{ category: "", name: "", author: "", awards: "", tradition: "All" },

	]);
</script>
