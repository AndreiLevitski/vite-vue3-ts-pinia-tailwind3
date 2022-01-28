import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from './routes'
import { createPinia } from 'pinia'

const router = createRouter({
	history: createWebHashHistory(),
	routes
})
const app = createApp(App)

app.use(router)
app.use(createPinia())
app.mount('#app')
