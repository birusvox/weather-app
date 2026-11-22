export async function loadWeather(lat, lon) {
    const params = new URLSearchParams({
        latitude: String(lat),
        longitude: String(lon),
        current: "temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m,is_day",
        timezone: "auto",
        wind_speed_unit: "ms"
    });
    const response = await fetch("https://api.open-meteo.com/v1/forecast?" + params);

    if (!response.ok) {
        throw new Error("Сервис погоды не ответил");
    }

    return readCurrent(await response.json(), lat, lon);
}

function readCurrent(data, lat, lon) {
    const now = data.current;

    return {
        lat,
        lon,
        temp: Math.round(now.temperature_2m),
        wind: now.wind_speed_10m,
        humidity: now.relative_humidity_2m,
        code: now.weather_code,
        day: now.is_day === 1,
        time: now.time.split("T")[1].slice(0, 5),
        zone: data.timezone
    };
}
