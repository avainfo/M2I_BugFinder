import { getAgents, addAgent } from "./agentManager.js";
import { getMissions, fetchMission } from "./missionManager.js";
import { playAlertSound } from "./utils.js";

const agentList = document.querySelectorAll("#agentList");
const missionList = document.querySelectorAll("#missionList");
const addAgentBtn = document.querySelector("#addAgent");
const fetchMissionBtn = document.querySelector("#fetchMission");

function init() {
	renderAgents();
	renderMissions();

	addAgentBtn.addEventListener("click", () => {
		addAgent(prompt("Nom de l'agent ?"));
		renderMissions();
	});

	fetchMissionBtn.addEventListener("click", async () => {
		try {
			let mission = await fetchMission();
			renderMissions();
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
	missionList.innerHTML = "";
	missions.forEach(mission => {
		let li = document.createElement("li");
		li.textContent = mission;
		missionList.appendChild(li);
	});
}

init();
