export function playAlertSound() {
	let audio = new Audio("/assets/alert.mp3");
	audio.play().catch(err => console.error(err));
}
