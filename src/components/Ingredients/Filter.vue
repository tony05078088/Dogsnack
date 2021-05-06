<template>
  <keep-alive>
    <div class="card">
      <Card>
        <p slot="title">
          <Icon type="md-pricetags"></Icon>
          Filter
        </p>
        <span>Price Tags</span>
        <Slider v-model="value" :max="150" range @on-change="showMe"></Slider>
      </Card>
    </div>
  </keep-alive>
</template>

<script>
export default {
  data() {
    return {
      value: [20, 100]
    };
  },
  methods: {
    showMe() {
      const min = this.value[0];
      const max = this.value[1];
      this.$emit("priceRangeChange", min, max);
    }
  },
  destroyed() {
    console.log("destroyed!");
  }
};
</script>

<style scoped>
.card {
  margin-right: 1%;
}
</style>
