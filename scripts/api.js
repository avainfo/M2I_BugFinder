export async function fetchFromAPI(endpoint) {
	try {
		let res = await fetch("https://jsonplaceholder.typicode.com" + endpoint);
		let data = await res.json();
		if(!data) {
			throw new Error("No data found!")
		}
		return data.title;
	} catch (error) {
		console.error("Erreur API :", error);
		return null;
	}
}
