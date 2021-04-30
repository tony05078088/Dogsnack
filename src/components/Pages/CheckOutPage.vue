<template>
  <div class="checkoutPage">
    <div>Checkout Page</div>
    <p v-for="item in ingredients" :key="item.id">
      {{ item.name }} For {{ item.quantity }} Each ${{ item.price }} ＝
      {{ item.price * item.quantity }}
    </p>
    <p>Toal Amount to Paid: ${{ totalAmount }}</p>
  </div>
</template>

<script>
export default {
  props: ["ingredients"],
  computed: {
    EachAmount() {
      console.log(this.ingredients[0].name);
      return this.ingredients.forEach(el => el.name);
    },
    totalAmount() {
      let totalAmount = 0;
      this.ingredients.forEach(element => {
        const EachAmount = element.price * element.quantity;
        totalAmount += EachAmount;
      });
      return totalAmount;
    }
  }
};
</script>

<style lang="scss" scoped>
.checkoutPage {
  display: flex;
  flex-direction: column;
}
</style>
