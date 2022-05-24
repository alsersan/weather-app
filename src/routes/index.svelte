<script lang="ts">
	import { getRealtimeWeather } from '$services/get-weather.service';
	import { Droplet } from 'lucide-svelte';
	import { Wind } from 'lucide-svelte';
	import sunCloud from '$assets/icons/sun-cloud.webp';

	const currentWeatherData = getRealtimeWeather();
</script>

<div class="weather-container">
	<section class="current-weather">
		{#await currentWeatherData}
			<p>Loading...</p>
		{:then weather}
			<h1>{weather.city}</h1>
			<img class="current-weather__icon" src={sunCloud} alt={`${weather.description} icon`} />
			<span class="current-weather__description">{`${weather.description}`}</span>
			<span class="current-weather__temperature">{`${weather.temperature} ºC`}</span>
			<div class="current-weather__icon-wrapper">
				<div class="current-weather__icon-container">
					<Wind size={16} />
					<span>{`${weather.windSpeed} km/h`}</span>
				</div>
				<div class="current-weather__icon-container">
					<Droplet size={16} />
					<span>{`${weather.humidity} %`}</span>
				</div>
			</div>
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
	}
	.current-weather {
		height: 60%;
		display: flex;
		flex-direction: column;
		align-items: center;

		&__icon {
			height: 150px;
			filter: drop-shadow(10px 10px 20px rgba(0, 0, 0, 0.2));
		}

		&__temperature {
			font-size: 50px;
			font-weight: bold;
		}

		&__icon-wrapper {
			display: flex;
			justify-content: space-between;
			width: 40%;
		}

		&__icon-container {
			display: flex;
			align-items: center;
			gap: 5px;
			font-size: 14px;
		}
	}

	.weather-forecast {
		height: 40%;
	}
</style>
