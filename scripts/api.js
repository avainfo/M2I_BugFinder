export async function fetchFromAPI(endpoint) {
	try {
		let res = await fetch("https://jsonplaceholder.typicode.com" + endpoint);
		if (!res.ok) {
			console.error("Erreur de réseau:", res.status);
			return;
		}
		let data = await res.json();
		return data.title; // Assurez-vous que l'API retourne bien un objet avec une propriété 'title'
	} catch (error) {
		console.error("Erreur API :", error);
	}
}
