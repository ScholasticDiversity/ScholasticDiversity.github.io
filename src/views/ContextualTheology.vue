<template>
	<v-breadcrumbs>
		<v-breadcrumbs-item title="Theology" to="/theology"></v-breadcrumbs-item>
		<v-breadcrumbs-divider></v-breadcrumbs-divider>
		<v-breadcrumbs-item title="Contextual" active></v-breadcrumbs-item>
	</v-breadcrumbs>
	<h1 class="text-h4 text-center">Contextual Theologies</h1>
	<v-divider class="mb-6"></v-divider>

	<p class="text-body-1 mb-3">Many have heard of Feminism, but how many have heard of <em>Womanism</em> or <em>Mujerismo</em> (aka. Latina Womanism)?</p>
	<p class="text-body-1 mb-3">Womanism focuses on the experiences of Black Women, in contrast to Feminism, which has been criticized as being primarily White Women's perspectives. Mujerismo is similar, but for Latina Women.</p>
	<p class="text-body-1 mb-3">While these are relevant for various fields, they are especially relevant for <em>contextual theology</em>, theology and scriptural interpretation that is contextualized to the experiences of certain people and groups.</p>
	<p class="text-body-1 mb-3">Contextual theologies also include <em>postcolonial theology</em>, which focuses on addressing colonization issues. This includes reconciling with the historical colonial imposition of a religion on a group of people, and how the religion's theology either justifies that or can denounce/alleviate it. It takes into account how religions and their developed theologies and doctrines have helped colonization and oppression.</p>
	<p class="text-body-1 mb-3">Another contextual and post-colonial theology is <em>LGBTQ+ Theology</em>. It seeks to understand how religions have oppressed and marginalized lesbians, gays, bisexuals, trans, intersexuals, and other sexual or gender minorities. There's quite a bit of overlap between Feminism and LGBTQ+ Theology, often including many scholars who study both. Marcella Althaus-Reid is one such scholar who writes on and fuses both topics. Susannah Heshel (Abraham Heschel's daughter) and Judith Plaskow also work in both topics.</p>
	<p class="text-body-1 mb-3">Much of LGBTQ+ Theology also takes inspiration from two contrasting ideas:</p>

	<ol class="ml-5">
		<li>The mainstream <em>Gay Rights Movement</em>, which uses the slogan "born this way" to point to the biological or innate sexuality of a person</li>
		<li>and <em>Queer Theory</em>, which is itself influenced by women's studies, post-structuralism, and, for much (but not all) of queer theory, the view of socially-constructed gender and sexual categories.</li>
	</ol>

	<p class="text-body-1 mb-3">Many queer theory scholars are influenced by the French post-structuralist philosopher Michael Foucault, who viewed different sexualities as a result of power dynamics and thus held that sexuality is socially constructed.</p>
	<p class="text-body-1 mb-3">Another influential individual is Jonathan Ned Katz, who wrote an article and a book both titled The Invention of Heterosexuality. In the article, he argues that the introduction of the term heterosexual was to contrast and differentiate heterosexuals from homosexual culture at the time, and that there is no distinction between homosexuals and heterosexuals (again, the view that these identities are socially constructed).</p>
	<p class="text-body-1 mb-3">Queer theory has both influenced and been criticized by those who believe sexuality is biological or innate in some sense. It has also been criticized by some feminists for undermining Feminism with its view of a socially-constructed gender. However, not all of queer theory holds to the idea of socially constructed sexuality.</p>
	<p class="text-body-1 mb-3">This brings us to the mainstream Gay Rights Movement, which believes in biological or innate sexuality - that one is "born this way". This came out of a response to oppression and the need for sexual liberation. However, Kim Q. Hall argues, in her <em>Thinking Queerly about Sex and Sexuality</em>, that the mainstream Gay Rights Movement has often advocated for liberating one group of people at the expense of those even more marginalized. An example is gay men rejecting or ignoring bisexuals or trans people.</p>
	<p class="text-body-1 mb-3">Lastly, there's contemporary <em>gay spirituality</em>, which is influenced by the "third-gendered" and those with two spirits in many Native American and indigenous traditions. They can be seen as liminal - in between - similar to other spiritual roles which are also liminal (e.g., intercessors, shamans, and healers).</p>

	<h2 class="text-h5 mb-3 mt-6">List of Contextual Theologies</h2>
	<p class="text-body-1">Here is a list of Contextual Theologies: </p>
	<ul class="mt-2 ml-5">
		<li>Feminist Theology</li>
		<li>Disability Theology</li>
		<li>Liberation Theology
			<ul class="ml-6">
				<li>Postcolonial Theology</li>
				<li>African Theology</li>
				<li>Black Liberation Theology</li>
				<li>Minjung Theology</li>
				<li>Womanist Theology</li>
				<li>Mujerista Theology</li>
				<li>LGBTQ+ Theology</li>
			</ul>
		</li>
	</ul>

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
		:headers="contextualTheologyBooks_headers"
		:items="contextualTheologyBooks"
		item-value="name"
		:search="search"
		class="elevation-1"></v-data-table>
