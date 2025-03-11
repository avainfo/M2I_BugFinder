import { saveToStorage, loadFromStorage } from "./storage.js";
import { fetchFromAPI } from "./api.js";

let missions = loadFromStorage("missions") || [];

export function getMissions() {
	return missions;
}

export async function fetchMission() {
	let newMission = await fetchFromAPI("/missions/random");
	missions.push(newMission);
	saveToStorage("missions", missions);
}
