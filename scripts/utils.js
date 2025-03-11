export function playAlertSound() {
	return new Promise((resolve, reject) => {
		const audio = new Audio('/assets/alert.mp3');
		audio.onended = () => resolve();
		audio.onerror = () => reject('Error occurred.');
		audio.play();
	});
}
