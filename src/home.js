import kingsImg from "../assets/images/kings.jpg"

function createHomeCard(titleText, descriptionText) {
  const homeCard = document.createElement("div");
  homeCard.classList = "home-card-container";

  const title = document.createElement("h1");
  title.classList = "home-card-title";
  title.textContent = titleText;

  const description = document.createElement("p");
  description.classList = "home-card-description";
  description.textContent = descriptionText;

  const image = document.createElement("img");
  image.classList = "home-card-image";
  image.src = kingsImg;
  image.alt = "HUH?";

  homeCard.append(title, description, image);

  return homeCard;
}

export function loadHome() {
  const contentDiv = document.querySelector(".content");
  contentDiv.textContent = "";

  contentDiv.appendChild(
    createHomeCard(
      "Welcome to Kings Fish House!",
      "Established in 2020, King's Fish House is San Jose's choice for seafood. Located at the Westfield Valley Fair, King’s Fish House features a large selection of live oysters, seasonal catches, sushi and live shellfish, including lobster and crab, on a menu that changes daily."
    )
  );
}
