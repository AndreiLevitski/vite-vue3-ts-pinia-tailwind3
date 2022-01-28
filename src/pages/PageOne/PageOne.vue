<template>
	<div>Page one works!!!!</div>
	<div>counter accessed here: {{ counter.counter }}</div>
</template>

<script setup lang="ts">
	import { useCounterStore } from '../../stores/counter'

	const counter = useCounterStore()
</script>
