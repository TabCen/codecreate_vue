<template>
  <div id="app">
    <div class="left-tree">
      <div class="item" @click="clickTheHome">
        <img class="image" src="./assets/logo.png">
        <div>内容</div>
      </div>
    </div>
    <router-view class="router-view"/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
#app {
  width: 100%;
  height: 100%;
  background-color: aqua;
}

.left-tree {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 60px;
  background-color: #2a68c9;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.item{
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .image{
    width: 50px;
    height: 50px;
  }
}

.item:hover{
  background-color: #255baf;
}

.router-view{
  position: absolute;
  left: 60px;
  top: 0px;
  right: 0px;
  bottom: 0px;
  border: 1px solid red;
}

</style>
