import taquitosImage from "../assets/images/taquitos.jpg";
import bbqShrimpImage from "../assets/images/bbq-shrimp.jpg";
import chileanSeabassImage from "../assets/images/chilean-seabass.jpg";
import yellowtailImage from "../assets/images/yellowtail.jpg";
import clamLinguineImage from "../assets/images/clam-linguine.jpg";
import spinyLobsterImage from "../assets/images/spiny-lobster.jpg";



//creates menu item
class MenuItem {
  constructor(name, description, price, image) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.image = image;
  }
}

//creates card for menu item
function createItemCard(menuItem) {
  const itemCard = document.createElement("div");
  itemCard.classList.add("item-card");

  const itemTitle = document.createElement("h2");
  itemTitle.textContent = menuItem.name;

  const itemDescription = document.createElement("p");
  itemDescription.textContent = menuItem.description;

  const itemPrice = document.createElement("p");
  itemPrice.classList.add("item-price");
  itemPrice.textContent = menuItem.price

  const itemImage = document.createElement("img");
  itemImage.classList.add("item-image");
  itemImage.src = menuItem.image;

  itemCard.append(itemTitle, itemDescription, itemPrice, itemImage);

  return itemCard;
}

const bbqShrimp = new MenuItem(
  "Sautéed N'awlins BBQ Shrimp",
  "Wild Mexical jumbo shrimp, jasmine rice, grilled sourdough",
  "$32.50",
  bbqShrimpImage
);

const misoSeaBass = new MenuItem(
  "Miso Yaki Wild Chilean Sea Bass",
  "Wild Ross Sea Chilean Sea Bass, baby bok choy and shimenji mushrooms",
  "$47.50", 
  chileanSeabassImage
);

const clamLinguine = new MenuItem(
  "Clams Linguine",
  "Farmed Savory clams, shallots, white wine, garlic, crushed pepper",
  "$28.50",
  clamLinguineImage
);

const shrimpTaquitos = new MenuItem(
  "Blackened Shrimp Taquitos", 
  "Cojita, spicy crema, guacamole, fresh pico de gallo",
  "$19.50", 
  taquitosImage
);

const yellowtail = new MenuItem(
  "Yellowtail Carpaccio",
  "Ponzu, jalapeno, wasabi cream, ikura",
  "$19.75",
  yellowtailImage
);

const spinyLobster = new MenuItem(
  "Spiny Lobster",
  "Grilled spiny lobster, garlic butter, lemon",
  "$34.50",
  spinyLobsterImage
);

const menuItems = [bbqShrimp, misoSeaBass, clamLinguine, shrimpTaquitos, yellowtail, spinyLobster];

export function loadMenu() {
  const content = document.querySelector(".content");
  //clears the content if there is any
  content.textContent = "";

  const menuDiv = document.createElement("div");
  menuDiv.classList.add("menu-card");

  menuItems.forEach((item) => {
    const itemCard = createItemCard(item);

    menuDiv.append(itemCard);
  });

  content.append(menuDiv);
}
