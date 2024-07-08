import { createRouter, createWebHistory } from 'vue-router'
import TheHome from '../pages/TheHome.vue'
import TheCocktail from '../pages/TheCocktail.vue'
import CocktailsRandom from '../pages/CocktailsRandom.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TheHome
    },
    {
      path: '/cocktails/:rid',
      name: 'cocktail',
      component: TheCocktail
    },
    {
      path: '/random',
      name: 'cocktailRandom',
      component: CocktailsRandom
    },
  ]
})

export default router
