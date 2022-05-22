<script lang="ts">
	import { getRealtimeWeather } from '$services/get-weather.service';

	const weatherApiData = getRealtimeWeather();
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

{#await weatherApiData then weather}
	<p>{weather.city}</p>
{/await}

<style></style>
