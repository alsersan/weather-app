<script lang="ts">
	import { getLocation } from '$services/get-location.service';
	import type { Locations } from '$models/location.model';
	import type { WithTarget } from '$models/with-target.model';
	import LocationList from '$components/location-list.svelte';

	let data: Promise<Locations>;
	let timer: ReturnType<typeof setTimeout>;
	let query: string;

	const debounce = (e: WithTarget<KeyboardEvent, HTMLInputElement>) => {
		const value = e.currentTarget.value;
		if (value !== '') {
			clearTimeout(timer);
			timer = setTimeout(async () => {
				data = getLocation(value);
			}, 250);
		}
	};
</script>

<label for="location-search">Enter location</label>
<input id="location-search" bind:value={query} on:keyup={debounce} />
{#await data}
	bla
{:then locations}
	{#if locations}
		<LocationList {locations} />
	{/if}
{/await}
