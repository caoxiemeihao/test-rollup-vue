<template>
  <div class="title">
    {{ message }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello Vue!'
    }
  }
}
</script>

<style lang="stylus" scoped>
  .title
    text-align center
</style>
