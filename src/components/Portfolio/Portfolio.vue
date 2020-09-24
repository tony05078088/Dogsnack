<template>
    <div class="dogsbone">
        <app-ingredient v-for="ingredient in ingredients"  :key="ingredient.id" :ingredient="ingredient"></app-ingredient>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Ingredient from './Ingredient.vue'

export default {
  computed: {
    ...mapGetters({
      ingredients: 'ingredientPortfolio' // 在modules裡的portfolio,將ingredient資料下載至此
    }),
    ingredients () {
      console.log(this.$store.getters)
      return this.$store.getters.ingredientPortfolio
    }
  },
  components: {
    appIngredient: Ingredient
  }
}
</script>

<style scoped>
.dogsbone{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
