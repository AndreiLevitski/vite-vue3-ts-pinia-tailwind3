<template>
	<div>Page two works!!!!</div>
	<div>and here: {{ counter.counter }}</div>
</template>

<script setup lang="ts">
	import { useCounterStore } from '../../stores/counter'

	const counter = useCounterStore()
</script>
