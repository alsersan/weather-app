<script lang="ts">
	import { MapPin, RefreshCw, ChevronDown } from 'lucide-svelte';
	import { weatherData, location } from '$store';
	import { getWeather } from '$services/get-weather.service';
	import type { WithTarget } from '$models/with-target.model';

	export let sizePercentage: string;
	let animate = false;
	let timeout: ReturnType<typeof setTimeout>;

	const refreshWeather = (e: WithTarget<MouseEvent, HTMLSpanElement>) => {
		// Clean any previous timeout
		if (animate) clearTimeout(timeout);

		// Run the event
		animate = true;
		timeout = setTimeout(() => (animate = false), 500);
		const data = getWeather($location);
		weatherData.set(data);
	};
</script>

<section style="--sizePercentage: {sizePercentage}" class="location">
	<div class="location__wrapper">
		<MapPin size={25} />
		<span class="location__text">{$location}</span>
		<ChevronDown size={15} />
	</div>
	<span
		on:click={refreshWeather}
		class={`location__refresh ${animate ? 'location__refresh--animate' : ''}`}
	>
		<RefreshCw size={25} />
	</span>
</section>

<style lang="postcss">
	.location {
		height: var(--sizePercentage);
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 2rem;

		&__wrapper {
			display: flex;
			align-items: center;
			gap: 1rem;
		}

		&__text {
			font-weight: bold;
		}

		&__refresh {
			height: 25px;

			&--animate {
				animation: spin 500ms linear infinite;
			}
		}
	}

	@keyframes spin {
		from {
			transform: rotate(0deg);
		}

		to {
			transform: rotate(360deg);
		}
	}
</style>
