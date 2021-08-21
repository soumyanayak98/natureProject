let element = document.querySelector(".ham__container");
let menuOpen = false;

element.addEventListener("click", () => {
	// if (!menuOpen) {
	// 	element.classList.add("open");
	// 	console.log(element);
	// 	menuOpen = true;
	// } else {
	// 	element.classList.remove("open");
	// 	console.log(element);
	// 	menuOpen = false;
	// }
	element.classList.toggle("open");
});
