<script lang="ts">
	import { goto } from '$app/navigation';
	import { getLocation } from '$services/get-location.service';
	import { location } from '$store';
	import type { Locations } from '$models/location.model';
	import type { WithTarget } from '$models/with-target.model';

	let data: Locations;
	let timer: ReturnType<typeof setTimeout>;
	let query: string;

	const onClick = (city: string) => {
		location.set(city);
		goto('/');
	};
	const debounce = (e: WithTarget<KeyboardEvent, HTMLInputElement>) => {
		const value = e.currentTarget.value;
		if (value !== '') {
			clearTimeout(timer);
			timer = setTimeout(async () => {
				data = await getLocation(value);
			}, 250);
		}
	};
</script>

<label for="location-search">Enter location</label>
<input id="location-search" bind:value={query} on:keyup={debounce} />
{#if data}
	{#each data as location}
		<div on:click={() => onClick(location.city)}>{location.city} {location.region}</div>
	{/each}
{/if}
