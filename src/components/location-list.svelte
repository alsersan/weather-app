<script lang="ts">
	import type { Locations } from '$models/location.model';
	import { goto } from '$app/navigation';
	import { location } from '$store';

	export let locations: Locations;

	const onClick = (city: string) => {
		location.set(city);
		goto('/');
	};
</script>

{#each locations as location}
	<div on:click={() => onClick(location.city)}>{location.city} {location.region}</div>
{/each}
