<template>
  <div class="sidenav">
 <h1>Shipping,Pick Up in Store & More</h1>
 <div class="body">
   <h4>Due to Convid-19,<strong>we are experiencing delays in shipping so your order may take longer than the usual to ship</strong></h4>
</div>
<iframe src="https://giphy.com/embed/xTiTnuBIxxVApUq4so" width="439" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
  <div>
  <router-link tag="button" class="btn btn-primary" to="/ingredient">Shop Now!</router-link>
  </div>
  </div>
</template>

<style scoped>
h1 {
    font-weight: 700;
}
.body {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    justify-content: center;
}
div>iframe {
    padding-top: 30px;
}
</style>
