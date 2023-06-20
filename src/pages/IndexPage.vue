<template>
	<q-page class="flex flex-center">
		<h1>Hi! I'm home!</h1>
		<img class="absolute-bottom-right" alt="Home logo" src="~assets/_home.png" style="z-index: -1; height: 400px" />
	</q-page>
</template>

<script>
	import { defineComponent } from 'vue';

	export default defineComponent({
		name: 'IndexPage'
	});
</script>
