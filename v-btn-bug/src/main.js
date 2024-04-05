/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'
import { createRouter, createWebHashHistory } from 'vue-router'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

const app = createApp(App)
app.use(createRouter({
  history: createWebHashHistory('/'),
  routes: []
}))

registerPlugins(app)

app.mount('#app')
