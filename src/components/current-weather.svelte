<script lang="ts">
	import { Droplet } from 'lucide-svelte';
	import { Wind } from 'lucide-svelte';
	import type { CurrentWeather } from '$models/weather-data.model';
	import sunCloud from '$assets/icons/sun-cloud.webp';

	export let sizePercentage: string;
	export let currentWeather: CurrentWeather;
</script>

<section style="--sizePercentage: {sizePercentage}" class="current-weather">
	<h1>{currentWeather.city}</h1>
	<img class="current-weather__icon" src={sunCloud} alt={`${currentWeather.description} icon`} />
	<span class="current-weather__description">{`${currentWeather.description}`}</span>
	<span class="current-weather__temperature">{`${currentWeather.temperature} ºC`}</span>
	<div class="current-weather__icon-wrapper">
		<div class="current-weather__icon-container">
			<Wind size={16} />
			<span>{`${currentWeather.windSpeed} km/h`}</span>
		</div>
		<div class="current-weather__icon-container">
			<Droplet size={16} />
			<span>{`${currentWeather.humidity} %`}</span>
		</div>
	</div>
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
</style>
