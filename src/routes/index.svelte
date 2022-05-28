<script lang="ts">
	import { onMount } from 'svelte';
	import { SyncLoader } from 'svelte-loading-spinners';
	import { getRealtimeWeather } from '$services/get-weather.service';
	import { currentWeather, location } from '$store';
	import CurrentWeather from '$components/current-weather.svelte';
	import WeatherForecast from '$components/weather-forecast.svelte';
	import Location from '$components/location.svelte';

	onMount(() => {
		const currentWeatherData = getRealtimeWeather($location);
		currentWeather.set(currentWeatherData);
	});
</script>

<div class="weather-container">
	<Location sizePercentage="10%" />
	{#await $currentWeather}
		<div class="await">
			<SyncLoader size="100" color="#FF3E00" unit="px" />
		</div>
	{:then weather}
		<CurrentWeather sizePercentage="55%" {weather} />
		<WeatherForecast sizePercentage="35%" />
	{/await}
</div>

<style lang="postcss">
	.weather-container {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	.await {
		display: flex;
		flex-grow: 1;
		justify-content: center;
		align-items: center;
	}
</style>
