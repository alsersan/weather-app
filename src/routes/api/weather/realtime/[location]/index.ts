import type { RequestHandler } from '@sveltejs/kit';
import type { RealtimeWeatherApi } from '$models/realtime-weather-api.model';

type Params = { location: string };
type OutputType = RealtimeWeatherApi;

export const get: RequestHandler<Params, OutputType> = async ({ params }) => {
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
			'X-RapidAPI-Key': import.meta.env.VITE_RAPIDAPI_KEY
		}
	};
	const response = await fetch(
		`https://weatherapi-com.p.rapidapi.com/current.json?q=${params.location}`,
		options
	)
		.then((res) => res.json())
		.then((res) => {
			console.log(res);
			const { location, current } = res;
			const { condition, feelslike_c, humidity, temp_c, wind_kph } = current;
			const { text, icon } = condition;
			const { country, name, region, localtime } = location;
			return {
				city: name,
				region,
				country,
				localTime: localtime,
				weather: text,
				iconUrl: icon,
				temperature: temp_c,
				feelsLike: feelslike_c,
				humidity,
				windSpeed: wind_kph
			} as RealtimeWeatherApi;
		});
	return {
		status: 200,
		body: response
	};
};
