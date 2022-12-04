function createToast(message = null, type = null) {
	const toast = document.getElementById("toasts");
	const notif = document.createElement("div");
	const notificationType = type;

	notif.classList.add("toast");
	notif.classList.add(notificationType);

	notif.innerText = message;

	toast.appendChild(notif);

	setTimeout(() => {
		notif.remove();
	}, 3000);
}
