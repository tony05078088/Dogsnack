<template>
   <div>
    <h1>Welcome to Border Collie Paradise </h1>
     <h6> Which one is your favorite dog? </h6>
         <button @click="getResult"> Change Dog!</button>
     <hr>
    <img :src="$store.state.dogpic" alt="dogPicture">
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
  letter-spacing: 5px;
}
img {
  max-width: 100%;
  height: auto;
  object-fit: cover;
  width: 600px;
  height: 500px;
}
.video {
  margin-top: 30px;
  display: flex;
  justify-content: space-around;
}
.drink {
  width: 33%;
  height: 350px;
}
h2 {
  margin: 30px;
}
</style>
