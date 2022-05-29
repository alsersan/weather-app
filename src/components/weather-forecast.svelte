<script lang="ts">
	import type { WeatherForecast } from '$models/weather-data.model';

	export let sizePercentage: string;
	export let weatherForecast: WeatherForecast;
</script>

<section style="--sizePercentage: {sizePercentage}" class="weather-forecast">
	<div class="date-container">
		<span class="date-container__day">Today, 25 May</span>
		<span class="date-container__day">Thr, 26 May</span>
		<span class="date-container__day">Fri, 27 May</span>
	</div>
	<ul class="forecast-container">
		{#each weatherForecast[0].hour as day}
			<li class="forecast-hour">
				<span class="forecast-hour__time">{day.time}</span>
				<img src={day.iconUrl} alt="icon" />
				<span class="forecast-hour__temperature">{day.temperature} ºC</span>
			</li>
		{/each}
	</ul>
</section>

<style lang="postcss">
	.weather-forecast {
		height: var(--sizePercentage);
		padding: 1rem;
	}

	.date-container {
		display: flex;
		justify-content: space-between;

		&__day {
			display: flex;
			flex-grow: 1;
			justify-content: center;
		}
	}

	.forecast-container {
		display: flex;
		gap: 10px;
		margin: 2rem 0;
		padding: 1rem 0;
		overflow-x: auto;
	}

	.forecast-hour {
		height: 9rem;
		min-width: 6rem;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
		border-radius: 10px;
		box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
		background-color: rgba(255, 255, 255, 0.4);

		&__time {
			color: gray;
		}

		&__temperature {
			font-weight: bold;
		}
	}
</style>
