import {saveToStorage, loadFromStorage} from "./storage.js";
import {fetchFromAPI} from "./api.js";

let missions = loadFromStorage("missions") || [];

export function getMissions() {
	return missions;
}

export async function fetchMission() {
	let newMission = await fetchFromAPI("/todos/" + Math.round(Math.random() * 199 + 1));
	if(newMission !== null) {
		missions.push(newMission);
		saveToStorage("missions", missions);
	}
}
