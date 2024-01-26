import { createApp } from 'vue'
import App from './App.vue'
import { usePinia } from './pinia'
import router from './router'
import './style.scss'

const app = createApp(App)
const pinia = usePinia()

app.use(pinia)
app.use(router)
app.mount('#app')

