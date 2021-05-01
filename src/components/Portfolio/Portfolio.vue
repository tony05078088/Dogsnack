
<template>
  <div class="portfolioPage">
    <div class="dogsbone">
      <app-ingredient
        v-for="ingredient in ingredients"
        :key="ingredient.id"
        :ingredient="ingredient"
      ></app-ingredient>
    </div>

    <check-out-page
    :ingredients="ingredients"
    ></check-out-page>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Ingredient from './Ingredient.vue'
import CheckOutPage from '../Pages/CheckOutPage'
export default {
  computed: {
    ...mapGetters({
      ingredients: 'ingredientPortfolio' // 在modules裡的portfolio,將ingredient資料下載至此
    }),
    ingredients() {
      console.log(this.$store.getters)
      return this.$store.getters.ingredientPortfolio
    }
  },
  components: {
    appIngredient: Ingredient,
    CheckOutPage
  }
}
</script>

<style lang="scss" scoped>
.portfolioPage {
  display:flex;
.dogsbone {
  width: 80%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
}

</style>
