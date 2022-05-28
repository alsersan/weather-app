import type { RealtimeWeatherApi } from '$models/realtime-weather-api.model';

export function getRealtimeWeather(location: string): Promise<RealtimeWeatherApi> {
	return fetch(`/api/weather/realtime/${location}`).then((data) => data.json());
}
