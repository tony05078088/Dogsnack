<template>
  <div class="card" style="width: 18rem;">
    <img :src="ingredient.src" alt="dogsnack" class="card-img-top" />
    <div class="card-body">
      <p class="card-text">Goods Name:{{ ingredient.name }}</p>
      <p class="card-text2">
        <strong>List Price: ${{ ingredient.listprice }}</strong>
      </p>
      <p class="card-text">
        <small>Price: ${{ ingredient.price }}</small>
      </p>
      <p class="card-text">
        <small> You Save: {{ disCountRate }}% </small>
      </p>
      <div class="shopping-cart">
        <div class="content-center">
          <div class="content-center__upper">
            <input
              type="number"
              class="input-control"
              placeholder="Quantity"
              v-model="quantity"
              :class="{ danger: insufficientFunds }"
            />
            <Button
              type="info"
              shape="circle"
              icon="ios-add"
              @click="AddCart"
              :disabled="
                +quantity <= 0 ||
                  !Number.isInteger(+quantity) ||
                  insufficientFunds
              "
            ></Button>
          </div>
          <div class="content-center__lower">
            <div class="commentsArea">
              <Button
                :size="buttonSize"
                @click="goToComment(ingredient.id, true)"
                icon="ios-create"
                type="success"
                >LeaveComment</Button
              >
              <Button
                :size="buttonSize"
                @click="goToComment(ingredient.id, false)"
                icon="ios-chatboxes"
                type="info"
                >SeeComments</Button
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["ingredient"],
  data() {
    return {
      quantity: 0,
      buttonSize: "small"
    };
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
    insufficientFunds() {
      return this.quantity * this.ingredient.price > this.funds;
    },
    disCountRate() {
      return Math.round(
        ((this.ingredient.listprice - this.ingredient.price) /
          this.ingredient.listprice) *
          100
      );
    }
  },
  methods: {
    AddCart() {
      const order = {
        ingredientId: this.ingredient.id,
        ingredientPrice: this.ingredient.price,
        quantity: +this.quantity
      };
      this.$store.dispatch("AddCart", order);
      this.quantity = 0;
      this.$Message.info("Your Choice Has been added");
    },
    goToComment(id, compose) {
      if (compose) {
        // 要進入的是留評價的畫面
        this.$router.push("/comment/" + id + "/compose");
      } else {
        // 進入的是看評價的畫面
        this.$router.push("/comment/" + id + "/see");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.card:hover {
  box-shadow: 5px 5px 10px teal;
}
.danger {
  border: 1px solid red;
}
.card-img-top {
  height: 286px;
}
.shopping-cart {
  display: flex;
  flex-direction: column;
  justify-content: center;
  .content-center__upper {
    margin-bottom: 5%;
  }
}

.btn:active {
  transform: translateY(2px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}
.card {
  margin: 5px;
}
@media (max-width: 800px) {
  .card {
    width: 50%;
  }
}
.card-text2 {
  text-decoration: line-through;
  text-shadow: 0 0 black;
}
.input-control {
  border: 1px solid transparent;
  display: inline-block;
  width: auto;
  height: 100%;
  padding: 6px 12px;
  margin-right: 5%;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 1px 1px rgba(0, 0, 0, 0.075);
}
.commentsArea {
  width: 100%;
  max-width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    margin: 0.2rem;
    height: 100%;
  }
}
</style>
