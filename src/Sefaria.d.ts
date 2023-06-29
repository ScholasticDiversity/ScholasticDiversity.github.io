declare namespace Sefaria {
	let toc: Array<any>;
	function getText(t: string, e?: any): Promise<any>;
	function getIndexDetails(t: string): Promise<any>;
	function getIndexDetailsFromCache(t: string): any;
	function getShape(t: string): Promise<any>;
	function getTextFromCache(t: string): any;
}
