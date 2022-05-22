import type { RealtimeWeatherApi } from '$models/realtime-weather-api.model';

export function getRealtimeWeather(): Promise<RealtimeWeatherApi> {
	return fetch('/api/weather/realtime/Madrid').then((data) => data.json());
}
