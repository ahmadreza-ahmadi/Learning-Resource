import './assets/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import BaseCard from './components/base/BaseCard.vue'

const app = createApp(App)

app.component('BaseCard', BaseCard)

app.mount('#app')
