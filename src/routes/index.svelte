<script lang="ts">
	import { getRealtimeWeather } from '$services/get-weather.service';
	import CurrentWeather from '$components/current-weather.svelte';
	import WeatherForecast from '$components/weather-forecast.svelte';

	const currentWeatherData = getRealtimeWeather();
</script>

<div class="weather-container">
	<CurrentWeather sizePercentage="60%" data={currentWeatherData} />
	<WeatherForecast sizePercentage="40%" />
</div>

<style lang="postcss">
	.weather-container {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
	}
</style>
