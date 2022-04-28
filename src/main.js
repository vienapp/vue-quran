import { createApp } from 'vue'
import VueAnimXyz from '@animxyz/vue3'
import '@animxyz/core'
import App from './App.vue'
import router from './router'
import './index.css'

const app = createApp(App)

app.use(router)
app.use(VueAnimXyz)

app.mount('#app')