</template>

<script lang="ts" setup>
	import Vuetify from 'vuetify';
	import { ref, readonly, DeepReadonly } from 'vue';
	import { VDataTable } from 'vuetify/labs/VDataTable';
	const name = ref('contextualtheology');
	const itemsPerPage = ref(20);
	const contextualTheologyBooks_headers: DeepReadonly<any> = readonly([
		{ title: 'Category', align: 'start', sortable: true, key: 'category', value: "category" },
		{ title: 'Title', align: 'start', sortable: true, key: 'name', value: "name" },
		{ title: 'Author', align: 'start', sortable: true, key: 'author', value: "author" },
		{ title: 'Awards', align: 'start', sortable: true, key: 'awards', value: "awards" },
		{ title: 'Tradition', align: 'start', sortable: true, key: 'tradition', value: "tradition" },
	]);
	let search = ref('');
	var contextualTheologyBooks = ref([
		{ category: "General", name: "Christology: A Global Introduction", author: "Veli-Matti Karkkainen", awards: "", tradition: "Christianity" },
		{ category: "Feminist", name: "The Jewish Annotated New Testament (2nd ed.)", author: "Amy-Jill Levine and Marc Zvi Brettler", awards: "", tradition: "Judeo-Christian" },
		{ category: "Feminist, LGBTQ+", name: "Just Love: A Framework for Christian Sexual Ethics", author: "Margaret A. Farley", awards: "Grawemeyer Award (University of Louisville)", tradition: "Christianity" },
		{ category: "African, LBGTQ+", name: "Enfleshing Freedom: body, race, and being", author: "M. Shawn Copeland", awards: "", tradition: "Christianity" },
		{ category: "Disability", name: "Vulnerable Communion: A Theology of Disability and Hospitality", author: "Thomas E. Reynolds", awards: "", tradition: "Christianity" },
		{ category: "LGBTQ+", name: "A Rainbow Thread: An Anthology of Queer Jewish Texts from the First Century to 1969", author: "Noam Sienna", awards: "2020 Reference Award (Association of Jewish Libraries) and 2020 Anthology Award (Lambda Literary Foundation)", tradition: "Judaism" },
		{ category: "LGBTQ+", name: "Wrestling with God & Men: Homosexuality in the Jewish Tradition (Updated ed.)", author: "Rabbi Steven Greenberg", awards: "2005 Koret Jewish Book Award for Philosophy and Thought", tradition: "Judaism" },
		{ category: "LGBTQ+", name: "Torah Queeries: Weekly Commentaries on the Hebrew Bible", author: "Gregg Drinkwater, et al.", awards: "", tradition: "Judaism" },
		{ category: "LGBTQ+", name: "Mishkan Ga'avah: Where Pride Dwells: A Celebration of LGBTQ Jewish Life and Ritual", author: "Rabbi Denise L. Eger", awards: "", tradition: "Judaism" },
		{ category: "LGBTQ+", name: "Together in Love and Faith", author: "Bishop Steven Croft", awards: "", tradition: "Christianity (Church of England)" },
		{ category: "LGBTQ+", name: "The Queer Bible Commentary (2nd ed.)", author: "Deryn Guest, et al.", awards: "", tradition: "Christianity" },
		{ category: "Feminist", name: "The Hidden History of Women's Ordination: Female Clergy in the Medieval West", author: "Gary Macy", awards: "", tradition: "Christianity" },
		{ category: "Feminist", name: "Studies in Bible and Feminist Criticism", author: "Tikva Frymer-Kensky", awards: "", tradition: "Judaism" },
	]);
</script>
  