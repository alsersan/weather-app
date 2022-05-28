import type { WeatherData } from '$models/weather-data.model';

export function getRealtimeWeather(location: string): Promise<WeatherData> {
	return fetch(`/api/weather/${location}`).then((data) => data.json());
}
