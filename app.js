async function getCardsPost() {
	const responce = await fetch("db.json");

	const cards = await responce.json();

	return cards;
}

getCardsPost().then((cards) => {
	let output = "";

	cards.forEach((element) => {

		const cards = document.querySelector("#output");

		const cardOutput = document.createElement("div");
		cardOutput.className = "card-output";
		cards.append(cardOutput);




		const cardImg = document.createElement("img");
		cardImg.className = "card-img";
		cardImg.src = element.img;
		cardOutput.append(cardImg);

		const title = document.createElement("h2");
		title.className = "card-title";
		title.innerText = element.title;
		cardOutput.append(title);

		const category = document.createElement("h3");
		category.className = "category";
		category.innerText = element.category;
		cardOutput.append(category);

		const price = document.createElement("p");
		price.className = "card-price";
		price.innerText = element.price + ` сом`;
		cardOutput.append(price);

		const line = document.createElement("hr");
		cardOutput.append(line);

		const desc = document.createElement("p");
		desc.className = "card-desc";
		desc.innerText = element.desc;
		cardOutput.append(desc);

		console.log(cards);

		const btnLaptop = document.querySelector("#laptop");
		const btnBag = document.querySelector("#bag");
		const btnSmartphone = document.querySelector("#phone");

		btnLaptop.addEventListener("click", () => {
			if (element.category === "Ноутбук") {
				cardOutput.style.display = "block";
			} else {
				cardOutput.style.display = "none";
			}
		});

		btnBag.addEventListener("click", () => {
			if (element.category === "Сумка для ноутбука") {
				cardOutput.style.display = "block";
			} else {
				cardOutput.style.display = "none";
			}
		});

		btnSmartphone.addEventListener("click", () => {
			if (element.category === "Смартфон") {
				cardOutput.style.display = "block";
			} else {
				cardOutput.style.display = "none";
			}
		});


	});
	getCardsPost();
});



