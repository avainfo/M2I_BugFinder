import { saveToStorage, loadFromStorage } from "./storage.js";
import { fetchFromAPI } from "./api.js";

let missions = JSON.parse(loadFromStorage("missions")) || [];

export function getMissions() {
	return missions;
}

export async function fetchMission() {
	let lastId = parseInt(loadFromStorage("lastMissionId")) || 0;
	lastId += 1;
	saveToStorage("lastMissionId", lastId.toString());

	try {
		let newMission = await fetchFromAPI(`/todos/${lastId}`); // Utilisez l'id incrémenté
		if (newMission) {
			missions.push(newMission);
			saveToStorage("missions", JSON.stringify(missions));
			return newMission;
		} else {
			console.error("Données de mission invalides:", newMission);
		}
	} catch (error) {
		console.error("Erreur lors de la récupération de la mission:", error);
	}
}
