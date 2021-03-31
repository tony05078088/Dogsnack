<template>
  <section>
    <base-card>
      <h2>Leave a Comment</h2>
      <comment-form></comment-form>
    </base-card>
  </section>
</template>

<script>
import CommentForm from '../Ingredients/Comments.vue'
export default {
  components: {
    CommentForm
  }
}
</script>

<style scoped></style>
