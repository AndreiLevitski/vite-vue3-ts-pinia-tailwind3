import { defineStore } from 'pinia'

export type CounterState = {
	counter: number
}

export const useCounterStore = defineStore({
	id: 'counterStore',
	state: () =>
		({
			counter: 0
		} as CounterState),

	actions: {
		increment() {
			this.counter++
		}
	}
})
