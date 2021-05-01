<template>
  <div class="checkoutPage">
    <div>Checkout Page</div>
    <div v-if="ingredients.length > 0" class="checkout">
      <el-table :data="ingredients" border style="width: 100%">
        <el-table-column prop="name" label="Item Name" width="180">
        </el-table-column>
        <el-table-column prop="price" label="Price" width="180">
        </el-table-column>
        <el-table-column prop="quantity" label="Quantity"> </el-table-column>
      </el-table>
      <p>Toal Amount to Paid: ${{ totalAmount }}</p>
      <el-button type="primary" @click="GoCheckout">CheckOut</el-button>
    </div>
    <div v-else class="noItems">
      <p>NOItems</p>
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
  methods: {
    GoCheckout() {
      console.log("ok");
    }
  }
};
</script>

<style lang="scss" scoped>
.checkoutPage {
  display: flex;
  flex-direction: column;
  .el-table {
    flex: 0 1 auto;
  }
}
</style>
