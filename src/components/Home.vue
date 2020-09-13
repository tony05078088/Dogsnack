<template>
   <div>
    <h1>Welcome to Border Collie Paradise </h1>
     <h6> Which one is your favorite dog? </h6>
         <button @click="getResult"> Change Dog!</button>
     <hr>
    <img :src="dogpic" alt="">
    </div>
</template>

<script>
import axios from 'axios'
const url = 'https://dog.ceo/api/breeds/image/random'
export default {
  data () {
    return {
      dogpic: null
    }
  },
  computed: {
    funds () {
      return this.$store.getters.funds
    }
  },
  mounted: function () {
    axios
      .get(`${url}`)
      .then(reponse => { this.dogpic = reponse.data.message })
      .catch(err => { console.log(err) })
  },
  methods: {
    getResult () {
      this.dogpic = axios
        .get('https://dog.ceo/api/breeds/image/random')
        .then(reponse => { this.dogpic = reponse.data.message })
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
}
</style>
