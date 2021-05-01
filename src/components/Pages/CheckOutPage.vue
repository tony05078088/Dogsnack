<template>
  <div class="checkoutPage">
    <h2>Checkout Page</h2>
    <div v-if="ingredients.length > 0" ref="checkout">
      <p v-for="item in ingredients" :key="item.id" class="items">
        {{ item.name }} For {{ item.quantity }} Each ${{ item.price }} ＝ ${{
          item.price * item.quantity
        }}
      </p>
      <p>Toal Amount to Paid: ${{ totalAmount }}</p>
      <el-button type="primary" @click="GoCheckout">CheckOut</el-button>
    </div>
    <div v-else ref="NoGoods" class="noItems">
      <p>No Items Yet</p>
      <el-button type="primary" @click="GoCheckout">Back to Store</el-button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["ingredients"],
  computed: {
    totalAmount() {
      let totalAmount = 0;
      this.ingredients.forEach(element => {
        const EachAmount = element.price * element.quantity;
        totalAmount += EachAmount;
      });
      return totalAmount;
    }
  },
  mounted() {
    console.log(this.$refs.checkout)
  },
  methods: {
    GoCheckout() {
      console.log(this.$refs)
    }
  }
};
</script>

<style lang="scss" scoped>
.checkoutPage {
  position: relative;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  min-height: 200px;
  height: 50%;
  .items {
    display: flex;
    flex-direction: column;
    min-height: 40%;
    margin-top: 5%;
  }
  button {
    width: 100%;
    position: absolute;
    bottom: 0%;
    left: 50%;
    transform: translateX(-50%);
  }
  p {
    min-height: 40%;
    height: 40%;
  }
  .noItems {
    min-height: 40%;
    height: 50%;
  }
}
</style>
