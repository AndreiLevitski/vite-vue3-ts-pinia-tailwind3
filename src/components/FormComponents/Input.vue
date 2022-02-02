<template>
    <input
            class="form-input"
            type="text"
            :value="modelValue"
            :placeholder="placeholder"
            @input="onInput"
    />
</template>

<script setup lang="ts">
	const { placeholder, modelValue, modelModifiers } = withDefaults(defineProps<{
		placeholder?: string
		modelValue: string
		modelModifiers?: any
	}>(), {
		placeholder: 'Input a value',
		modelModifiers: {}
    })
    const emit = defineEmits<{ (e: 'update:modelValue', value: String): void }>()

    const onInput = (e) => {
		emit('update:modelValue', e.target.value)
    }
</script>
