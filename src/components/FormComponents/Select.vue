<template>
    <select :value="innerValue" required class="form-input" @change="emit('update:modelValue', $event.target.value)">
        <option value="" disabled selected hidden>{{ placeholder }}</option>
        <option v-for="item in items" :key="item.value" :value="item">{{ item.name }}</option>
    </select>
</template>

<script setup lang="ts">
    import { onMounted, PropType, ref, reactive } from 'vue'
	import { FormSelectItem } from './index'

    const { items, placeholder, modelValue } = withDefaults(defineProps<{
		items: FormSelectItem[]
		placeholder?: string
		modelValue: FormSelectItem
	}>(), {
    	placeholder: 'Select an option...'
    })
	const emit = defineEmits<{ (e: 'update:modelValue', value: String): void }>()

    let innerValue: FormSelectItem = ref()
	onMounted(() => {
		if (modelValue && !modelValue.hasOwnProperty('name') && !modelValue.hasOwnProperty('value')) {
			innerValue = modelValue
        }
	})
</script>
