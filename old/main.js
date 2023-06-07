const { createApp } = Vue
const { createVuetify } = Vuetify

const vuetify = createVuetify()

const app = createApp({
	data() {
		return {
			test: "Test thing",
			itemsPerPage: 20,
			contextualTheologyBooks_headers: [
				{ title: 'Category', align: 'start', sortable: true, key: 'category' },
				{ title: 'Title', align: 'start', sortable: true, key: 'name' },
				{ title: 'Author', align: 'start', sortable: true, key: 'author' },
				{ title: 'Awards', align: 'start', sortable: true, key: 'awards' },
			],
			contextualTheologyBooks: [
				{ category: "General", name: "Christology: A Global Introduction", author: "Veli-Matti Karkkainen", awards: "", },
				{ category: "Feminist", name: "The Jewish Annotated New Testament (2nd ed.)", author: "Amy-Jill Levine and Marc Zvi Brettler", awards: "", },
				{ category: "Feminist", name: "Just Love: A Framework for Christian Sexual Ethics", author: "Margaret A. Farley", awards: "Grawemeyer Award", },
			],
		}
	},
	template: `
	<v-layout>
		<v-app-bar>
			<template v-slot:prepend>
				<v-app-bar-nav-icon></v-app-bar-nav-icon>
			</template>
			<v-app-bar-title>Learning Resources</v-app-bar-title>
		</v-app-bar>

		<v-navigation-drawer>
		<v-list>
			<v-list-item title="Home" value="home"></v-list-item>
			<v-divider></v-divider>
			<v-list-subheader>Categories</v-list-subheader>
			<v-list-item title="Mathematics" value="mathematics"></v-list-item>
			<v-list-item title="Computer Science" value="computerscience"></v-list-item>
			<v-list-item title="Anti-semitism" value="antisemitism"></v-list-item>
			<v-list-item title="Race and Racism" value="racism"></v-list-item>
			<v-list-item title="Women" value="women"></v-list-item>
			<v-list-item title="LGBTQIA+" value="lgbtqia"></v-list-item>
			<v-list-item title="Linguistics" value="linguistics"></v-list-item>
			<v-list-item title="Literature" value="literature"></v-list-item>
			<v-list-group value="Religious Literacy">
				<template v-slot:activator="{ props }">
					<v-list-item
					v-bind="props"
					title="Religious Literacy"
					></v-list-item>
				</template>
				<v-list-item title="Hinduism" value="hinduism"></v-list-item>
				<v-list-item title="Sikhism" value="sikhism"></v-list-item>
				<v-list-item title="Conficianism" value="buddhism"></v-list-item>
				<v-list-item title="Daoism" value="buddhism"></v-list-item>
				<v-list-item title="Shinto" value="shinto"></v-list-item>
				<v-list-item title="Ancient Near Eastern Paganism" value="ancientneareastern"></v-list-item>
				<v-list-item title="Zoroastrianism" value="zoroastrianism"></v-list-item>
				<v-list-item title="Judaism" value="judaism"></v-list-item>
				<v-list-item title="Samaritans" value="samaritans"></v-list-item>
				<v-list-item title="Buddhism" value="buddhism"></v-list-item>
				<v-list-item title="Jainism" value="buddhism"></v-list-item>
				<v-list-item title="Greek (Mycenaean) Paganism" value="greekpaganism"></v-list-item>
				<v-list-item title="Greco-Roman Mystery Religions" value="mysteryreligions"></v-list-item>
				<v-list-item title="Christianity" value="christianity"></v-list-item>
				<v-list-item title="Gnosticism" value="gnosticism"></v-list-item>
				<v-list-item title="Islam" value="islam"></v-list-item>
				<v-list-item title="Baha'i" value="bahai"></v-list-item>
				<v-list-item title="Zoroastrianism" value="zoroastrianism"></v-list-item>
				<v-list-item title="Wicca" value="wicca"></v-list-item>
			</v-list-group>
			<v-list-group value="Scriptures">
				<template v-slot:activator="{ props }">
					<v-list-item
					v-bind="props"
					title="Scriptures"
					></v-list-item>
				</template>
				<v-list-item title="Vedas" value="vedas"></v-list-item>
				<v-list-item title="Tanakh (Hebrew Bible)" value="tanakh"></v-list-item>
				<v-list-item title="Old Testament Apocrypha/Deuterocanon" value="tanakh"></v-list-item>
				<v-list-item title="New Testament" value="newtestament"></v-list-item>
				<v-list-item title="Talmud" value="talmud"></v-list-item>
				<v-list-item title="Qur'an" value="quran"></v-list-item>
				<v-list-item title="The Book of Mormon" value="bookofmormon"></v-list-item>
				<v-list-item title="Gnostic Gospels" value="gnosticgospels"></v-list-item>
			</v-list-group>
			<v-list-group value="Philosophy">
				<template v-slot:activator="{ props }">
					<v-list-item
					v-bind="props"
					title="Philosophy"
					></v-list-item>
				</template>
				<v-list-item title="Pre-Socratic" value="greekphilosophy"></v-list-item>
				<v-list-item title="Plato" value="platophilosophy"></v-list-item> <!-- Middle Platonism (Philo), separate from Neoplatonism -->
				<v-list-item title="Aristotle" value="aritotlephilosophy"></v-list-item> <!-- Organon (6 logic works), and others discovered later (Medieval Aristotelianism that influences Maimonides, Thomas Aquinas, etc.) -->
				<v-list-item title="Stoicism" value="stoicismphilosophy"></v-list-item>
				<v-list-item title="Neoplatonism" value="platophilosophy"></v-list-item>
				<v-list-item title="Medieval Jewish" value="jewishphilosophy"></v-list-item>
				<v-list-item title="Analytic" value="analyticphilosophy"></v-list-item>
				<v-list-item title="Rationalism" value="jewishphilosophy"></v-list-item>
				<v-list-item title="Empiricism" value="jewishphilosophy"></v-list-item>
				<v-list-item title="Haskalah (Jewish Enlightenment)" value="jewishphilosophy"></v-list-item>
				<v-list-item title="German Idealism" value="germanidealismphilosophy"></v-list-item>
				<v-list-item title="Continental" value="continentalphilosophy"></v-list-item>
				<v-list-item title="Marxism" value="marxismphilosophy"></v-list-item>
				<v-list-item title="Existentialism" value="existentialismphilosophy"></v-list-item>
				<v-list-item title="Positivism" value="jewishphilosophy"></v-list-item>
				<v-list-item title="Modernism" value="modernism"></v-list-item>
				<v-list-item title="Frankfurt School" value="frankfurtschool"></v-list-item>
				<v-list-item title="Structuralism" value="structuralism"></v-list-item>
				<v-list-item title="Postmodernism" value="postmodernism"></v-list-item>
				<v-list-item title="Poststructuralism" value="poststructuralism"></v-list-item>
				<v-list-item title="Contemporary" value="contemporaryphilosophy"></v-list-item>
			</v-list-group>
			<v-list-group value="Theology">
				<template v-slot:activator="{ props }">
					<v-list-item
					v-bind="props"
					title="Theology"
					></v-list-item>
				</template>
				<v-list-item title="Jewish Theology" value="jewishtheology"></v-list-item>
				<v-list-item title="Christian Theology" value="christiantheology"></v-list-item>
				<v-list-item title="Islamic Theology" value="islamictheology"></v-list-item>
				<v-list-item title="Contextual Theologies" value="contextualtheology"></v-list-item>
			</v-list-group>
		</v-list>
		</v-navigation-drawer>

		<v-main style="min-height: 300px;">
			<!--<div class="pa-6" style="max-width: 900px; margin: auto;">
				<h1 class="text-h4 text-center">Islam</h1>
				<v-divider class="mb-6"></v-divider>
				<h2 class="text-h5 mb-3">Five Pillars</h2>
				<p class="text-body-1">The Five Pillars of Islam are: </p>
				<ul class="mt-2">
					<li>Shahadah (Creed)</li>
					<li>Prayer</li>
					<li>Almsgiving</li>
					<li>Hajj (Pilgrimage)</li>
					<li>Fasting</li>
				</ul>
			</div>-->
			<div class="pa-6 pb-12" style="max-width: 900px; margin: auto;">
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
				<v-data-table
					v-model:items-per-page="itemsPerPage"
					:headers="contextualTheologyBooks_headers"
					:items="contextualTheologyBooks"
					item-value="name"
					class="elevation-1"></v-data-table>
				<h3 class="text-h6 mb-3 mt-6">General</h3>
				<ul class="mt-2 ml-5">
					<li><em>Christology: A Global Introduction</em> - Veli-Matti Karkkainen</li>
				</ul>
				<h3 class="text-h6 mb-3 mt-6">Feminist Theology</h3>
				<ul class="mt-2 ml-5">
					<li><em>The Jewish Annotated New Testament (2nd ed.)</em> - Amy-Jill Levine and Marc Zvi Brettler</li>
				</ul>
				<h3 class="text-h6 mb-3 mt-6">LGBTQ+ Theology</h3>
				<ul class="mt-2 ml-5">
					<li><em>Just Love: A Framework for Christian Sexual Ethics</em> - Margaret A. Farley</li>
				</ul>
			</div>
		</v-main>
	</v-layout>`
})
app.use(vuetify).mount('#app')
