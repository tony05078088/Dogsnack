<template>
   <div>
    <h1>Welcome to Border Collie Paradise </h1>
     <h6> Which one is your favorite dog? </h6>
         <button @click="getResult"> Change Dog!</button>
     <hr>
    <img :src="$store.state.dogpic" alt="dogPicture">
    </div>
</template>

<script>
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
</style>
