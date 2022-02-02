<template>
	<div>Page with form</div>
	<div class="container mx-auto w-full flex">
		<div class="flex flex-col max-w-md gap-4">
			<Form.Input v-model="inputValue" placeholder="Text input" />

			<Form.Select v-model="selectValue" :items="items"/>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { ref, customRef, computed } from 'vue'
	import * as Form from '../../components/FormComponents'

	const selectValue = customRef((track, trigger) => ({
		get: () => {
			return []
		},
		set: (v) => {
			console.log(v)
		}
	}))
	const items = ref([
		{
			name: 'Option one',
			value: 11
		},
		{
			name: 'Option two',
			value: 22
		}
	])

	const inputValue = computed({
		get: () => {
			return ''
		},
		set: (v) => {
			console.log(v)
		}
	})
</script>
