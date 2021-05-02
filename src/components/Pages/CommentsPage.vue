<template>
  <section>
    <base-card v-if="!needGetComments">
      <div class="title">
        <i class="el-icon-arrow-left" @click="goback"></i>
        <h2>Leave a Comment</h2>
      </div>
      <comment-form @save-data="sendData"></comment-form>
      <el-dialog
        title="Comment"
        :visible.sync="centerDialogVisible"
        width="30%"
        center
      >
        <span>Leave Comment Successfully</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="centerDialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="centerDialogVisible = false"
            >Confirm</el-button
          >
        </span>
      </el-dialog>
    </base-card>
    <base-forum v-else v-loading="loading">
      <div class="title">
        <i class="el-icon-arrow-left" @click="goback"></i>
        <h2>See Comments from Customers</h2>
      </div>
      <each-comment
        v-for="comment in totalComments"
        :key="comment.id"
        :comment="comment"
      ></each-comment>
    </base-forum>
  </section>
</template>

<script>
import CommentForm from "../Ingredients/Comments.vue";
import EachComment from "../Ingredients/CustomersComments.vue";
export default {
  props: ["id"],
  data() {
    return {
      loading: true,
      centerDialogVisible: false
    };
  },
  components: {
    CommentForm,
    EachComment
  },
  methods: {
    goback() {
      console.log("ok");
      this.$router.replace("/ingredient");
    },
    sendData(data) {
      data.id = this.id;
      this.centerDialogVisible = true;
      this.$store.dispatch("sendComments", data);
    },
    async getComments() {
      if (!this.needGetComments) {
        return;
      }
      try {
        await this.$store.dispatch("fetchComments", this.id);
      } catch (err) {
        console.log("Fail to getComments" + err);
      }
      setTimeout(() => {
        this.loading = false;
      }, 500);
    }
  },
  computed: {
    totalComments() {
      return this.$store.getters.displayComments;
    },
    needGetComments() {
      if (this.$route.params.value === "see") {
        return true;
      } else {
        return false;
      }
    }
  },
  created() {
    this.getComments();
  }
};
</script>

<style lang="scss" scoped>
.el-icon-arrow-left {
  cursor: pointer;
}
.title {
  display: flex;
  justify-content: center;
  align-items: center;
  i {
    width: 10%;
    height: 50%;
  }
}
</style>
