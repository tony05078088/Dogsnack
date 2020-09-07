<template>
  <div class="card" style="width: 18rem;">
  <img :src="ingredient.src" alt="dogsnack" class="card-img-top">
  <div class="card-body">
    <p class="card-text">Goods Name:{{ ingredient.name }}</p>
    <p class="card-text2"> <strong>List Price: ${{ ingredient.listprice }}</strong></p>
    <p class="card-text"> <small>Price: ${{ ingredient.price }}</small></p>
    <p class="card-text"> <small> You Save: {{ (disCountRate) }}%  </small></p>
    <div class="shopping-cart">
     <div class="pull-left">
    <input
                            type="number"
                            class="input-control"
                            placeholder="Quantity"
                            v-model="quantity"
                            :class="{danger: insufficientFunds}"
                    >
  </div>
  <div class="pull-right">
                    <button
                            class="btn btn-success"
                            @click="AddCart"
                            :disabled=" +quantity <= 0 || !Number.isInteger(+quantity)"
                    >{{ 'AddToCart' }}
                    </button>
                </div>
  </div>
  </div>
</div>
</template>

<style scoped>
    .danger {
        border: 1px solid red;
    }
    .card-img-top {
     height: 286px
   }
   .shopping-cart {
     display: flex;
     justify-content : space-between;
   }
   .pull-left {
     float: left!important;
     padding-right:3px
   }
   pull-right {
     float: right!important
   }
    .card {
    margin: 5px
   }
   .card-text2 {
     text-decoration: line-through;
     text-shadow: 0 0 black;
   }
   .input-control {
    border: 1px solid transparent;
    display: block;
    width: 100%;
    height: 34px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: 1px 1px rgba(0,0,0,.075)
   }
</style>
<script>
export default {
  props: ['ingredient'],
  data () {
    return {
      quantity: 0
    }
  },
  computed: {
    funds () {
      return this.$store.getters.funds
    },
    insufficientFunds () {
      return this.quantity * this.ingredient.price > this.funds
    },
    disCountRate () {
      return Math.round(((this.ingredient.listprice - this.ingredient.price) / (this.ingredient.listprice) * 100))
    }
  },
  methods: {
    AddCart () {
      const order = {
        ingredientId: this.ingredient.id,
        ingredientPrice: this.ingredient.price,
        quantity: +this.quantity
      }
      this.$store.dispatch('AddCart', order)
      this.quantity = 0
    }
  }
}
</script>
