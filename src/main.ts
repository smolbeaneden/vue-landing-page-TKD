import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';
// import Toast from 'primevue/toast'; // Import the Toast component


import App from './App.vue'
import router from './router'
import VueGtag from "vue-gtag-next";

const app = createApp(App)

app.use(VueGtag, {
  property: {
    id: "G-BV37MYV1NK"
  }
});
app.use(createPinia());
app.use(PrimeVue);
app.use(ToastService); // Add the ToastService
// app.component('Toast', Toast); // Register the Toast component globally.
app.use(router)




app.mount('#app')

