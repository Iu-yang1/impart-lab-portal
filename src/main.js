import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './common/router'
import i18n from "./common/i18n.js";

const app = createApp(App)
app.use(router)
app.use(i18n)

const ist = app.mount('#app')
