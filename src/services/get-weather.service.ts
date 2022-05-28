import type { WeatherData } from '$models/weather-data.model';

export function getRealtimeWeather(location: string): Promise<WeatherData> {
	return fetch(`/api/weather/realtime/${location}`).then((data) => data.json());
}
