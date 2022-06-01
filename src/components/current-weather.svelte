<script lang="ts">
	import { Droplet } from 'lucide-svelte';
	import { Wind } from 'lucide-svelte';
	import type { CurrentWeather } from '$models/weather-data.model';
	import { weatherCodesMapping } from '$utils/weather-codes-mapping';
	export let sizePercentage: string;
	export let currentWeather: CurrentWeather;
	const imageName = weatherCodesMapping[currentWeather.code][currentWeather.dayOrNight];
</script>

<section style="--sizePercentage: {sizePercentage}" class="current-weather">
	<img
		class="current-weather__icon"
		src={`/images/${imageName}.webp`}
		alt={`${currentWeather.description} icon`}
	/>
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
		justify-content: center;
		gap: 2rem;

		&__icon {
			height: 15rem;
			filter: drop-shadow(1rem 1rem 2rem rgba(0, 0, 0, 0.2));
			margin-bottom: 2rem;
		}

		&__temperature {
			font-size: 5rem;
			font-weight: bold;
		}

		&__icon-wrapper {
			display: flex;
			justify-content: space-between;
			width: 45%;
		}

		&__icon-container {
			display: flex;
			align-items: center;
			gap: 0.5rem;
			font-size: 1.4rem;
		}
	}
</style>
