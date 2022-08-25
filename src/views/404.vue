<template>
  <div class="wrapper">
    <header class="main-header"><Nav /></header>
    <main class="container main-container">
      <div class="container__bg"></div>
      <div class="container__not-found">
        <img
          src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/ca1e08b7f30860aecb1b7bb31ae18e50.svg"
          alt=""
        />
        <el-button class="back-home" size="large">回到首页</el-button>
      </div>
    </main>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";

export default {
  components: { Nav },
};
</script>

<style lang="scss" scoped>
.wrapper {
  background-color: #fff;
  height: 100vh;
}
.main-header {
  background: #fff;
  border-bottom: 1px solid #f1f1f1;
  color: #909090;
  // height: 5rem;
  z-index: 250;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
.container {
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 960px;
  &__bg {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    z-index: -1;
    background-color: #fff;
  }
  &__not-found {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding-top: 80px;
  }
}
img {
  margin: 50px 0px;
  border-style: none;
}
.back-home {
  display: block;
  padding: 8px 16px;
  font-size: 16px;
  color: #1e80ff;
  border-radius: 2px;
  border: 1px solid;
  line-height: 24px;
}
</style>
