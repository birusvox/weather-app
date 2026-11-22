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
        sun: `<circle cx="32" cy="32" r="10" fill="#f5b400"/><path d="M32 8v8M32 48v8M8 32h8M48 32h8M14 14l6 6M44 44l6 6M50 14l-6 6M20 44l-6 6" stroke="#f5b400" stroke-width="4" stroke-linecap="round"/>`,
        moon: `<path d="M38 12a18 18 0 1 0 16 28 14 14 0 0 1-16-28z" fill="#f0d78c"/>`,
        cloud: `<ellipse cx="26" cy="36" rx="12" ry="9" fill="#8ea0b3"/><ellipse cx="40" cy="34" rx="12" ry="10" fill="#6f8499"/>`,
        fog: `<ellipse cx="32" cy="26" rx="16" ry="8" fill="#8ea0b3"/><path d="M14 42h36M16 50h32" stroke="#5d6d7e" stroke-width="4" stroke-linecap="round"/>`,
        rain: `<ellipse cx="32" cy="24" rx="16" ry="9" fill="#5d6f84"/><path d="M22 40l-4 12M32 40l-4 12M42 40l-4 12" stroke="#2f6fe0" stroke-width="4" stroke-linecap="round"/>`,
        snow: `<ellipse cx="32" cy="24" rx="16" ry="9" fill="#6f8499"/><path d="M20 46h8M32 40v12M44 46h-8M26 43l12 6M38 43l-12 6" stroke="#2c3d4f" stroke-width="3" stroke-linecap="round"/>`,
        storm: `<ellipse cx="32" cy="22" rx="16" ry="9" fill="#4e5d6e"/><path d="M36 30l-10 14h8l-4 12 14-16h-8z" fill="#f5b400"/>`
    };

    return `<svg viewBox="0 0 64 64" width="72" height="72" aria-hidden="true">${shapes[type]}</svg>`;
}
