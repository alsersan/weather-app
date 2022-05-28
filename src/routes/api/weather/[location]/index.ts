import type { RequestHandler } from '@sveltejs/kit';
import type { WeatherData, ApiData } from '$models/weather-data.model';

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
		.then((res) => {
			console.log(res);
			const { location, current, forecast } = res;
			const { condition, feelslike_c, humidity, temp_c, wind_kph, is_day } = current;
			const { text, icon } = condition;
			const { country, name, region, localtime } = location;
			return {
				current: {
					city: name,
					region,
					country,
					localTime: localtime,
					description: text,
					iconUrl: icon,
					temperature: temp_c,
					feelsLike: feelslike_c,
					humidity,
					windSpeed: wind_kph,
					isDaytime: Boolean(is_day)
				} as WeatherData
			} as ApiData;
		});
	return {
		status: 200,
		body: response
	};
};
