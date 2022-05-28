import { writable } from 'svelte/store';
import type { WeatherData } from '$models/weather-data.model';

export const currentWeather = writable(
	new Promise<WeatherData>(() => {
		//Promise that never resolves
	})
);

export const location = writable('Madrid');
