import { writable } from 'svelte/store';
import type { ApiData } from '$models/weather-data.model';

export const weatherData = writable(
	new Promise<ApiData>(() => {
		//Promise that never resolves
	})
);

export const location = writable('Madrid');

export const backgroundColor = writable('dark-gray');
