export type ApiData = {
	current: CurrentWeather;
	forecast: WeatherForecast;
};

export type CurrentWeather = {
	city: string;
	region: string;
	country: string;
	localTime: string;
	description: string;
	iconUrl: string;
	code: number;
	temperature: number;
	feelsLike: number;
	humidity: number;
	windSpeed: number;
};

export type WeatherForecast = DayForecast[];

export type DayForecast = {
	date: string;
	day: DayWeather;
	hour: HourWeather[];
};

export type DayWeather = {
	description: string;
	iconUrl: string;
	code: number;
	maxTemperature: number;
	minTemperature: number;
	averageTemperature: number;
	chanceOfRain: number;
	chanceOfSnow: number;
	averageHumidity: number;
	maxWindSpeed: number;
	uvIndex: number;
};

export type HourWeather = {
	time: string;
	iconUrl: string;
	code: number;
	temperature: number;
	uvIndex: number;
	chanceOfRain: number;
};
