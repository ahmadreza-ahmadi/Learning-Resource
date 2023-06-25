import './assets/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import BaseButton from './components/base/BaseButton.vue'
import BaseCard from './components/base/BaseCard.vue'
import BaseDialog from './components/base/BaseDialog.vue'

const app = createApp(App)

app.component('BaseButton', BaseButton)
app.component('BaseCard', BaseCard)
app.component('BaseDialog', BaseDialog)

app.mount('#app')
