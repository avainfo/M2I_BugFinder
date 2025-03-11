export function saveToStorage(key, value) {
	localStorage.setItem(key, value);
}

export function loadFromStorage(key) {
	return localStorage.getItem(key);
}
