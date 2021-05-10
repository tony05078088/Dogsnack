import axios from "@/components/axios-auth.js";
import globalaxios from "axios";
import Vue from "vue";
import Vuex from "vuex";
import router from "../router";
import Comment from "./modules/comment";
import ingredients from "./modules/ingredients";
import portfolio from "./modules/portfolio";
const url = "https://dog.ceo/api/breeds/image/random";
const urlChange = "https://dog.ceo/api/breed";
const apiKey = "AIzaSyAJD-32GmlamnMcYJ1GcASY1rJ3RBWj1X4";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dogpic: null,
    isLoading: null,
    idToken: null,
    userId: null,
    user: null,
    CommentsArray: []
  },
  mutations: {
    setDogImg(state, response) {
      state.dogpic = response.data.message;
      state.isLoading = null;
    },
    authUser(state, userData) {
      state.idToken = userData.token;
      state.userId = userData.userId;
    },
    storeUser(state, user) {
      state.user = user;
    },
    clearAuthData(state) {
      state.idToken = null;
      state.userId = null;
      alert("Logout Successfully!");
    },
    getComments(state, ResponseArray) {
      state.CommentsArray = ResponseArray;
    }
  },
  actions: {
    getDogImg({ commit, state }) {
      state.isLoading = true;
      globalaxios
        .get(`${url}`)
        .then(response => {
          console.log(response);
          commit("setDogImg", response);
        })
        .catch(err => {
          console.log(err);
        });
    },
    ChangeDogPhoto({ commit, state }, name) {
      state.isLoading = true;
      globalaxios
        .get(`${urlChange}/${name}/images/random`)
        .then(res => {
          console.log(res);
          commit("setDogImg", res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    setLogoutTimer({ commit }, expirationTime) {
      setTimeout(() => {
        commit("clearAuthData");
      }, expirationTime * 1000);
    },
    signup({ commit, dispatch }, authData) {
      axios
        .post(`accounts:signUp?key=${apiKey}`, {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        })
        .then(res => {
          commit("authUser", {
            token: res.data.idToken,
            userId: res.data.localId
          });
          const now = new Date();
          const expirationDate = new Date(
            now.getTime() + res.data.expiresIn * 1000
          );
          localStorage.setItem("token", res.data.idToken);
          localStorage.setItem("userId", res.data.localId);
          localStorage.setItem("expirationDate", expirationDate);
          dispatch("storeUser", authData);
          dispatch("setLogoutTimer", res.data.expiresIn);
        })
        .catch(res => console.log(authData.email, authData.password));
    },
    login({ commit, dispatch }, authData) {
      axios
        .post(
          "accounts:signInWithPassword?key=AIzaSyAJD-32GmlamnMcYJ1GcASY1rJ3RBWj1X4",
          {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true
          },
          {
            headers: {
              "Content-Type": "application/json"
            }
          }
        )
        .then(res => {
          console.log(res);
          commit("authUser", {
            token: res.data.idToken,
            userId: res.data.localId
          });
          const now = new Date();
          const expirationDate = new Date(
            now.getTime() + res.data.expiresIn * 1000
          );
          localStorage.setItem("token", res.data.idToken);
          localStorage.setItem("userId", res.data.localId);
          localStorage.setItem("expirationDate", expirationDate);
          dispatch("setLogoutTimer", res.data.expiresIn);
          router.push("/ingredient");
        })
        .catch(res => console.log(res));
    },
    tryAutoLogin({ commit }) {
      const token = localStorage.getItem("token");
      if (!token) {
        return;
      }
      const expirationDate = localStorage.getItem("expirationDate");
      const now = new Date();
      if (now >= expirationDate) {
        return;
      }
      const userId = localStorage.getItem("userId");
      commit("authUser", {
        token: token,
        userId: userId
      });
    },
    logout({ commit }) {
      commit("clearAuthData");
      localStorage.removeItem("expirationDate");
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
    },
    storeUser({ commit, state }, userData) {
      if (!state.idToken) {
        return;
      }
      console.log(userData);
      globalaxios
        .post("/users.json" + "?auth=" + state.idToken, userData)
        .then(res => console.log(res))
        .catch(error => console.log(error));
    },
    fetchUser({ commit, state }) {
      if (!state.idToken) {
        return;
      }
      globalaxios.get("/users.json" + "?auth=" + state.idToken).then(res => {
        console.log(res);
        const data = res.data;
        const users = [];
        for (const key in data) {
          const user = data[key];
          user.id = key;
          users.push(user);
        }
        console.log(users);
        commit("storeUser", users[0]);
      });
    },
    sendComments(commit, data) {
      console.log(data);
      globalaxios
        .post(
          `https://dogsnack-be64d.firebaseio.com/comments/${data.id}.json`,
          data
        )
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    async fetchComments(context, id) {
      const response = await fetch(
        `https://dogsnack-be64d.firebaseio.com/comments/${id}.json`
      );
      const responseData = await response.json();
      console.log(responseData);
      const ResponseArray = [];
      for (const key in responseData) {
        const res = {
          first: responseData[key].first,
          last: responseData[key].last,
          desc: responseData[key].desc,
          id: responseData[key].id,
          stars: responseData[key].stars
        };
        ResponseArray.push(res);
      }
      console.log(ResponseArray);
      context.commit("getComments", ResponseArray);
    }
  },
  getters: {
    user(state) {
      return state.user;
    },
    isAuthenticated(state) {
      return state.idToken !== null;
    },
    displayComments(state) {
      return state.CommentsArray;
    }
  },
  modules: {
    ingredients,
    portfolio,
    Comments: Comment
  }
});
