<script>
	import '../app.css';
	import Notch from '$components/notch.svelte';
	import phone from '$assets/images/iphone12mini.png';
	import { gradients } from '$utils/gradients-mapping';
	import { backgroundColor } from '$store';
</script>

<main class={`main ${$backgroundColor === 'dark-gray' ? 'main--white' : 'main--black'}`}>
	<img class="iphone-image" src={phone} alt="Iphone 12 mini frame" />
	<div
		class="background-layer"
		style="--bgColor: {gradients[$backgroundColor]}; --opacity: {$backgroundColor === 'dark-gray'
			? 0
			: 1}"
	/>
	<div class="content">
		<Notch />
		<slot />
	</div>
</main>

<style lang="postcss">
	.main {
		position: relative;
		height: 845px;
		width: 420px;
		transition: color 500ms;

		&--black {
			color: black;
		}

		&--white {
			color: white;
		}
	}

	.iphone-image {
		position: absolute;
		width: 100%;
		height: 100%;
		z-index: 3;
	}

	.background-layer {
		/* screen size of iphone 12 mini */
		width: 375px;
		height: 812px;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		border-radius: 4.5rem;
		z-index: 1;
		background-color: #232632;

		/* Workaround to be able to transition gradients (since background-image is not animatable) */
		&:before {
			content: '';
			position: absolute;
			top: 0px;
			right: 0px;
			bottom: 0px;
			left: 0px;
			z-index: 2;
			opacity: var(--opacity);
			background-image: var(--bgColor);
			transition: opacity 500ms;
		}
	}
	.content {
		width: 370px;
		height: 804px;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 4;
		overflow: hidden;
		border-radius: 45px;
		display: flex;
		flex-direction: column;
	}
</style>
