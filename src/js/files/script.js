// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
let getButtons = document.querySelectorAll(".btn");


for (let i = 0; i < getButtons.length; i++) {
    getButtons[i].onclick = function () {
        let dropdowns = document.querySelectorAll(".dropdown__list");
        dropdowns[i].classList.toggle('show');
    }
}

let flipCards = document.querySelectorAll('.flip-card');

for (let i = 0; i < flipCards.length; i++) {
    flipCards[i].onclick = function () {
        let flipInner = flipCards[i].querySelector('.flip-card-inner');
        flipInner.classList.toggle('active');
    };
}
