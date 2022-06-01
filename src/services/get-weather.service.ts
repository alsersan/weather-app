import type { ApiData } from '$models/weather-data.model';
import type { Locations } from '$models/location.model';

export function getWeather(location: string): Promise<ApiData> {
	return fetch(`/api/weather/${location}`).then((data) => data.json());
}

export function getLocation(query: string): Promise<Locations> {
	return fetch(`/api/location/${query}`).then((data) => data.json());
}
