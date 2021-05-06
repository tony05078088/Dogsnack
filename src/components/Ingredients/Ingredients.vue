<template>
  <div class="dogsbone">
    <price-filter @priceRangeChange="changeDisplayGoods" />
    <app-ingredient
      v-for="ingredient in displayGoods"
      :key="ingredient.id"
      :ingredient="ingredient"
    ></app-ingredient>
  </div>
</template>

<script>
import Ingredient from "./Ingredient.vue";
import Filter from "./Filter";
export default {
  components: {
    appIngredient: Ingredient,
    PriceFilter: Filter
  },
  data() {
    return {
      min: null,
      max: null
    };
  },
  computed: {
    ingredients() {
      return this.$store.getters.ingredients;
    },
    displayGoods() {
      const displayItem = this.ingredients.filter(el => {
        return el.price > this.min && el.price < this.max;
      });
      if (!this.min && !this.max) {
        return this.ingredients;
      } else {
        return displayItem;
      }
    }
  },
  methods: {
    changeDisplayGoods(min, max) {
      this.min = min;
      this.max = max;
    }
  }
};
</script>

<style scoped>
.dogsbone {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.ivu-slider {
  width: 100%;
}
</style>
