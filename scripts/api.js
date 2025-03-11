export async function fetchFromAPI(endpoint) {
	try {
		let res = await fetch("https://jsonplaceholder.typicode.com" + endpoint);
		let data = await res.json();
		return data.title;
	} catch (error) {
		console.error("Erreur API :", error);
	}
}
