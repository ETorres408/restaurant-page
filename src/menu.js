class MenuItem {
  constructor(name, description, image) {
    this.name = name;
    this.description = description;
    this.image = image;
  }
}

//creates card for menu item
function createItemCard(menuItem) {
  const itemCard = document.createElement("div");

  const itemTitle = document.createElement("h1");
  itemTitle.textContent = menuItem.name;

  const itemDescription = document.createElement("p");
  itemDescription.textContent = menuItem.description;

  itemCard.append(itemTitle, itemDescription);

  return itemCard;
}

const shrimp = new MenuItem("shrimpie", "This is a yummy shrimpg");
const fish = new MenuItem("fishy", "A yummy fish.");
const apple = new MenuItem("apple", "A tasty apple");
const taco = new MenuItem("taco", "taco de carne asada");
const cake = new MenuItem("pumpkin cake", "sweet pumpkin cake");
const burrito = new MenuItem("burrito", "a thicc burritp");
const menuItems = [shrimp, fish, apple, taco, cake, burrito];

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
