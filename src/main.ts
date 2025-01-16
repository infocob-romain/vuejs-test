import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// Écoute les changements de route pour mettre à jour le titre
router.afterEach((to) => {
  const defaultTitle = 'Mon Application'; // Titre par défaut si aucun titre n'est défini
  document.title = (to.meta.title ?? defaultTitle) as string; // Utilisation de l'opérateur de coalescence nulle
})

app.mount('#app')
