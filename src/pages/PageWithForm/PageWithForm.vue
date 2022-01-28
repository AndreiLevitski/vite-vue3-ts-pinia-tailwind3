<template>
	<div>Page with form</div>
	<div class="container mx-auto w-full flex">
		<div class="flex flex-col max-w-md gap-4">
			<input class="custom-input" type="text" placeholder="Text input" />

			<select class="custom-input">
				<option>Select some option</option>
				<option>Option 1</option>
				<option>Option 2</option>
			</select>
		</div>
	</div>
</template>

<script setup lang="ts"></script>

<style lang="css" scoped>
	.custom-input {
		@apply rounded focus:border-red-500 focus:shadow-sm focus:shadow-red-600 focus:ring-red-600;
	}
</style>
