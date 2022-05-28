export type ApiData = {
	current: WeatherData;
};

export type WeatherData = {
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
