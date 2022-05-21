<script lang="ts">
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
			'X-RapidAPI-Key': import.meta.env.VITE_WEATHERAPI_KEY
		}
	};
	interface ApiWeather {
		city: string;
		region: string;
		country: string;
		localTime: string;
		temperature: number;
		feelsLike: number;
		humidity: number;
		weather: string;
	}

	const weatherApiData = fetch(
		'https://weatherapi-com.p.rapidapi.com/current.json?q=Madrid',
		options
	)
		.then((res) => res.json())
		.then((res) => {
			console.log(res);
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
			} as ApiWeather;
		});
	// .catch((err) => console.error(err));
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
{#await weatherApiData then weather}
	<p>{weather.city}</p>
{/await}

<style></style>
