<script>
	import '../app.css';
	import Notch from '$components/notch.svelte';
	import phone from '$assets/images/iphone12mini.png';
	import { backgroundColor } from '$store';
</script>

<main class={`main ${$backgroundColor === 'dark-gray' ? 'main--white' : 'main--black'}`}>
	<img class="iphone-image" src={phone} alt="Iphone 12 mini frame" />
	<div class={`background-layer background-layer--${$backgroundColor}`} />
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
		z-index: 2;
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
		transition: background-color 500ms;

		&--dark-gray {
			background-color: #232632;
		}
		&--red {
			background-color: red;
		}
		&--blue {
			background-color: red;
		}
	}

	.content {
		width: 370px;
		height: 804px;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 3;
		overflow: hidden;
		border-radius: 45px;
		display: flex;
		flex-direction: column;
	}
</style>
