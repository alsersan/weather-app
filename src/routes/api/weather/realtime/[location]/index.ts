import type { RequestHandler } from '@sveltejs/kit';

interface RealtimeWeatherApi {
	city: string;
	region: string;
	country: string;
	localTime: string;
	temperature: number;
	feelsLike: number;
	humidity: number;
	weather: string;
}

type Params = { location: string };
type OutputType = RealtimeWeatherApi;

export const get: RequestHandler<Params, OutputType> = async ({ params }) => {
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
			'X-RapidAPI-Key': import.meta.env.VITE_WEATHERAPI_KEY
		}
	};
	const response = await fetch(
		`https://weatherapi-com.p.rapidapi.com/current.json?q=${params.location}`,
		options
	)
		.then((res) => res.json())
		.then((res) => {
			const { location, current } = res;
			const { condition, feelslike_c, humidity, temp_c } = current;
			const { text } = condition;
			const { country, name, region, localtime } = location;
			return {
				city: name,
				region,
				country,
				localTime: localtime,
				temperature: temp_c,
				feelsLike: feelslike_c,
				humidity,
				weather: text
			} as RealtimeWeatherApi;
		});
	return {
		status: 200,
		body: response
	};
};
