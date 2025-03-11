export async function fetchFromAPI(endpoint) {
	try {
		let res = await fetch("https://jsonplaceholder.typicode.com" + endpoint);
		if (!res.ok) {
			throw new Error("Network response was not ok");
		}
		let data = await res.json();
		return data.title; // Assurez-vous que l'API retourne bien un objet avec une propriété 'title'
	} catch (error) {
		console.error("Erreur API :", error);
	}
}
