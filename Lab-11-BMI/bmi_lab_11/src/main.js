import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'


// create app then mount all in one line

//create app
const app = createApp(App)

const pinia = createPinia()
app.use(pinia)

//mount configured app in browser
app.mount('#app')
