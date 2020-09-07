<template>
   <div>
    <Home-app></Home-app>
    </div>
</template>

<script>
// @ is an alias to /src
import Home from '@/components/Home.vue'

export default {
  name: 'Home',
  components: {
    HomeApp: Home
  }
}
</script>
