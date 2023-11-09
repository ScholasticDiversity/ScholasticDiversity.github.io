<template>
    <v-breadcrumbs>
		<v-breadcrumbs-item title="Trivia" :to="{ name: 'trivia' }"></v-breadcrumbs-item>
		<v-breadcrumbs-divider></v-breadcrumbs-divider>
		<v-breadcrumbs-item title="Bible Test" active></v-breadcrumbs-item>
	</v-breadcrumbs>
	<h1 class="text-h4 text-center">Bible Test</h1>
	<v-divider class="mb-6"></v-divider>
	<p class="text-body-1 mb-3"></p>
	
    <div>
        Test your knowledge of the Christian Bible by taking this 20-question test below:
    </div>
    <v-divider class="mb-6 mt-6"></v-divider>
    
    <template v-for="q, i in questions">
        <p><span v-text="(i + 1) + '. '"></span><span v-text="q.q"></span></p>
        <v-radio-group v-model="userChoices[i].choice" :disabled="userChoices[i].choice != null">
            <v-radio :label="choice" :value="choice" v-for="choice in q.choices" class="mt-2"></v-radio>
        </v-radio-group>
        <p class="mb-6" v-if="userChoices[i].choice != null && q.explanation !== ''"><strong><span v-bind:class="userChoices[i].choice === q.choices[q.correctChoice] ? 'text-green-darken-3' : 'text-red-darken-3'" v-text="userChoices[i].choice === q.choices[q.correctChoice] ? 'Correct.' : 'Incorrect.'"></span> Expanation:</strong> <span v-html="q.explanation" class="text-grey-lighten-1"></span></p>
        <v-divider class="mb-3"></v-divider>
    </template>

    <div>
        <p><strong>Amount Correct:</strong> {{ correctCount }} / {{ questions.length }}</p>
    </div>
</template>


