function parseNumber(text) {
    const clean = String(text).trim().replace(",", ".");

    if (!/^[+-]?\d+(\.\d+)?$/.test(clean)) {
        return null;
    }

    return Number(clean);
}

export function checkCoords(latText, lonText) {
    const lat = parseNumber(latText);
    const lon = parseNumber(lonText);

    if (lat === null) {
        return { error: "Широта должна быть числом" };
    }

    if (lat < -90 || lat > 90) {
        return { error: "Широта от -90 до 90" };
    }

    if (lon === null) {
        return { error: "Долгота должна быть числом" };
    }

    if (lon < -180 || lon > 180) {
        return { error: "Долгота от -180 до 180" };
    }

    return { lat, lon };
}
