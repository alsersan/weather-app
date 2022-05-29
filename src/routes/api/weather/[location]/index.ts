import type { RequestHandler } from '@sveltejs/kit';
import type {
	ApiData,
	CurrentWeather,
	DayWeather,
	HourWeather,
	DayForecast,
	WeatherForecast
} from '$models/weather-data.model';

type Params = { location: string };
type OutputType = ApiData;

export const get: RequestHandler<Params, OutputType> = async ({ params }) => {
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
			'X-RapidAPI-Key': import.meta.env.VITE_RAPIDAPI_KEY
		}
	};
	const response = await fetch(
		`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${params.location}&days=3`,
		options
	)
		.then((res) => res.json())
		.then((res): ApiData => {
			const { location, current, forecast } = res;

			// Current weather
			const { condition, feelslike_c, humidity, temp_c, wind_kph } = current;
			const { text, icon } = condition;
			const { country, name, region, localtime } = location;
			const currentWeather: CurrentWeather = {
				city: name,
				region,
				country,
				localTime: localtime,
				description: text,
				iconUrl: icon,
				temperature: temp_c,
				feelsLike: feelslike_c,
				humidity,
				windSpeed: wind_kph
			};

			//Weather forecast
			const { forecastday } = forecast;
			const weatherForecast: WeatherForecast = forecastday.map((day: any): DayForecast => {
				const { day: dayWeather, hour: hourWeather } = day;
				const processedDayWeather: DayWeather = {
					description: dayWeather.condition.text,
					iconUrl: dayWeather.condition.icon,
					code: dayWeather.condition.code,
					maxTemperature: dayWeather.maxtemp_c,
					minTemperature: dayWeather.mintemp_c,
					averageTemperature: dayWeather.avgtemp_c,
					chanceOfRain: dayWeather.daily_chance_of_rain,
					chanceOfSnow: dayWeather.daily_chance_of_snow,
					averageHumidity: dayWeather.avghumidity,
					maxWindSpeed: dayWeather.maxwind_kph,
					uvIndex: dayWeather.uv
				};
				const processedHourWeather: HourWeather[] = hourWeather.map(
					(hour: any): HourWeather => ({
						time: hour.time.split(' ')[1],
						iconUrl: hour.condition.icon,
						code: hour.condition.code,
						temperature: hour.temp_c,
						uvIndex: hour.uv,
						chanceOfRain: hour.chance_of_rain
					})
				);
				return {
					date: day.date,
					day: processedDayWeather,
					hour: processedHourWeather
				};
			});

			// Complete weather object
			return {
				current: currentWeather,
				forecast: weatherForecast
			};
		});
	return {
		status: 200,
		body: response
	};
};
