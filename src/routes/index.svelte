<script lang="ts">
	import { getRealtimeWeather } from '$services/get-weather.service';
	import CurrentWeather from '$components/current-weather.svelte';

	const currentWeatherData = getRealtimeWeather();
</script>

<div class="weather-container">
	<CurrentWeather sizePercentage="60%" data={currentWeatherData} />
	<section class="weather-forecast" />
</div>

<style lang="postcss">
	.weather-container {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	.weather-forecast {
		height: 40%;
	}
</style>
