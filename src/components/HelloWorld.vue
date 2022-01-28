<template>
	<h1 class="text-blue-600">{{ msg }}</h1>

	<p>
		<a href="https://vitejs.dev/guide/features.html" target="_blank">Vite Docs</a>

		<a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
	</p>

	<button type="button" @click="counterStore.increment">
		count is: {{ counterStore.counter }}
	</button>

	<p>
		Edit
		<code>components/HelloWorld.vue</code>
		to test hot module replacement.
	</p>

	<router-view />
</template>

<script setup lang="ts">
	import { useCounterStore } from '../stores/counter'

	defineProps<{ msg: string }>()

	const counterStore = useCounterStore()
</script>

<style scoped>
	a {
		color: #42b983;
	}

	label {
		margin: 0 0.5em;
		font-weight: bold;
	}

	code {
		background-color: #eee;
		padding: 2px 4px;
		border-radius: 4px;
		color: #304455;
	}
</style>
