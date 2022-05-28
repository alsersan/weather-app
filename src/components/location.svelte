<script lang="ts">
	import { MapPin, RefreshCw, ChevronDown } from 'lucide-svelte';

	export let sizePercentage: string;
</script>

<section style="--sizePercentage: {sizePercentage}" class="location">
	<div class="location__wrapper">
		<MapPin size={25} />
		<span class="location__text">Madrid</span>
		<ChevronDown size={15} />
	</div>

	<RefreshCw size={25} />
</section>

<style lang="postcss">
	.location {
		height: var(--sizePercentage);
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 20px;

		&__wrapper {
			display: flex;
			align-items: center;
			gap: 10px;
		}

		&__text {
			font-weight: bold;
		}
	}
</style>
