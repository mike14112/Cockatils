import axios from 'axios'
import { defineStore } from 'pinia'
import { INGREDIENTS_URL } from '@/assets/contstans/api'

export const useRootStore = defineStore('root', {
  state: () => ({
    ingredients: []
  }),
  actions: {
    async getIngredients() {
      const data = await axios.get(INGREDIENTS_URL)
      this.ingredients = data?.data?.drinks

    }
  }
})
