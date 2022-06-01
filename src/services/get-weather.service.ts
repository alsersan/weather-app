import type { ApiData } from '$models/weather-data.model';

export function getWeather(location: string): Promise<ApiData> {
	return fetch(`/api/weather/${location}`).then((data) => data.json());
}
