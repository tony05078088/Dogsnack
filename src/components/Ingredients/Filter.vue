<template>
  <div class="card">
    <Card>
      <p slot="title">
        <Icon type="md-pricetags"></Icon>
        Filter
      </p>
      <span>Price Tags</span>
      <Slider v-model="value" range max=150 @on-change="showMe"></Slider>
    </Card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: [20, 50]
    };
  },
  methods: {
    showMe() {
      const min = this.value[0];
      const max = this.value[1];
      this.$emit("priceRangeChange", min, max);
    }
  }
};
</script>

<style scoped>
.card {
  margin-right: 1%;
}
</style>
