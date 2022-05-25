<script lang="ts">
	export let sizePercentage: string;
</script>

<section style="--sizePercentage: {sizePercentage}" class="weather-forecast" />

<style lang="postcss">
	.weather-forecast {
		height: var(--sizePercentage);
	}
</style>
