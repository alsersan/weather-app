<script lang="ts">
	import { onMount } from 'svelte';
	import { getRealtimeWeather } from '$services/get-weather.service';
	import { currentWeather } from '$store';
	import CurrentWeather from '$components/current-weather.svelte';
	import WeatherForecast from '$components/weather-forecast.svelte';
	import Location from '$components/location.svelte';

	onMount(() => {
		const currentWeatherData = getRealtimeWeather();
		currentWeather.set(currentWeatherData);
	});
</script>

<div class="weather-container">
	<Location sizePercentage="10%" />
	<CurrentWeather sizePercentage="55%" />
	<WeatherForecast sizePercentage="35%" />
</div>

<style lang="postcss">
	.weather-container {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
	}
</style>
