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
		padding: 0.8rem;
	}

	.date-container {
		display: flex;
		justify-content: space-between;

		&__day {
			display: flex;
			flex-grow: 1;
			justify-content: center;
			font-size: 15px;

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
