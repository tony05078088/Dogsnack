<template>
  <div class="EntireComment">
    <div class="fullName">
      CustomerName: {{comment.first}} {{comment.last}}
    </div>
    <div class="description">
      Description: {{comment.desc}}
    </div>
    <div class="stars">
      stars: {{comment.stars}}
    </div>
  </div>
</template>

<script>
export default {
  props: ['comment'],
  data () {
    return {
      stars: null
    }
  }
}
</script>

<style lang="scss" scoped>
.EntireComment {
  display: flex;
  flex-direction:column;
  margin-bottom: 2rem;
  .fullName {
    font-size:1.5rem;
    color:red
  }
}
</style>
