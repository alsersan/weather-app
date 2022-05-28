<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { SyncLoader } from 'svelte-loading-spinners';
	import { getRealtimeWeather } from '$services/get-weather.service';
	import { currentWeather, location } from '$store';
	import CurrentWeather from '$components/current-weather.svelte';
	import WeatherForecast from '$components/weather-forecast.svelte';
	import Location from '$components/location.svelte';

	let visible: boolean;

	onMount(() => {
		const currentWeatherData = getRealtimeWeather($location);
		currentWeather.set(currentWeatherData);
	});
</script>

<div class="main-container">
	<Location sizePercentage="10%" />
	{#await $currentWeather}
		<div
			class="await"
			transition:fade
			on:introstart={() => (visible = false)}
			on:outroend={() => (visible = true)}
		>
			<SyncLoader size="100" color="#FF3E00" unit="px" />
		</div>
	{:then weather}
		{#if visible}
			<div class="weather-container" in:fade>
				<CurrentWeather sizePercentage="60%" {weather} />
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
