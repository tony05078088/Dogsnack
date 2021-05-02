<template>
  <div>
    <section class="login-block">
      <div class="container">
        <div class="row">
          <div class="col-md-4 login-sec">
            <h2 v-if="signInOrRegister" class="text-center">SignIn Now</h2>
            <h2 v-else class="text-center">Register Now</h2>
            <form class="login-form" @submit.prevent="onSubmit">
              <div class="form-group">
                <label for="exampleInputEmail1" class="text-uppercase"
                  >Email</label
                >
                <input
                  type="text"
                  class="form-control"
                  v-model="Email"
                  placeholder="Username"
                />
              </div>

              <div class="form-group">
                <label for="exampleInputPassword1" class="text-uppercase"
                  >Password</label
                >
                <input
                  type="password"
                  class="form-control"
                  v-model="password"
                  autocomplete="on"
                  placeholder="password"
                />
              </div>

              <div class="form-check">
                <label class="form-check-label">
                  <input type="checkbox" class="form-check-input" />
                  <small>Remember Me</small>
                </label>
                <button type="submit" class="btn btn-login float-right">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div class="col-md-8 banner-sec">
            <div
              id="carouselExampleIndicators"
              class="carousel slide"
              data-ride="carousel"
            >
              <div class="carousel-inner" role="listbox">
                <div class="carousel-item active">
                  <img
                    class="d-block img-fluid"
                    src="https://static.pexels.com/photos/33972/pexels-photo.jpg"
                    alt="First slide"
                  />
                  <div class="carousel-caption d-none d-md-block">
                    <div class="banner-text">
                      <h2>To Track Your Order</h2>
                      <p>In order to track your order, please Login Now!</p>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block img-fluid"
                    src="https://images.pexels.com/photos/7097/people-coffee-tea-meeting.jpg"
                    alt="First slide"
                  />
                  <div class="carousel-caption d-none d-md-block">
                    <div class="banner-text">
                      <h2>To Track Your Order</h2>
                      <p>
                        To track your order, please enter your order number and
                        zip code below
                      </p>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block img-fluid"
                    src="https://images.pexels.com/photos/872957/pexels-photo-872957.jpeg"
                    alt="First slide"
                  />
                  <div class="carousel-caption d-none d-md-block">
                    <div class="banner-text">
                      <h2>This is Heaven</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: ["authWay"],
  data() {
    return {
      Email: "",
      password: ""
    };
  },
  methods: {
    onSubmit() {
      const formData = {
        email: this.Email,
        password: this.password
      };
      this.$emit("auth", formData);
    }
  },
  computed: {
    signInOrRegister() {
      if (this.authWay === "/signin") {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>

<style scoped>
@import url("//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css");
.login-block {
  background: #de6262; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #ffb88c,
    #de6262
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #ffb88c,
    #de6262
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  float: left;
  width: 100%;
  padding: 50px 0;
}
.banner-sec {
  background: url(https://static.pexels.com/photos/33972/pexels-photo.jpg)
    no-repeat left bottom;
  background-size: cover;
  min-height: 500px;
  border-radius: 0 10px 10px 0;
  padding: 0;
}
.container {
  background: #fff;
  border-radius: 10px;
  box-shadow: 15px 20px 0px rgba(0, 0, 0, 0.1);
}
.carousel-inner {
  border-radius: 0 10px 10px 0;
}
.carousel-caption {
  text-align: left;
  left: 5%;
}
.login-sec {
  padding: 50px 30px;
  position: relative;
}
.login-sec .copy-text {
  position: absolute;
  width: 80%;
  bottom: 20px;
  font-size: 13px;
  text-align: center;
}
.login-sec .copy-text i {
  color: #feb58a;
}
.login-sec .copy-text a {
  color: #e36262;
}
.login-sec h2 {
  margin-bottom: 30px;
  font-weight: 800;
  font-size: 30px;
  color: #de6262;
}
.login-sec h2:after {
  content: " ";
  width: 100px;
  height: 5px;
  background: #feb58a;
  display: block;
  margin-top: 20px;
  border-radius: 3px;
  margin-left: auto;
  margin-right: auto;
}
.btn-login {
  background: #de6262;
  color: #fff;
  font-weight: 600;
}
.banner-text {
  width: 70%;
  position: absolute;
  bottom: 40px;
  padding-left: 20px;
}
.banner-text h2 {
  color: #fff;
  font-weight: 600;
}
.banner-text h2:after {
  content: " ";
  width: 100px;
  height: 5px;
  background: #fff;
  display: block;
  margin-top: 20px;
  border-radius: 3px;
}
.banner-text p {
  color: #fff;
}
</style>
