<template>
	<div class="text-red-600">
		<router-link class="rounded p-1" :to="ROUTES.ROOT">main page</router-link>
		<router-link :to="ROUTES.PAGE_ONE">Page one</router-link>
		<router-link :to="ROUTES.PAGE_TWO">Page two</router-link>
		<router-link class="bg-lime-500 rounded text-white py-1 px-2" :to="ROUTES.PAGE_FORM">
			Page with form
		</router-link>
	</div>
</template>

<script setup lang="ts">
	import { ROUTES } from '../routes'
</script>
