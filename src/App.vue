<template>
	<img alt="Vue logo" src="./assets/logo.png" />

	<bread-crumbs />

	<router-view />
</template>

<script setup lang="ts">
	import BreadCrumbs from './components/BreadCrumbs.vue'
</script>
