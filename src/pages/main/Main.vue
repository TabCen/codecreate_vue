<template>
  <div class="page" @click="clickMainPage">
    啊啊啊哈哈哈
  </div>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
    }
  },
  methods: {
    clickMainPage () {
      this.$router.push('/other')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page{
    width: 100%;
    height: 100%;
}

</style>
