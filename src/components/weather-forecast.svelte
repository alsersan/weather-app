<script lang="ts">
	export let sizePercentage: string;
</script>

<section style="--sizePercentage: {sizePercentage}" class="weather-forecast">
	<div class="date-container">
		<span class="date-container__day">Today, 25 May</span>
		<span class="date-container__day">Thr, 26 May</span>
		<span class="date-container__day">Fri, 27 May</span>
	</div>
	<div class="forecast-container">
		<div class="forecast-container__hour" />
		<div class="forecast-container__hour" />
		<div class="forecast-container__hour" />
		<div class="forecast-container__hour" />
		<div class="forecast-container__hour" />
		<div class="forecast-container__hour" />
	</div>
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
		gap: 5px;
		margin: 2rem 0;
		padding: 1rem 0;
		overflow-x: auto;

		&__hour {
			height: 9rem;
			min-width: 6rem;
			border: 1px solid black;
			border-radius: 10px;
		}
	}
</style>
