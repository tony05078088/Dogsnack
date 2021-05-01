<template>
  <div class="checkoutPage">
    <div>Checkout Page</div>
    <div v-if="ingredients.length > 0">
      <el-table 
      :data="ingredients" 
      border 
      style="width: 100%">
        <el-table-column prop="name" label="Item Name" width="180">
        </el-table-column>
        <el-table-column prop="price" label="Price" width="180">
        </el-table-column>
        <el-table-column prop="quantity" label="Quantity"></el-table-column>
      </el-table>
      <p>Toal Amount to Paid: ${{ totalAmount }}</p>
      <el-button type="primary" @click="GoCheckout">CheckOut</el-button>
    </div>
    <div v-else class="noItems">
          <el-table :data="ingredients" border style="width: 100%" empty-text="No data">
        <el-table-column prop="name" label="Item Name" width="180">
        </el-table-column>
        <el-table-column prop="price" label="Price" width="180">
        </el-table-column>
        <el-table-column prop="quantity" label="Quantity"> </el-table-column>
      </el-table>
           <el-button type="primary" @click="GoCheckout">Back to Store</el-button>
    </div>

    <el-dialog
  title="CheckoutPage"
  :visible.sync="dialogVisible"
  width="30%"
  :before-close="handleClose">
  <span>Will be redirected to Payment</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">Cancel</el-button>
    <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>
  </span>
</el-dialog>
  </div>
</template>

<script>
export default {
  data() {
  return {
     dataToSubmit: {},
     dialogVisible:false
   }
  },
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
      if (this.totalAmount === 0) {
        console.log('no items')
        this.$router.push('/ingredient')
      } else {
        console.log('買東西囉')
        this.dialogVisible = true
      }
    },
    handleClose(done) {
      console.log(done)
      this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
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
  //min-height: 300px;
  height: 100%;
  .items {
    display: flex;
    flex-direction: column;
    min-height: 40%;
    margin-top: 5%;
  }
  button {
    width: 100%;
    //position: absolute;
    // bottom: 0%;
    // left: 50%;
    // transform: translateX(-50%);
  }
  p {
    min-height: 40%;
    height: 40%;
  }
  .noItems {
    min-height: 40%;
    height: 50%;
  }
   .el-table {
    flex: 0 1 auto;
  }
}
</style>
