<script lang="ts">
	import { goto } from '$app/navigation';
	import { getLocation } from '$services/get-weather.service';
	import { onMount } from 'svelte';
	import { location } from '$store';
	import type { Locations } from '$models/location.model';

	let data: Locations;
	onMount(async () => {
		data = await getLocation('Madrid');
	});

	const onClick = (city: string) => {
		location.set(city);
		goto('/');
	};
</script>

{#if data}
	{#each data as location}
		<div on:click={() => onClick(location.city)}>{location.city} {location.region}</div>
	{/each}
{/if}
