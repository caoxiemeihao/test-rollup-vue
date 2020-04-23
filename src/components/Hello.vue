<template>
  <div class="title">
    {{ message }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello Vue'
    }
  }
}
</script>

<style lang="stylus">
.title
  font-size 24px
  text-align center
  color #ff6f6c
  line-height 40px
</style>
