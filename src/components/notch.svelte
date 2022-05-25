<script lang="ts">
	import { Signal } from 'lucide-svelte';
	import { BatteryFull } from 'lucide-svelte';
</script>

<div class="notch">
	<div class="notch__icon notch__icon--left">
		<Signal size={25} />
	</div>

	<div class="notch__icon notch__icon--right">
		<BatteryFull size={25} />
	</div>
</div>

<style lang="postcss">
	.notch {
		height: 4.5%;
		position: relative;

		&__icon {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);

			&--left {
				left: 7%;
			}

			&--right {
				right: 7%;
			}
		}
	}
</style>
