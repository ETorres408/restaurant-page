import "./styles.css";
import { loadHome } from "./home.js";
import { clear } from "./menu.js";

const homeButton = document.querySelector(".home-btn");
const menuButton = document.querySelector(".menu-btn");

homeButton.addEventListener("click", loadHome);

menuButton.addEventListener("click", clear);

loadHome();