<script lang="ts">
	import { fade } from 'svelte/transition';
	import { getLocation } from '$services/get-location.service';
	import type { Locations } from '$models/location.model';
	import type { WithTarget } from '$models/with-target.model';
	import LocationList from '$components/location-list.svelte';

	let data: Promise<Locations>;
	let timer: ReturnType<typeof setTimeout>;
	let isLoaded = false;
	let query: string;

	const debounce = (e: WithTarget<KeyboardEvent, HTMLInputElement>) => {
		const value = e.currentTarget.value;
		if (value !== '') {
			clearTimeout(timer);
			timer = setTimeout(async () => {
				data = getLocation(value);
			}, 400);
		}
	};
</script>

<label for="location-search">Enter location</label>
<input id="location-search" bind:value={query} on:keyup={debounce} />
{#await data}
	<div
		transition:fade
		on:introstart={() => (isLoaded = false)}
		on:outroend={() => (isLoaded = true)}
	>
		bla
	</div>
{:then locations}
	{#if locations && isLoaded}
		<div in:fade>
			<LocationList {locations} />
		</div>
	{/if}
{/await}
