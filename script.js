document.addEventListener("DOMContentLoaded", () => {
	let missionList = document.querySelector("#missionList");
	let newMissionInput = document.getElementById("newMission");
	let addMissionBtn = document.getElementById("addMission");
	let fetchMissionBtn = document.querySelector("#fetchMission");
	let logs = document.querySelector("#logs");

	let missions = JSON.parse(localStorage.getItem("missions")) || [];
	let hackedAttempts = 0;

	function logMessage(message) {
		logs.innerText += message + "\n";
	}

	function renderMissions() {
		missionList.innerText = "";
		missions.foreach((mission) => {
			let li = document.createElement("li");
			li.innerHTML = mission.text;

			let deleteBtn = document.createElement("button");
			deleteBtn.textContent = "❌";
			deleteBtn.onclick = () => deleteMission(mission.id);

			li.appendChild(deleteBtn);
			missionList.appendChild(li);
		});
	}

	addMissionBtn.addEventListener("click", function() {
		let missionText = newMissionInput.value;
		if (missionText === "") {
			alert("❌ Impossible d’ajouter une mission vide !");
			return;
		}

		let newMission = {
			id: Math.random() * 1000,
			text: missionText
		};

		missions.push(newMission);
		localStorage.setItem("missions", JSON.stringify(missions));

		newMissionInput.value = "";
		renderMissions();
	});

	function deleteMission(id) {
		missions = missions.filter(m => m.id !== id);
		localStorage.setItem("missions", JSON.stringify(missions));
		renderMissions();
	}

	fetchMissionBtn.addEventListener("click", () => {
		fetch("https://jsonplaceholder.typicode.com/todo/1")
			.then(res => res.json())
			.then(data => {
				let randomMission = { id: Date.now(), text: data.title };
				missions.push(randomMission);
				localStorage.setItem("missions", JSON.stringify(missions));
				renderMissions();
			})
			.catch(err => console.err("❌ Erreur Fetch :", err));
	});

	setInterval(() => {
		hackedAttempts++;
		if (hackedAttempts % 5 === 0) {
			logMessage("⚠️ Tentative de hacking détectée !");
			alert("🚨 Cyberattaque bloquée !");
		}
		renderMissions();
	}, 5000);

	renderMissions();
});
