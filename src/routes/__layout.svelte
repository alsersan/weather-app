<script>
	import '../app.css';
	import image from '$assets/images/iphone12mini.png';
</script>

<main>
	<img class="iphone-image" src={image} alt="bla" />
	<div class="content"><slot /></div>
</main>

<style lang="postcss">
	main {
		position: relative;

		.iphone-image {
			width: 420px;
		}
		.content {
			/* screen size of iphone 12 mini */
			width: 375px;
			height: 812px;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			z-index: -1;
			overflow: hidden;
			border-radius: 20px;
		}
	}
</style>
