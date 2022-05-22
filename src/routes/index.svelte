<script lang="ts">
	import { getRealtimeWeather } from '$services/get-weather.service';

	const weatherApiData = getRealtimeWeather();
</script>

<div class="container">
	{#await weatherApiData then weather}
		<h1>{weather.city}</h1>
		<img src={weather.iconUrl} alt={`${weather.description} icon`} />
		<span>{`${weather.description}`}</span>
		<span>{`${weather.temperature} ºC`}</span>
		<span>{`${weather.windSpeed} km/h`}</span>
		<span>{`${weather.humidity} %`}</span>
		<span>Is daytime: {weather.isDaytime}</span>
	{/await}
</div>

<style lang="postcss">
	.container {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
