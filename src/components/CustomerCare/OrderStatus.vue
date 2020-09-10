<template>
    <div>
       <div class="my-account-header">
        <h1> track your order  </h1>
       <p>Want to find the status of your recent order?</p>
       </div>
       <div class="track-order">
           <h4>track your order</h4>
           <p>Already Have an account with us?</p>
           <p><router-link to="/" >Sign in </router-link>to view your recent order</p>
          <form action="">
            <fieldset>
         <div class="col-lg-3 col-md-6 order-num-input"></div>
         <input type="text" class="input-text" required>
            </fieldset>
          </form>
          <button class="btn-btn-primary">Submit</button>
       </div>
    </div>
</template>

<style scoped>
.my-account-header {
text-align: center;
padding: 2.5rem 0 ;
}
h1 {
 font-weight: 900;
 font-size: 5rem;
 color: #003b49;
}
div>p {
    display: inline-block;
    padding: 3px;
}
.order-num-input input .input-text {
    width: 100%;
    display: block;
    float: left;
}
.btn-btn-primary {
    margin-top: 5px;
}
</style>
