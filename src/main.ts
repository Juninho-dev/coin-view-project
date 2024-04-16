import { createApp } from 'vue'
import '@/style.css'
import router from '@/routes/index'
import App from '@/App.vue'
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/aura-light-green/theme.css'

const app = createApp(App)

app.use(router)
app.use(PrimeVue)
app.mount('#app')
