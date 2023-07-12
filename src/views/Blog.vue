<template>
	<h1 class="text-h4 text-center">Blog</h1>
	<v-divider></v-divider>
	<template v-for="p in posts.filter((p) => p.title != '')" :key="p.link">
		<v-card variant="flat" :href="p.link">
			<v-card-text>
				<p class="text-body-1"><strong>{{ p.title }}</strong></p>
				<p class="text-body-1 mb-1">{{ p.date }} | <em>{{ p.category }}</em></p>
				<p class="text-body-1">{{ p.description }}&nbsp;<strong>...</strong></p>
			</v-card-text>
		</v-card>
		<v-divider></v-divider>
	</template>
	<p>Note that these links redirect to articles I have written on Post.News.</p>
</template>
  
<script lang="ts" setup>
	import router from '@/router';
	import { ref, readonly, DeepReadonly } from 'vue';
	const posts = ref([
		{ title: "Kabbalah and Religious Tourism", link: "https://post.news/@/krixano/2SThEdvX4vn7aiiUSTHiksvhSpC", date: "2023-07-12", category: "Religion", description: `I recently seen some beautiful Kabbalah artwork at my city's synagogue, and it reminded me of this. When I first heard of Madonna's whole thing with Kabbalah, I was more than disappointed. A "watered-down" look at religion is when people learn the very surface level of religion without dedicating their time into knowing its full context, distinguishing elements, and diversity. When people instantly think of Madonna and celebrity cults when they hear Kabbalah, that is a stereotype that has diminished Kabbalah significantly.` },
		{ title: "Relation and Radical Amazement vs. Love", link: "https://post.news/@/krixano/2RaVssMgYqDnNcGGCUf2GF7N17a", date: "2023-06-23", category: "Philosophy, Religion", description: `The mystical often speaks through human emotion. Albert Einstein in my other post below is really talking about a relational mystical experience where you feel connected to everything else, removing this "optical delusion" of feeling like you are "separated from the rest".` },
		{ title: "Life with Religion vs. Religious Life", link: "https://post.news/@/krixano/2RXwsj38l6gg374aW67CokNRez4", date: "2023-06-22", category: "Religion", description: `Most religions do not differentiate between secular life and religious life. That distinction comes out of modern Christianity. Rather, most religions see all moments of life as religious moments: private and public, domestic and communal, work and leisure.` },
		{ title: "Religion Is Not Inherently Organized", link: "https://post.news/@/krixano/2RWaHJlc8H48Pqc77WBdbXaC6I4", date: "2023-06-21", category: "Religion", description: `Religions are not equivalent with religious organizations, structures, or doctrines. In fact, most religions are not organized or hierarchical, and this includes most folk and indigenous religions, as well as congregational Christian denominations, non-denominational Christianity, and much of Judaism ` },
		{ title: "Atheist Fundamentalism", link: "https://post.news/@/krixano/2RQO4ent7TvLFBMaPhCcMPnHRv5", date: "2023-06-19", category: "Philosophy, Religion", description: `There is a clear trend in recent times of a developing new subsect of Atheism which I classify as "Atheist Fundamentalism", but is also often called Militant Atheism, or "New Atheism". It certainly stems out of an overcorrection of the abuse of certain religions by politics and people in positions of power. This overcorrection leads to a new form of dogmatic fundamentalism that distinguishes itself from other Atheists` },
		{ title: "Diversity within Christianity", link: "https://post.news/@/krixano/2RNSvHfr4sUJBmJEuwqLnVk0vm7", date: "2023-06-18", category: "Religion, Christianity, Series", description: `There's a common misconception of thinking all Christian denominations are generally the same in beliefs and structure. This couldn't be farther from the truth. Protestantism is very diverse. Everything from the trinity to the Mosaic Law to polity structure, transubstantiation, Biblical infallibility, and LGBTQ+ people are all viewed differently in each denomination and within each denomination.` },
		{ title: "Contextual Theologies", link: "https://post.news/@/krixano/2QpSGAQCHW72wc9MeRc0vl2c2jY", date: "2023-06-06", category: "Religion, LGBTQ+, Feminism, Womanism", description: `Many have heard of Feminism, but how many have heard of Womanism or Mujerismo (aka. Latina Womanism)?` },
		{ title: "Power Vacuums and Contemporary Theories", link: "https://post.news/@/krixano/2PtG7gRs6bBXs7Vu3r3LGiZe7bL", date: "2023-05-16", category: "Philosophy, Nationalism, Internet, Education, Diversity", description: `My history professor taught us this very important thing: When a lot of fighting happens, that lets a more extreme group/person rise up. This rhetoric against "wokeism" or "Woke ideology" didn't start with the GOP or with DeSantis.` },
		{ title: "In Support of Trans People", link: "https://post.news/@/krixano/2NqTecscN2Evnanq5DUZuUYj6MH", date: "2023-04-01", category: "Religion, Trans", description: `God made ALL HUMANS in God's infinite wisdom, including those society does not view as the typical man or woman (or third gender in some ancient societies).` },
		{ title: "Religious Exclusion in the LGBTQ+ Community", link: "https://post.news/@/krixano/2JfxeVBiVl0oUJN2nDyql9kaS2O", date: "2022-12-31", category: "Religion, LGBTQ+", description: `LGBTQ+ individuals already have to go through so much exclusion and feelings of needing to remain closeted in various places. So, what's very disappointing is this exclusion from some members of the LGBTQ+ community not understanding those of us who have a particular faith or are holding onto a Church we grew up in.` },
		{ title: "", link: "", date: "", category: "", description: `` },
	]);
  </script>
  
<style lang="scss">
	@use 'vuetify/_settings';
	v-card:hover {
	cursor:pointer;
	}
</style>  