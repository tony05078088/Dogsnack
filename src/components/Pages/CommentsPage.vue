<template>
  <section>
    <base-card>
      <h2>Leave a Comment</h2>
      <comment-form :id="id" @save-data="sendData"></comment-form>
    </base-card>
  </section>
</template>

<script>
import CommentForm from '../Ingredients/Comments.vue'
export default {
  props: ['id'],
  components: {
    CommentForm
  },
  methods: {
    sendData (data) {
      data.id = this.id
      console.log(this.$store)
      this.$store.dispatch('sendComments', data)
    }
  }
}
</script>

<style scoped></style>
