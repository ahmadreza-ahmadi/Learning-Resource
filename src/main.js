import './assets/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import BaseButton from './components/base/BaseButton.vue'
import BaseCard from './components/base/BaseCard.vue'

const app = createApp(App)

app.component('BaseButton', BaseButton)
app.component('BaseCard', BaseCard)

app.mount('#app')
