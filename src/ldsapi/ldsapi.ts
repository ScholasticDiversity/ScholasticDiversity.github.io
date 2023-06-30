export default {
	getIndex() {
		return {
			title: "Church of Jesus Christ of Latter-Day Saints",
			contents: [
				{
					title: "Book of Mormon",
					to: { name: "lds", params: { book: ["Book of Mormon"] } },
					contents: [
						{
							title: "1 Nephi",
							chapters: 22,
							to: { name: "lds", params: { book: ["Book of Mormon", "1 Nephi"] } },
						},
						{
							title: "2 Nephi",
							chapters: 33,
							to: { name: "lds", params: { book: ["Book of Mormon", "2 Nephi"] } },
						},
						{
							title: "Jacob",
							chapters: 6,
							to: { name: "lds", params: { book: ["Book of Mormon", "Jacob"] } },
						},
						{
							title: "Enos",
							to: { name: "lds", params: { book: ["Book of Mormon", "Enos"] } },
						},
						{
							title: "Jarom",
							to: { name: "lds", params: { book: ["Book of Mormon", "Jarom"] } },
						},
						{
							title: "Omni",
							to: { name: "lds", params: { book: ["Book of Mormon", "Omni"] } },
						},
						{
							title: "Words of Mormon",
							to: { name: "lds", params: { book: ["Book of Mormon", "Words of Mormon"] } },
						},
						{
							title: "Mosiah",
							chapters: 29,
							to: { name: "lds", params: { book: ["Book of Mormon", "Mosiah"] } },
						},
						{
							title: "Alma",
							chapters: 63,
							to: { name: "lds", params: { book: ["Book of Mormon", "Alma"] } },
						},
						{
							title: "Helaman",
							chapters: 16,
							to: { name: "lds", params: { book: ["Book of Mormon", "Helaman"] } },
						},
						{
							title: "3 Nephi",
							chapters: 30,
							to: { name: "lds", params: { book: ["Book of Mormon", "3 Nephi"] } },
						},
						{
							title: "4 Nephi",
							to: { name: "lds", params: { book: ["Book of Mormon", "4 Nephi"] } },
						},
						{
							title: "Mormon",
							chapters: 9,
							to: { name: "lds", params: { book: ["Book of Mormon", "Mormon"] } },
						},
						{
							title: "Ether",
							chapters: 15,
							to: { name: "lds", params: { book: ["Book of Mormon", "Ether"] } },
						},
						{
							title: "Moroni",
							chapters: 10,
							to: { name: "lds", params: { book: ["Book of Mormon", "Moroni"] } },
						},
					]
				},
				{
					title: "Doctrine and Covenants",
					to: { name: "lds", params: { book: ["Doctrine and Covenants"] } },
					chapters: 138,
				},
				{
					title: "The Pearl of Great Price",
					to: { name: "lds", params: { book: ["The Pearl of Great Price"] } },
					contents: [
						{
							title: "Moses",
							chapters: 8,
							to: { name: "lds", params: { book: ["The Pearl of Great Price", "Moses"] } },
						},
						{
							title: "Abraham",
							chapters: 5,
							to: { name: "lds", params: { book: ["The Pearl of Great Price", "Abraham"] } },
						},
						{
							title: "Joseph Smith--Matthew",
							to: { name: "lds", params: { book: ["The Pearl of Great Price", "Joseph Smith--Matthew"] } },
						},
						{
							title: "Joseph Smith--History",
							to: { name: "lds", params: { book: ["The Pearl of Great Price", "Joseph Smith--History"] } },
						},
						{
							title: "Articles of Faith",
							to: { name: "lds", params: { book: ["The Pearl of Great Price", "Articles of Faith"] } },
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
		const res = await fetch(`https://api.nephi.org/scriptures/?q=${encodeURIComponent(book).replaceAll('%20', '+')}`, { method: "GET", mode: "no-cors" });
		if (!res.ok) {
			const message = `An error has occured: ${res.status} - ${res.statusText}`;
            throw new Error(message);
		}

		const data = await res.json();
		return data as any;
	}
};
