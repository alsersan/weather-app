<script lang="ts">
	import type { WeatherForecast } from '$models/weather-data.model';

	export let sizePercentage: string;
	export let weatherForecast: WeatherForecast;
	let activeTab = 0;
</script>

<section style="--sizePercentage: {sizePercentage}" class="weather-forecast">
	<ul class="date-container">
		{#each weatherForecast as day, index}
			<li
				class={`date-container__day ${
					index === activeTab ? 'date-container__day--active' : 'date-container__day--inactive'
				}`}
				on:click={() => (activeTab = index)}
			>
				{day.date}
			</li>
		{/each}
	</ul>

	<ul class="forecast-container">
		{#each weatherForecast[activeTab].hour as hour}
			<li class="forecast-hour">
				<span class="forecast-hour__time">{hour.time}</span>
				<img src={hour.iconUrl} alt="icon" />
				<span class="forecast-hour__temperature">{hour.temperature} ºC</span>
			</li>
		{/each}
	</ul>
</section>

<style lang="postcss">
	.weather-forecast {
		height: var(--sizePercentage);
		padding: 1rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 2.5rem;
	}

	.date-container {
		display: flex;
		justify-content: space-between;

		&__day {
			display: flex;
			flex-grow: 1;
			justify-content: center;
			font-size: 1.5rem;

			&--active {
				font-weight: bold;
			}

			&--inactive {
				color: rgba(0, 0, 0, 0.3);
			}
		}
	}

	.forecast-container {
		display: flex;
		gap: 1rem;
		overflow-x: auto;
	}

	.forecast-hour {
		padding: 1rem;
		height: 14rem;
		min-width: 10rem;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
		border-radius: 1rem;
		box-shadow: 0 0 2rem rgba(0, 0, 0, 0.1);
		background-color: rgba(255, 255, 255, 0.4);

		&__time {
			color: gray;
		}

		&__temperature {
			font-weight: bold;
		}
	}
</style>
