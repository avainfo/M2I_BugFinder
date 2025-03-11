import { saveToStorage, loadFromStorage } from "./storage.js";

let agents = JSON.parse(loadFromStorage("agents")) || ["James Bond", "Ethan Hunt"];

export function getAgents() {
	return agents;
}

export function addAgent(name) {
	if (name.length > 3) {
		agents.push(name);
		saveToStorage("agents", agents);
	}
}
