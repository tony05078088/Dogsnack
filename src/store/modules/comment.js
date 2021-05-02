// import globalaxios from "axios";
// import Vue from "vue"
// import Vuex from "vuex"
// Vue.use(Vuex);

export default {
  async sendComments (context, data) {
    const CommentData = {
      firstName: data.first,
      lastName: data.last,
      Description: data.desc,
      id: data.id
    }
    const response = await fetch(
      `https://dogsnack-be64d.firebaseio.com/comments/${CommentData.id}.json`,
      {
        method: 'PUT',
        body: JSON.stringify(CommentData)
      }
    )
    console.log(response)
  }
}

// const state = {
//   comment: null
// };

// const actions = {
//   sendComments(commit, data) {
//     console.log(data);
//     const id = data.id;
//     globalaxios
//       .post(`https://dogsnack-be64d.firebaseio.com/comments/${id}.json`, {
//         body: JSON.stringify(data)
//       })
//       .then(res => {
//         console.log(res);
//         commit("sendComment", res);
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   }
// };

// const mutations = {
//   sendComment(state, res) {
//     state.comment = true;
//   }
// };

// export default {
//   actions,
//   state,
//   mutations
// };
