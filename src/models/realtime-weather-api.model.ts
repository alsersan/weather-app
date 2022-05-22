export type RealtimeWeatherApi = {
	city: string;
	region: string;
	country: string;
	localTime: string;
	description: string;
	iconUrl: string;
	temperature: number;
	feelsLike: number;
	humidity: number;
	windSpeed: number;
	isDaytime: boolean;
};
