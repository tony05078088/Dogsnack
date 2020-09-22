<template>
   <div>
     <div class="fa-3x">
     <i v-show="$store.state.isLoading" class="fas fa-sync fa-spin"></i>
     </div>
    <img :src="$store.state.dogpic" v-show="!$store.state.isLoading" alt="dogPicture">
     <h6> Buy me a treat? </h6>
      <router-link tag="button" class="btn btn-primary" to="/ingredient">Go!</router-link>
     <hr>
     <!-- <div>
         <button class="btn btn-primary" @click="getResult"> Change Dog!</button>
        </div> -->
      <h2> 寵物小常識</h2>
    <div class="video">
      <iframe class="drink" src="https://www.youtube.com/embed/EhB4IPmzSWQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <iframe class="drink" src="https://www.youtube.com/embed/ZC4Xf8txWVo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <iframe class="drink" src="https://www.youtube.com/embed/7Whc88ilQLI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    </div>
</template>

<script>
export default {
  computed: {
    funds () {
      return this.$store.getters.funds
    }
  },
  mounted () {
    this.$store.dispatch('getDogImg')
  },
  methods: {
    getResult () {
      this.$store.dispatch('getDogImg')
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Grandstander:wght@200&display=swap');
h1 {
  background-color: #128ced;
  font-family: 'Grandstander', cursive;
  letter-spacing: 3px;
}
img .drink {
  max-width: 100%;
  height: auto;
  object-fit: cover;
  width: 600px;
  height: 500px;
}
img {
  max-width: 100%;
  height: auto;
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
h6 {
  margin-top: 30px;
}
@media (max-width: 1282px ) {
    .drink {
      width: 100%
    }
  }
</style>
