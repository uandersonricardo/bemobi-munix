import './assets/main.css'
import 'vue-toastification/dist/index.css'

import { createApp } from 'vue'
import Toast, { POSITION, type PluginOptions } from 'vue-toastification'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(Toast, { position: POSITION.TOP_CENTER } as PluginOptions)

app.mount('#app')
