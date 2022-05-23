<script lang="ts">
	import { getRealtimeWeather } from '$services/get-weather.service';
	import sunCloud from '$assets/icons/sun-cloud.webp';

	const currentWeatherData = getRealtimeWeather();
</script>

<div class="weather-container">
	<section class="current-weather">
		{#await currentWeatherData then weather}
			<h1>{weather.city}</h1>
			<img class="weather-icon" src={sunCloud} alt={`${weather.description} icon`} />
			<span>{`${weather.description}`}</span>
			<span>{`${weather.temperature} ºC`}</span>
			<span>{`${weather.windSpeed} km/h`}</span>
			<span>{`${weather.humidity} %`}</span>
			<span>Is daytime: {weather.isDaytime}</span>
		{/await}
	</section>
	<section class="weather-forecast" />
</div>

<style lang="postcss">
	.weather-container {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;

		.current-weather {
			height: 60%;
			display: flex;
			flex-direction: column;
			align-items: center;

			.weather-icon {
				height: 150px;
				filter: drop-shadow(10px 10px 20px rgba(0, 0, 0, 0.2));
			}
		}

		.weather-forecast {
			height: 40%;
		}
	}
</style>
