<template>
<div class="dogsbone">
        <app-ingredient v-for="ingredient in ingredients"  :key="ingredient.id" :ingredient="ingredient"></app-ingredient>
    </div>
</template>

<script>
import Ingredient from './Ingredient.vue'

export default {
  components: {
    appIngredient: Ingredient
  },
  computed: {
    ingredients () {
      return this.$store.getters.ingredients
    }
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
