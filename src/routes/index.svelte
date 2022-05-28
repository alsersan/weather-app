<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { SyncLoader } from 'svelte-loading-spinners';
	import { getWeather } from '$services/get-weather.service';
	import { weatherData, location } from '$store';
	import CurrentWeather from '$components/current-weather.svelte';
	import WeatherForecast from '$components/weather-forecast.svelte';
	import Location from '$components/location.svelte';

	let isWeatherLoaded: boolean;

	onMount(() => {
		const data = getWeather($location);
		weatherData.set(data);
	});
</script>

<div class="main-container">
	<Location sizePercentage="10%" />
	{#await $weatherData}
		<div
			class="await"
			transition:fade
			on:introstart={() => (isWeatherLoaded = false)}
			on:outroend={() => (isWeatherLoaded = true)}
		>
			<SyncLoader size="100" color="#FF3E00" unit="px" />
		</div>
	{:then weather}
		{#if isWeatherLoaded}
			<div class="weather-container" in:fade>
				<CurrentWeather sizePercentage="60%" currentWeather={weather.current} />
				<WeatherForecast sizePercentage="40%" />
			</div>
		{/if}
	{/await}
</div>

<style lang="postcss">
	.main-container {
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

	.weather-container {
		display: flex;
		flex-direction: column;
		flex-grow: 1;
	}
</style>
