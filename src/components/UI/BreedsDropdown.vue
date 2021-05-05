<template>
  <div>
    <Dropdown
      style="margin-left: 20px"
      trigger="click"
      @on-click="setMe"
      placement="bottom"
    >
      <Button type="info" shape="circle" icon="ios-search">
        {{ selectedBreed }}
        <Icon type="ios-arrow-down"></Icon>
      </Button>
      <DropdownMenu slot="list">
        <DropdownItem v-for="breed in breeds" :key="breed" :name="breed">{{
          breed
        }}</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  </div>
</template>
<script>
export default {
  props: ["breeds"],
  data() {
    return {
      selectedBreed: "Choose Your Favorite Breed"
    };
  },
  methods: {
    setMe(name) {
      // console.log(name);
      this.selectedBreed = name;
      this.$emit("updatePhoto", name);
    }
  }
};
</script>

<style>
.ivu-dropdown-menu {
  max-height: 500px;
  overflow: auto;
}
</style>
