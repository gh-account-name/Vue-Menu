import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { useScreenStore } from './stores/screenStore'

const app = createApp(App)

app.use(createPinia())
app.use(router)

const screenStore = useScreenStore()
screenStore.startScreenTracking()

app.mount('#app')
