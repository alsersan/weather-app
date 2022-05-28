import { writable } from 'svelte/store';
import type { RealtimeWeatherApi } from '$models/realtime-weather-api.model';

export const currentWeather = writable(
	new Promise<RealtimeWeatherApi>(() => {
		//Promise that never resolves
	})
);

export const location = writable('Madrid');
