<template>
  <section>
    <base-card v-if="!needGetComments">
      <h2>Leave a Comment</h2>
      <comment-form  @save-data="sendData"></comment-form>
    </base-card>
    <base-forum v-else>
      <h2>See Comments from Customers</h2>
      <each-comment
        v-for="comment in totalComments"
        :key="comment.id"
        :comment="comment"
      ></each-comment>
    </base-forum>
  </section>
</template>

<script>
import CommentForm from '../Ingredients/Comments.vue'
import EachComment from '../Ingredients/CustomersComments.vue'
export default {
  props: ['id'],
  components: {
    CommentForm,
    EachComment
  },
  methods: {
    sendData (data) {
      data.id = this.id
      this.$store.dispatch('sendComments', data)
    },
    async getComments () {
      if (!this.needGetComments) {
        return
      }
      try {
        await this.$store.dispatch('fetchComments', this.id)
      } catch (err) {
        console.log('Fail to getComments' + err)
      }
    }
  },
  computed: {
    totalComments () {
      return this.$store.getters.displayComments
    },
    needGetComments () {
      if (this.$route.params.value === 'see') {
        return true
      } else {
        return false
      }
    }
  },
  created () {
    this.getComments()
  }
}
</script>

<style scoped></style>
