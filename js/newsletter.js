var form = document.getElementById("newsletterForm");

async function handleSubmit(event) {
	event.preventDefault();
	var status = document.getElementById("formStaus");
	var data = new FormData(event.target);
	fetch(event.target.action, {
		method: form.method,
		body: data,
		headers: {
			Accept: "application/json",
		},
	})
		.then((response) => {
			if (response.ok) {
				createToast("Thanks for your submission!", "success");
				form.reset();
			} else {
				response.json().then((data) => {
					if (Object.hasOwn(data, "errors")) {
						createToast(
							data["errors"].map((error) => error["message"]).join(", "),
							"error"
						);
					} else {
						createToast(
							"Oops! There was a problem submitting your form",
							"error"
						);
					}
				});
			}
		})
		.catch((error) => {
			createToast("Oops! There was a problem submitting your form", "error");
		});
}
form.addEventListener("submit", handleSubmit);
