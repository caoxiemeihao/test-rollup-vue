<template>
  <div class="title">
    <hello />
    <div class="desc">{{ message }}</div>
  </div>
</template>

<script>
import Hello from './components/Hello.vue'

export default {
  data() {
    return {
      message: 'Bundled by rollup :)'
    }
  },
  components: {
    Hello
  },
}
</script>

<style lang="stylus" scoped>
  .desc
    font-size 12px
    color #333
    text-align center
</style>
