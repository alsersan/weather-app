<script lang="ts">
	import { Droplet } from 'lucide-svelte';
	import { Wind } from 'lucide-svelte';
	import { SyncLoader } from 'svelte-loading-spinners';
	import sunCloud from '$assets/icons/sun-cloud.webp';
	import type { RealtimeWeatherApi } from '$models/realtime-weather-api.model';

	export let sizePercentage: string;
	export let data: Promise<RealtimeWeatherApi>;
</script>

<section style="--sizePercentage: {sizePercentage}" class="current-weather">
	{#await data}
		<div class="spinner">
			<SyncLoader size="100" color="#FF3E00" unit="px" />
		</div>
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

<style lang="postcss">
	.current-weather {
		position: relative;
		height: var(--sizePercentage);
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

	.spinner {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
</style>
