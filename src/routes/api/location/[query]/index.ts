import type { RequestHandler } from '@sveltejs/kit';
import type { Location, Locations } from '$models/location.model';

type Params = { query: string };
type OutputType = Locations;

export const get: RequestHandler<Params, OutputType> = async ({ params }) => {
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
			'X-RapidAPI-Key': import.meta.env.VITE_RAPIDAPI_KEY
		}
	};
	const response = await fetch(
		`https://weatherapi-com.p.rapidapi.com/search.json?q=${params.query}`,
		options
	)
		.then((res) => res.json())
		.then((res): Locations => {
			const locations: Locations = res.map((location: any): Location => {
				const { name, region, country, lat, lon } = location;
				return {
					city: name,
					region,
					country,
					latitude: lat,
					longitude: lon
				};
			});
			return locations;
		});

	return {
		status: 200,
		body: response
	};
};
