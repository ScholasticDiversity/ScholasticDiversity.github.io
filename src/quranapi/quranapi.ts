export default {
	async getEnglishVersions() {
		const res = await fetch("http://api.alquran.cloud/v1/edition/language/en", { method: "GET" });
		if (!res.ok) {
			const message = `An error has occured: ${res.status} - ${res.statusText}`;
            throw new Error(message);
		}

		const data = await res.json();
		return (data as { code: number, data: Array<any>, status: string });
	},
	async getVersionInfoFromIdentifier(id: string) {
		const versions = await this.getEnglishVersions();
		for (const v of versions.data) {
			if (v.identifier === id) {
				return v;
			}
		}
		return {};
	},
	async getMeta() {
		const res = await fetch(`http://api.alquran.cloud/v1/meta`, { method: "GET" });
		if (!res.ok) {
			const message = `An error has occured: ${res.status} - ${res.statusText}`;
            throw new Error(message);
		}

		const data = await res.json();
		return (data as { code: number, data: any, status: string });
	},
	async getSurahInfo(num: string, meta?: any) {
		const _meta = meta || (await this.getMeta());
		for (const s of _meta.data.surahs.references) {
			if (s.number == num) {
				return s;
			}
		}
		return {};
	},
	async getSurah(num: string, id: string) {
		const res = await fetch(`http://api.alquran.cloud/v1/surah/${num}/${id}`, { method: "GET" });
		if (!res.ok) {
			const message = `An error has occured: ${res.status} - ${res.statusText}`;
            throw new Error(message);
		}

		const data = await res.json();
		return (data as { code: number, data: any, status: string });
	}
};
