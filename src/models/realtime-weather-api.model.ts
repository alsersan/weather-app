export type RealtimeWeatherApi = {
	city: string;
	region: string;
	country: string;
	localTime: string;
	weather: string;
	iconUrl: string;
	temperature: number;
	feelsLike: number;
	humidity: number;
	windSpeed: number;
};
