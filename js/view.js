import { icon, weatherName, weatherType } from "./icons.js";

export function cardHtml(item) {
    const type = weatherType(item.code, item.day);

    return [
        `<article class="card" data-id="${item.id}">`,
        `<button class="close" type="button" data-remove="${item.id}">Удалить</button>`,
        `<div class="card-top">${icon(type)}<p class="temp">${item.temp}°</p></div>`,
        `<p class="state">${weatherName(item.code)}</p>`,
        `<p class="place">${item.lat}, ${item.lon}</p>`,
        facts(item),
        mapFrame(item),
        `</article>`
    ].join("");
}

function facts(item) {
    return `<ul class="facts">
        <li>Ветер ${item.wind} м/с</li>
        <li>Влажность ${item.humidity}%</li>
        <li>Время ${item.time}, ${item.zone}</li>
    </ul>`;
}

function mapFrame(item) {
    const left = item.lon - 0.12;
    const bottom = item.lat - 0.08;
    const right = item.lon + 0.12;
    const top = item.lat + 0.08;
    const box = `${left},${bottom},${right},${top}`;
    const src = `https://www.openstreetmap.org/export/embed.html?bbox=${box}&layer=mapnik&marker=${item.lat}%2C${item.lon}`;

    return `<iframe class="map" title="Карта" src="${src}"></iframe>`;
}
