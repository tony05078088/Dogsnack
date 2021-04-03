<template>
<div class="termcontrol">
    <div class="centerpage">
      <div class="des">
       <section class="box">
         <h1 class="box-title"> How Can We Help You?</h1>
         <p class="box-copy">
             Learn more about our shipping & delivery options, setting up an account, returns & refunds, payment options and more. Can’t find what you’re looking for?
             Contact customer care at 1-888-839-9638 or send us an email.
            </p>
        <button @click="contact" class="btn btn-primary">Contact us </button>
       </section>
      </div>
</div>
</div>
</template>

<script>
export default {
  methods: {
    contact () {
      this.$router.push({ name: 'customercare' })
    }
  }
}
</script>
<style scoped>
.termcontrol {
    display: flex;
    justify-content: center;
}
.centerpage {
  flex-basis: 1;
  position: relative;
}
.box {
    text-align: center;
    height: 60vh;
}
.box-copy {
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 2.4rem;
    padding: 9px 23.7% 0 ;
}
.box-title {
    font-family: sans-serif;
    font-weight: 400;
    font-size: 3rem;
    padding: 15px 25px ;
    color: #000;
    margin-bottom: 10px;
}
/* .sidenav {
  display: inline-block;
  position: absolute;
  height: 35vh;
  width: 160px;
  z-index: 1;
  top: 0;
  left: 14%;
  background-color: #eee;
  overflow-x: hidden;
} */
</style>
