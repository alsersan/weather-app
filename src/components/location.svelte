<script lang="ts">
	import { MapPin, RefreshCw, ChevronDown } from 'lucide-svelte';
	import { currentWeather, location } from '$store';
	import { getRealtimeWeather } from '$services/get-weather.service';
	import type { WithTarget } from '$models/with-target.model';

	export let sizePercentage: string;

	const refreshWeather = (e: WithTarget<MouseEvent, HTMLSpanElement>) => {
		const currentWeatherData = getRealtimeWeather($location);
		currentWeather.set(currentWeatherData);
	};
</script>

<section style="--sizePercentage: {sizePercentage}" class="location">
	<div class="location__wrapper">
		<MapPin size={25} />
		<span class="location__text">{$location}</span>
		<ChevronDown size={15} />
	</div>
	<span on:click={refreshWeather}>
		<RefreshCw size={25} />
	</span>
</section>

<style lang="postcss">
	.location {
		height: var(--sizePercentage);
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 20px;

		&__wrapper {
			display: flex;
			align-items: center;
			gap: 10px;
		}

		&__text {
			font-weight: bold;
		}
	}
</style>
