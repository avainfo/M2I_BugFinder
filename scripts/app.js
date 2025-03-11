import { getAgents, addAgent } from "./agentManager.js";
import { getMissions , fetchMission} from "./missionManager.js";
import {saveToStorage} from "/scripts/storage.js";

const agentList = document.getElementById("agentList");
const missionList = document.getElementById("missionList");
const addAgentBtn = document.querySelector("#addAgent");
const fetchMissionBtn = document.querySelector("#fetchMission");

function init() {
	renderAgents();
	renderMissions();

	addAgentBtn.addEventListener("click", () => {
		try {
			const name = prompt("Nom de l'agent ?");
			if (name) {
				addAgent(name);
				renderAgents();
				saveToStorage("agents", JSON.stringify(getAgents()));
			}
		} catch (e) {
			console.error(e);
		}
	});


	fetchMissionBtn.addEventListener("click", async () => {
		try {
			let mission = await fetchMission();
			renderMissions();
			saveToStorage("mission", JSON.stringify(mission));
		} catch (err) {
			console.error("Erreur lors de la récupération des missions", err);
		}
	});
}

function renderAgents() {
	let agents = getAgents();
	agentList.innerHTML = "";
	agents.forEach(agent => {
		let li = document.createElement("li");
		li.textContent = agent;
		agentList.appendChild(li);
	});
}

function renderMissions() {
	let missions = getMissions();
	console.log(missions);
	if (Array.isArray(missions)) {
		missionList.innerHTML = "";
		missions.forEach(mission => {
			let li = document.createElement("li");
			li.textContent = mission;
			missionList.appendChild(li);
		});
	} else {
		console.error("missions n'est pas un tableau:", missions);
	}
}


init();
