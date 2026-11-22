import { checkCoords } from "./validate.js";
import { loadWeather } from "./weather.js";
import { cardHtml } from "./view.js";

const form = document.querySelector("#form");
const errorBox = document.querySelector("#error");
const list = document.querySelector("#list");
const button = form.querySelector("button");
let nextId = 1;

form.addEventListener("submit", (event) => {
    event.preventDefault();
    addCard(form.lat.value, form.lon.value);
});

list.addEventListener("click", (event) => {
    const close = event.target.closest("[data-remove]");

    if (!close) {
        return;
    }

    const card = list.querySelector(`[data-id="${close.dataset.remove}"]`);

    if (card) {
        card.remove();
    }
});

async function addCard(latText, lonText) {
    const coords = checkCoords(latText, lonText);

    if (coords.error) {
        showError(coords.error);
        return;
    }

    showError("");
    const item = await askWeather(coords);

    if (!item) {
        return;
    }

    item.id = nextId;
    nextId += 1;
    list.insertAdjacentHTML("afterbegin", cardHtml(item));
}

async function askWeather(coords) {
    button.disabled = true;

    try {
        return await loadWeather(coords.lat, coords.lon);
    } catch (err) {
        showError(err.message);
        return null;
    } finally {
        button.disabled = false;
    }
}

function showError(text) {
    errorBox.textContent = text;
}
