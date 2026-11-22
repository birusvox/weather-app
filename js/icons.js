export function weatherType(code, day) {
    if (code === 0) {
        return day ? "sun" : "moon";
    }

    if (code <= 3) {
        return "cloud";
    }

    if (code === 45 || code === 48) {
        return "fog";
    }

    if ((code >= 71 && code <= 77) || code === 85 || code === 86) {
        return "snow";
    }

    if (code >= 95) {
        return "storm";
    }

    return "rain";
}

export function weatherName(code) {
    const names = {
        sun: "ясно",
        moon: "ясно",
        cloud: "облачно",
        fog: "туман",
        rain: "дождь",
        snow: "снег",
        storm: "гроза"
    };

    return names[weatherType(code, true)];
}

export function icon(type) {
    const shapes = {
        sun: `<circle cx="32" cy="32" r="12" fill="#f5c518"/>`,
        moon: `<path d="M36 14a16 16 0 1 0 14 24 13 13 0 0 1-14-24z" fill="#f4e7b0"/>`,
        cloud: `<ellipse cx="32" cy="36" rx="16" ry="10" fill="#c5d0dc"/>`,
        fog: `<ellipse cx="32" cy="30" rx="16" ry="8" fill="#d5dbe3"/><path d="M16 44h32M18 50h28" stroke="#9aa6b2" stroke-width="3"/>`,
        rain: `<ellipse cx="32" cy="28" rx="16" ry="9" fill="#8ea0b5"/><path d="M24 42l-3 8M32 42l-3 8M40 42l-3 8" stroke="#3b6fe0" stroke-width="3"/>`,
        snow: `<ellipse cx="32" cy="28" rx="16" ry="9" fill="#d5e2ee"/><path d="M24 44h4M32 42v6M40 44h4" stroke="#7f93a8" stroke-width="3"/>`,
        storm: `<ellipse cx="32" cy="26" rx="16" ry="9" fill="#6d7c8f"/><path d="M34 34l-8 12h8l-4 10 12-14h-8z" fill="#f5c518"/>`
    };

    return `<svg viewBox="0 0 64 64" aria-hidden="true">${shapes[type]}</svg>`;
}
