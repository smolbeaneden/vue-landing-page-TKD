import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import VueGtag from 'vue-gtag'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(VueGtag, {
  config: { id: 'G-BV37MYV1NK' } // Replace with your Measurement ID
})

app.mount('#app')

