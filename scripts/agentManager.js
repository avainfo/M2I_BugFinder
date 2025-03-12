import { saveToStorage, loadFromStorage } from "./storage.js";

let agents = loadFromStorage("agents") || ["James Bond", "Ethan Hunt"];

export function getAgents() {
	console.warn(agents)
	return agents;
}

export function addAgent(name) {
	console.warn(name)
	if(name === null) {
		alert("Please enter a name");
	} else if (name.trim().length > 3) {
		agents.push(name);
		saveToStorage("agents", agents);
	} else {
		alert("Please enter a name with at least 3 characters");
	}
}
