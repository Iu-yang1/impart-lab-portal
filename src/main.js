import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './common/router'
import i18n from "./common/i18n.js";
import loadFont from "./common/fontLoader.js";

loadFont()

const app = createApp(App)
app.use(router)
app.use(i18n)

app.mount('#app')
