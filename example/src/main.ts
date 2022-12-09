import { createApp } from 'vue'
import YButton from '@vcom/core'
import App from './App.vue'

const app = createApp(App)

app.use(YButton)
app.mount('#app')
