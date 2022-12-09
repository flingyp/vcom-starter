import { App } from 'vue'
import YButton from './button/YButton.vue'

export { YButton }
export default {
  install(app: App) {
    app.component(YButton.name, YButton)
  }
}
