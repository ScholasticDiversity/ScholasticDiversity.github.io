import bomJsonURL from "@/assets/bom-scriptures.json?url"; // Book of Mormon json
import dcJsonURL from "@/assets/dc-scriptures.json?url"; // Doctrine and Covenants json
import pgpJsonURL from "@/assets/pgp-scriptures.json?url"; // Pearl of Great Price json

export default {
	textCache: {
		bom: [] as any[],
		dc: [] as any[],
		pgp: [] as any[],
	},
	getIndex() {
		return {
			title: "Church of Jesus Christ of Latter-Day Saints",
			contents: [
				{
					title: "Book of Mormon",
					to: { name: "lds", params: { book: ["Book of Mormon"] } },
					external: "https://assets.churchofjesuschrist.org/2d/5e/2d5e0fa7545611ec81e4eeeeac1e6f4d7d08ab17/book_of_mormon_missionary_english.pdf",
					externalType: "volume's PDF",
					contents: [
						{
							title: "1 Nephi",
							chapters: 22,
							to: { name: "lds", params: { book: ["Book of Mormon", "1 Nephi"] } },
							external: "https://site.churchofjesuschrist.org/study/scriptures/bofm/1-ne?lang=eng",
							externalType: "book",
						},
						{
							title: "2 Nephi",
							chapters: 33,
							to: { name: "lds", params: { book: ["Book of Mormon", "2 Nephi"] } },
							external: "https://site.churchofjesuschrist.org/study/scriptures/bofm/2-ne?lang=eng",
							externalType: "book",
						},
						{
							title: "Jacob",
							chapters: 6,
							to: { name: "lds", params: { book: ["Book of Mormon", "Jacob"] } },
							external: "https://site.churchofjesuschrist.org/study/scriptures/bofm/jacob?lang=eng",
							externalType: "book",
						},
						{
							title: "Enos",
							chapters: 1,
							to: { name: "lds", params: { book: ["Book of Mormon", "Enos"] } },
							external: "https://site.churchofjesuschrist.org/study/scriptures/bofm/enos/1?lang=eng",
							externalType: "book",
						},
						{
							title: "Jarom",
							chapters: 1,
							to: { name: "lds", params: { book: ["Book of Mormon", "Jarom"] } },
							external: "https://site.churchofjesuschrist.org/study/scriptures/bofm/jarom/1?lang=eng",
							externalType: "book",
						},
						{
							title: "Omni",
							chapters: 1,
							to: { name: "lds", params: { book: ["Book of Mormon", "Omni"] } },
							external: "https://site.churchofjesuschrist.org/study/scriptures/bofm/omni/1?lang=eng",
							externalType: "book",
						},
						{
							title: "Words of Mormon",
							chapters: 1,
							to: { name: "lds", params: { book: ["Book of Mormon", "Words of Mormon"] } },
							external: "https://site.churchofjesuschrist.org/study/scriptures/bofm/w-of-m/1?lang=eng",
							externalType: "book",
						},
						{
							title: "Mosiah",
							chapters: 29,
							to: { name: "lds", params: { book: ["Book of Mormon", "Mosiah"] } },
							external: "https://site.churchofjesuschrist.org/study/scriptures/bofm/mosiah?lang=eng",
							externalType: "book",
						},
						{
							title: "Alma",
							chapters: 63,
							to: { name: "lds", params: { book: ["Book of Mormon", "Alma"] } },
							external: "https://site.churchofjesuschrist.org/study/scriptures/bofm/alma?lang=eng",
							externalType: "book",
						},
						{
							title: "Helaman",
							chapters: 16,
							to: { name: "lds", params: { book: ["Book of Mormon", "Helaman"] } },
							external: "https://site.churchofjesuschrist.org/study/scriptures/bofm/hel?lang=eng",
							externalType: "book",
						},
						{
							title: "3 Nephi",
							chapters: 30,
							to: { name: "lds", params: { book: ["Book of Mormon", "3 Nephi"] } },
							external: "https://site.churchofjesuschrist.org/study/scriptures/bofm/3-ne?lang=eng",
							externalType: "book",
						},
						{
							title: "4 Nephi",
							chapters: 1,
							to: { name: "lds", params: { book: ["Book of Mormon", "4 Nephi"] } },
							external: "https://site.churchofjesuschrist.org/study/scriptures/bofm/4-ne?lang=eng",
							externalType: "book",
						},
						{
							title: "Mormon",
							chapters: 9,
							to: { name: "lds", params: { book: ["Book of Mormon", "Mormon"] } },
							external: "https://site.churchofjesuschrist.org/study/scriptures/bofm/morm?lang=eng",
							externalType: "book",
						},
						{
							title: "Ether",
							chapters: 15,
							to: { name: "lds", params: { book: ["Book of Mormon", "Ether"] } },
							external: "https://site.churchofjesuschrist.org/study/scriptures/bofm/ether?lang=eng",
							externalType: "book",
						},
						{
							title: "Moroni",
							chapters: 10,
							to: { name: "lds", params: { book: ["Book of Mormon", "Moroni"] } },
							external: "https://site.churchofjesuschrist.org/study/scriptures/bofm/moro?lang=eng",
							externalType: "book",
						},
					]
				},
				{
					title: "Doctrine and Covenants",
					to: { name: "lds", params: { book: ["Doctrine and Covenants"] } },
					chapters: 138,
					external: "https://media.ldscdn.org/pdf/lds-scriptures/doctrine-and-covenants/doctrine-and-covenants-eng.pdf",
					externalType: "volume's PDF",
				},
				{
					title: "The Pearl of Great Price",
					to: { name: "lds", params: { book: ["The Pearl of Great Price"] } },
					external: "https://media.ldscdn.org/pdf/lds-scriptures/the-pearl-of-great-price/the-pearl-of-great-price-eng.pdf",
					externalType: "volume's PDF",
					contents: [
						{
							title: "Moses",
							chapters: 8,
							to: { name: "lds", params: { book: ["The Pearl of Great Price", "Moses"] } },
							external: "https://site.churchofjesuschrist.org/study/scriptures/pgp/moses?lang=eng",
							externalType: "book",
						},
						{
							title: "Abraham",
							chapters: 5,
							to: { name: "lds", params: { book: ["The Pearl of Great Price", "Abraham"] } },
							external: "https://site.churchofjesuschrist.org/study/scriptures/pgp/abr?lang=eng",
							externalType: "book",
						},
						{
							title: "Joseph Smith--Matthew",
							chapters: 1,
							to: { name: "lds", params: { book: ["The Pearl of Great Price", "Joseph Smith--Matthew"] } },
							external: "https://site.churchofjesuschrist.org/study/scriptures/pgp/js-m/1?lang=eng",
							externalType: "book",
						},
						{
							title: "Joseph Smith--History",
							chapters: 1,
							to: { name: "lds", params: { book: ["The Pearl of Great Price", "Joseph Smith--History"] } },
							external: "https://site.churchofjesuschrist.org/study/scriptures/pgp/js-h/1?lang=eng",
							externalType: "book",
						},
						{
							title: "Articles of Faith",
							chapters: 1,
							to: { name: "lds", params: { book: ["The Pearl of Great Price", "Articles of Faith"] } },
							external: "https://site.churchofjesuschrist.org/study/scriptures/pgp/a-of-f/1?lang=eng",
							externalType: "book",
						},
					]
				}
			]
		}
	},
	getBooks() {
		return [ "Book of Mormon", "Doctrine and Covenants", "The Pearl of Great Price" ];
	},
	getBookFromIndex(book: string) {
		const index = this.getIndex()
		for (const b of index.contents) {
			if (b.title === book) {
				return b;
			} else if (b.contents) {
				for (const b2 of b.contents) {
					if (b2.title === book) {
						return b2;
					}
				}
			}
		}
		return { title: "" };
	},
	getBookSubsections(book: string) {
		if (book === "Book of Mormon") {
			return {
				books: ["1 Nephi", "2 Nephi", "Jacob", "Enos", "Jarom", "Omni", "Words of Mormon", "Mosiah", "Alma", "Helaman", "3 Nephi", "4 Nephi", "Mormon", "Ether", "Moroni"],
			}
		} else if (book === "Doctrine and Covenants") {
			return {
				chapters: 138,
			};
		} else if (book === "The Pearl of Great Price") {
			return {
				books: ["Moses", "Abraham", "Joseph Smith--Matthew", "Joseph Smith--History", "Articles of Faith"]
			}
		}
	},
	async getBookText(book: string) {
		/*const res = await fetch(`https://api.nephi.org/scriptures/?q=${encodeURIComponent(book)}`, { method: "GET" });
		if (!res.ok) {
			const message = `An error has occured: ${res.status} - ${res.statusText}`;
			console.log(res);
            throw new Error(message);
		}

		const data = await res.json();
		return data as any;*/

		const parts = book.split('.');
		const volume = parts[0];
		const bk = (volume == "Doctrine and Covenants") ? "" : parts[1];
		const chapter = (volume == "Doctrine and Covenants") ? parts[1] : parts[2];

		let file = "";
		let useCache = false;
		let cache = [];
		if (volume == "Book of Mormon" || volume == "The Book of Mormon") {
			file = bomJsonURL;
			if (this.textCache.bom.length > 0) {
				useCache = true;
				cache = this.textCache.bom;
			}
		} else if (volume == "Doctrine and Covenants") {
			file = dcJsonURL;
			if (this.textCache.dc.length > 0) {
				useCache = true;
				cache = this.textCache.dc;
			}
		} else if (volume == "Pearl of Great Price" || volume == "The Pearl of Great Price") {
			file = pgpJsonURL;
			if (this.textCache.pgp.length > 0) {
				useCache = true;
				cache = this.textCache.pgp;
			}
		}

		let data = cache;
		console.log("Using cache? ", useCache)
		if (!useCache) {
			const res = await(fetch(`${file}`, { method: "GET" }));
			if (!res.ok) {
				const message = `An error has occured: ${res.status} - ${res.statusText}`;
				console.log(res);
				throw new Error(message);
			}

			data = await res.json();

			if (volume == "Book of Mormon" || volume == "The Book of Mormon") {
				this.textCache.bom = data;
			} else if (volume == "Doctrine and Covenants") {
				this.textCache.dc = data;
			} else if (volume == "Pearl of Great Price" || volume == "The Pearl of Great Price") {
				this.textCache.pgp = data;
			}
		}

		// Filter the array for the specific book from volume.
		data = data.filter((value: any, index: number, a: any[]) => {
			if ((bk != "Doctrine and Covenants" && value.book_title == bk) && value.chapter_number == chapter) {
				return true;
			}
			return false;
		});

		return data as Array<any>;
	}
};
