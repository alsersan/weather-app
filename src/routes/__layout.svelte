<script>
	import '../app.css';
	import image from '$assets/images/iphone12mini.png';
</script>

<main>
	<img class="iphone-image" src={image} alt="bla" />
	<div class="background-layer" />
	<div class="content">
		<div class="notch" />
		<slot />
	</div>
</main>

<style lang="postcss">
	main {
		position: relative;
		height: 845px;
		width: 420px;
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
		border-radius: 45px;
		z-index: 1;
		background-color: yellow;
	}

	.notch {
		height: 4.5%;
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