<script lang="ts" setup>
	import Vuetify from 'vuetify';
	import { VDataTable } from 'vuetify/labs/VDataTable';
	import { ref, readonly, DeepReadonly, computed } from 'vue';

    var questions = ref([
        { q: "Does the Bible explicitly contain the doctrine of the Trinity?", choices: [ "Yes", "No" ], correctChoice: 1, explanation: "The Bible does not explicitly contain the doctrine of the Trinity. 1 John 5:7–8 is a verse added much later to the Bible by Christians, in the 4th century, that does list the whole trinity together (father, Son or Word, and Holy Spirit), but which does not appear in most early manuscripts of the New Testament. Otherwise, the Father and God's Spirit (which is sometimes translated as the Holy Spirit) are apparent in the Old Testament (Tanakh) and the New Testament, and of course the Son is apparent in the New Testament, but the Bible never explicitly mentions their full trinitarian relationship as expressed in the Nicaean Creed.<br>It should be noted that the doctrine of the Trinity, however, was developed in response to questions about how the Son relates to God, how they are both divine, and how to maintain the concept of monotheism, and therefore can be seen as a personal and theological reflection on the Scripture. To put it plainly, it was not made up out of thin air and was the result of the personal and theological reflections by the Christian community as a whole." },
        { q: "What's the story of the last two chapters of Jonah?", choices: [ 
                "Jonah is swallowed by a whale, pleads to God, and is saved by God.",
                "Jonah saves the town of Jericho from destruction.",
                "Jonah tells Nineveh that God will destroy the city, but the city does not repent and the city is destroyed.",
                "Jonah tells Nineveh that God will destroy the city, and the city repents. God destroys the city anyways.",
                "Jonah tells Nineveh that God will destroy the city, and the city repents. God does not destroy the city, but Jonah is not happy. God rebukes Jonah.", // Correct
                "Jonah tells Nineveh that God will destroy the city, and the city repents. God does not destroy the city and Jonah is happy."
            ], correctChoice: 4, explanation: "The last two chapters of the book of Jonah are often neglected, but which have a powerful story and Theology that influences both Judaism and the New Testament. Jonah tells Nineveh that God will destroy the city, and the city repents. God does not destroy the city, but Jonah is not happy. God rebukes Jonah. The story shows that God cares about all humanity, not just a subset of humanity, and that humans can always repent and change course from their ways. God reaches and cares for all humanity. For these reasons, Jonah is read on Yom Kippur, the Day of Repentance, in Jewish tradition. Jonah, as a prophet that goes to the Gentiles in Nineveh, is seen as a predecessor to Jesus in Christian tradition." },
        { q: "What was happening to humans right before the flood? What was the reason why God started the flood? Select the answer with the largest number of story details.", choices: [
                "Human sin and lawlessness was spreading",
                "The earth became corrupted",
                "The earth became corrupted by all flesh, divine beings mated with human women to create the Nephilim, lawlessness, and human wickedness", // Correct
                "God no longer liked humans",
                "The earth became corrupted by the Nephilim, lawlessness spread, and humans became wicked",
            ], correctChoice: 2, explanation: "The earth became corrupted by all flesh, divine beings mated with human women to create the Nephilim, lawlessness, and human wickedness." },
        //{ q: "How does the flood parallel the story of Sodom and Gomorrah?", choices: [""], correctChoice: 0, explanation: "" },
        { q: "What is God's interaction with Abraham directly before the story of Sodom and Gomorrah?", choices: [
                "God tells Abraham of his plans to destroy Sodom and Gomorrah because of the city's sin and Homosexuality. Abraham does not object.",
                "God visits Abraham and Sarah but does not speak of his plans to destroy Sodom and Gomorrah.",
                "God tells Abraham of his plans to destroy Sodom and Gomorrah because of the city's sin and Homosexuality. Abraham questions God about the innocent. God does not listen to Abraham.",
                "God tells Abraham of his plans to destroy Sodom and Gomorrah because of the city's sin. Abraham questions God about the innocent. God promises to save the innocent within the city.", // Correct
            ], correctChoice: 3, explanation: "God tells Abraham of his plans to destroy Sodom and Gomorrah because of the city's sin. Abraham questions God about the innocent. God promises to save the innocent within the city." },
        { q: "What is the overall story of Job, how does Job talk about and to God during most of the book, and near the end, what ends up happening to Job?", choices: [
            "God kills Job's daughters and cattle, and gives Job boils. During most of the book, Job curses God to his friends. God confronts Job, expressing divine authority and the complex nature of reality. Job repents and God gives Job new daughters and cattle.",
            "Satan kills Job's daughters and cattle, and gives Job boils, with permission from God. During most of the book, Job defends God to his friends. God confronts the friends, expressing divine authority over everything. The friends repent. By the end, God gives Job new daughters and cattle for his faithfulness.",
            "Satan kills Job's daughters and cattle, and gives Job boils, with permission from God. During most of the book, Job questions God's justice to his friends. God confronts Job, expressing divine authority and the complex nature of reality. God then confronts the friends, telling them that Job was more accurate than they were. Job relents and God gives Job new daughters and cattle for his faithfulness.", // Correct
            "Satan kills Job's daughters and cattle, and gives Job boils. During most of the book, the friends defend God to Job. God confronts Job, expressing divine authority over everything, and says Job's friends are right. Job repents and God gives Job new daughters and cattle."
            ], correctChoice: 2, explanation: "Satan kills Job's daughters and cattle, and gives Job boils, with permission from God. During most of the book, Job questions God's justice to his friends. God confronts Job, expressing divine authority and the complex nature of reality. God then confronts the friends, telling them that Job was more accurate than they were. Job relents and God gives Job new daughters and cattle for his faithfulness." },
        { q: "What are the overall themes of the book of Job? Be as specific as possible.", choices: [
                "Divine authority, Bad things happen to good people, the complicated nature of reality, and divine experience vs. human experience",
                "Bad things happen to good people and the complicated nature of reality",
                "Absolute trust in God, Being humble, and God gives and God takes away",
                "Divine authority, Good things always come to those who have faith, the complicated nature of reality, and divine experience vs. human experience",
            ], correctChoice: 0, explanation: "Divine authority, Bad things happen to good people, the complicated nature of reality, and divine experience vs. human experience. While Job does end up getting a happy ending, this is not a major focus for the book. Rather, the book is arguing against 'Good things always come to those who have faith' by showing that faithful people can experience hardship, a similar sentiment expressed by both Job and God against Job's friends. Most of the book is dedicated to Job questioning God's sense of Justice and God's view of the human experience, which adds to the theme of 'Bad things happen to good people'. While the phrase 'God gives and God takes away' does come from the book of Job in Chapter 1, the book taken as a whole develops a more complex and profound picture that cannot be reduced to 'and God takes away'. Finally, the book is actively disputing the concept of 'Absolute trust in God' by portraying Job as questioning God's justice, and yet ending on God rebuking the friends for suggesting that bad things happening to Job must have meant Job warranted them by sinning. Job stays blameless even throughout his questioning of God's Justice." },
        { q: "What are the four promises God made to Abraham?", choices: [
                "people, land, blessing, wealth",
                "people, wealth, land, nation",
                "messiah, land, blessing, nation",
                "messiah, act as blessing to others, people, land",
                "act as blessing to others, people, land, blessing to descendants",
            ], correctChoice: 4, explanation: "The four promises were: act as blessing to others, people, land, and blessing to descendants." },
        //{ q: "Who was David, where did he come from, and how did he become King?", choices: [""], correctChoice: 0, explanation: "" },
        { q: "How did the Ark of the Covenant behave around King David?", choices: [
                "It followed him",
                "It avoided him",
                "It was moved around by the whims of people",
            ], correctChoice: 1, explanation: "The Ark of the Covenant acts as a sort of character in the King David cycle by avoiding King David. This is an often unnoticed part of the story that signifies that there may be something wrong with King David for much of the story. It is often too easy to idealize King David and not recognize his many faults in his story. Rather, his faults add depth to the story and the nuance that Kings are fallible humans and that fallible humans can still be valued and used by God." },
        { q: "How many stories or potential stories of rape or threatened rape are in the Bible?", choices: ["Zero", "One", "Three", "Four", "Six", "Seven"], correctChoice: 3, explanation: "There are 4 total. Three stories are explicitly about rape: The townspeople of Sodom and Lot's daughters, both in Genesis 19, and the story of Dinah in Genesis 34:1-31, which parallels the story of Sodom and Gomorrah. The fourth is the story of Noah's Drunkenness in Genesis 9:18–28, which could potentially be referencing rape with the words 'saw the nakedness of his father', however the text is a bit vague." },
        { q: "What are the views of the relationship between faith and works in the whole New Testament? Are there books that disagree with each other on this topic?", choices: [
                "There are two views expressed that can be said to be related or exactly the same, depending on one's interpretation: One is justified by faith alone but good deeds come out of one's faith, and one is justified by faith and works of good deeds but not strict adherence to the Mosaic Law",
                "There's only one view: one is justified by faith alone. The New Testament is consistent with this view.",
                "There are three views expressed: One is justified by faith alone, one is justified by faith and works, and one is justified by neither faith nor works",
                "There are two views expressed: One is justified by faith alone, and one is justified by works",
            ], correctChoice: 0, explanation: "There are two views expressed that can be said to be related or exactly the same, depending on one's interpretation: One is justified by faith alone but good deeds come out of one's faith, and one is justified by faith and works of good deeds but not strict adherence to the Mosaic Law" },
        { q: "Who was the Rabbi in the book of Acts that defended the early Christians?", choices: [
                "Trick Question! There was no Rabbi.",
                "Rabbi Gamaliel",
                "Jesus",
                "Rabbi Elisha ben Abuyah",
                "Rabbi Hillel",
            ], correctChoice: 1, explanation: "Rabbi Gamaliel, a Pharisee, and teacher of Paul according to Acts 22:3." },
        { q: "How many Jesus birth stories are in the Gospels and which books have them? Are they different?", choices: ["Three; Matthew, Luke, and John; Same", "Two; Matthew and Luke; Different", "Two; Matthew and Luke; Same", "Four; Matthew, Mark, Luke, and John; Same"], correctChoice: 1, explanation: "There are two different Jesus birth stories in Matthew and Luke. Most people conflate the two and tell the story with elements from both books, but this often misses the goals of each respective author and what they are each trying to say." },
        { q: "What story in the Gospels parallels the book of Jonah?", choices: ["Jesus Calms the Storm (Luke 8:22–25; Matthew 8:23–27; Mark 4:36–41; John 6:16–21)", "The Roman Centurion (Matthew 8:8; Luke 7:2)", "Jesus Feeds the Five Thousand (Matthew 14:13-21; Mark 6:32–44; Luke 9:10–17)"], correctChoice: 0, explanation: "The story of Jesus Calming the Storm (Luke 8:22–25; Matthew 8:23–27; Mark 4:36–41; John 6:16–21) parallels the first chapter of Jonah where Jonah is on the boat and asks to be thrown off so that the storm would die down." },
        { q: "How are Kings viewed in the books 1 Samuel to II Kings?", choices: ["Pro-King", "Anti-King", "Both"], correctChoice: 2, explanation: "Both. When humans demand that a King be given to them in 1 Samuel 8, this is viewed as a rejection of God. God decides to give the people a King, but God also warns the people of the harm and oppresive nature of Kings. The books of 1 Samuel to II Kings have a mix of pro-David and anti-David material." },
        { q: "What are the three groups of Jewish sects that the Gospels focus on (aside from the general masses)?", choices: ["Sadducees, Pharisees, and Zealots", "There were no sects. Just 'the Jews'", "The leaders, Pharisees, and the Scribes"], correctChoice: 0, explanation: "The Sadducees were the temple leaders, the Pharisees were the teachers of the masses and the predecessors to the Rabbinic period, and the Zealots (or 'Fourth Philosophy') were those who wanted to fight against Rome at all costs. The Sadducees held only the Torah as Scripture, whereas the Pharisees held the Torah, Prophets, and Writings as Scripture; this accounts for the wide differences between the two sects. Thus, Jesus is more like the Pharisees than the Sadducees, which explains why he interacts with and debates the Pharisees the most. The book of John largely conflates these different sects and refers to 'the Jews' as if all of the Jewish people thought the same, and as if to distinguish the early Christians from 'the Jews'. However, all of the early Christians, including Jesus, were Jews, and so early Christianity started out as another sect of Judaism. The debates between the early Christians, Jesus, and <em>other</em> Jews should, therefore, be contextualized as debates <strong>within</strong> a Judaism of diverse opinions and beliefs." },
        { q: "Which Jewish sect does the Gospels not mention but which existed during Jesus' time period?", choices: ["Heretics", "Essenes", "Scribes"], correctChoice: 1, explanation: "The Essenes were the sect that lived in isolation at Qumran and that wrote the Dead Sea Scrolls and other Qumran scrolls. They opposed the corruption of the Temple of the Sadducees, and were often more strict than the Pharisees in terms of religious practice." },
        { q: "Did Jesus wear fringes, much like some Jews do today?", choices: ["Yes", "No"], correctChoice: 0, explanation: "Yes. Jesus wore fringes on his garment. They are the fringes that the woman with a 'discharge of blood' touched in Matthew 9:20-22, Mark 5:25-34, and Luke 8:43-48. The fringes that some Jews wear today are an old Jewish practice that is based on passages from the Tanakh (Old Testament)." },
        { q: "How many sets of tablets for the covenant (or 10 commandments) were there in the first 4 books of the Bible? What happens to the tablets in the book of Exodus, and why?", choices: ["two; the first set was smashed in anger by Moses when he heard of his people worshiping the Golden Calf. A second set is created, re-establishing the covenant between God and the people.", "one; they are written by God", "two; the first set was stolen, so another set was created", "one; they become lost"], correctChoice: 0, explanation: "There were two sets of tablets. The first set was smashed in anger by Moses when he heard of his people worshiping the Golden Calf. A second set is created, re-establishing the covenant between God and the people." },
        { q: "Which book of the Bible never mentions God, and which book contains only one potential reference to God?", choices: ["Ecclesiastes; Leviticus", "Esther; Song of Songs", "Esther; Ecclesiastes", "Song of Songs; Ruth", "Song of Songs; II Chronicles"], correctChoice: 1, explanation: "Esther contains no mention of God, but does show depictions of Jewish beliefs and rituals. Song of Songs has a word that could reference God, but it's a bit ambiguous, and there are no other mentions of God in that book." },
        { q: "What is the purpose of a prophet in the Old Testament (Tanakh)?", choices: ["To tell the future", "To do miracles", "To act as a mediator between God and humans", "To tell the people the will of God and to counsel leadership"], correctChoice: 3, explanation: "To tell the people the will of God and to counsel leadership. Telling the future was not an attribute of a prophet. Rather, a prophet might get visions from God or be told of God's plans, and they were meant to counsel leadership based on this or, as with the literary prophets, speak to the people what might happen if they don't repent." },
    ])

    var userChoices = ref([
        { choice: null },
        { choice: null },
        { choice: null },
        { choice: null },
        { choice: null },
        { choice: null },
        { choice: null },
        { choice: null },
        { choice: null },
        { choice: null },
        { choice: null },
        { choice: null },
        { choice: null },
        { choice: null },
        { choice: null },
        { choice: null },
        { choice: null },
        { choice: null },
        { choice: null },
        { choice: null },
        { choice: null },
        { choice: null },
    ])

    var correctCount = computed(() => {
        var result = 0
        for (var index = 0; index < questions.value.length; index++) {
            let q = questions.value[index]
            if (q.choices[q.correctChoice] === userChoices.value[index].choice) {
                result += 1
            }
        }

        return result
    })
</script>
