<template>
  <div>
    <div class="fa-3x">
      <i v-show="$store.state.isLoading" class="fas fa-sync fa-spin"></i>
    </div>
    <div class="fixImg">
      <div class="img">
        <img
          :src="$store.state.dogpic"
          v-show="!$store.state.isLoading"
          alt="dogPicture"
        />
      </div>
    </div>
    <div class="title">
      <h5>Buy me a treat?</h5>
      <Button
        to="/ingredient"
        size="large"
        icon="ios-cart"
        type="primary"
        shape="circle"
      ></Button>

      <!-- <router-link tag="button" class="btn btn-primary" to="/ingredient"
        >Go!</router-link
      > -->
    </div>
    <breed-menu :breeds="BreedList" @updatePhoto="updateDogPic"></breed-menu>
    <hr />
    <h2>寵物小常識</h2>
    <div class="video">
      <iframe
        v-for="url in urls"
        :key="url"
        class="drink"
        :src="`https://www.youtube.com/embed/${url}`"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script>
import breedMenu from "./UI/BreedsDropdown";
export default {
  components: {
    breedMenu
  },
  data() {
    return {
      BreedList: "",
      urls: ["EhB4IPmzSWQ", "ZC4Xf8txWVo", "7Whc88ilQLI"]
    };
  },
  mounted() {
    this.$store.dispatch("getDogImg");
    this.getBreedsList();
  },
  methods: {
    getResult() {
      this.$store.dispatch("getDogImg");
    },
    async getBreedsList() {
      try {
        const response = await fetch("https://dog.ceo/api/breeds/list/all");
        const responseData = await response.json();
        const responseDataKey = responseData.message;
        this.BreedList = responseData.message;
        const ResponseArray = [];
        for (const key in responseDataKey) {
          ResponseArray.push(key);
        }
        this.BreedList = ResponseArray;
      } catch {
        console.log("err");
      }
    },
    updateDogPic(name) {
      this.$store.dispatch("ChangeDogPhoto", name);
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Grandstander:wght@200&display=swap");
img {
  max-width: 100%;
  height: auto;
  object-fit: cover;
}
.fixImg {
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 500px;
  height: 50%; */
  /* max-width: 800px; */
  max-height: 800px;
  overflow: hidden;
  object-fit: cover;
}
.video {
  margin-top: 30px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.drink {
  width: 33%;
  height: 350px;
}
h2 {
  margin: 30px;
}
h5 {
  margin: 1%;
  text-align: center;
}
.title {
  display: flex;
  justify-content: center;
  align-items: center;
}
@media (max-width: 1282px) {
  .drink {
    width: 100%;
  }
}
</style>
