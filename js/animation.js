document.addEventListener("DOMContentLoaded", () => {
	const allElements = document.querySelectorAll(
		"main h1, main h2, main h3, main h4, main h5, main h6, main p, main li, main .card",
	);

	let staggerIndex = 0;

	allElements.forEach((el) => {
		if (el.classList.contains("card") || !el.closest(".card")) {
			el.classList.add("appear");
			el.style.animationDelay = `${staggerIndex * 150}ms`;
			el.style.animationDuration = "800ms";
			staggerIndex++;
		}
	});
});
