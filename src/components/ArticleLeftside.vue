<template>
  <div class="article-leftside-container" ref="leftSide">
    <span class="iconfont">&#xec8c;</span>
    <span class="iconfont">&#xe619;</span>
    <span class="iconfont">&#xe601;</span>
    <span class="iconfont">&#xe628;</span>
    <span class="iconfont">&#xe600;</span>
    <span class="iconfont">&#xe644;</span>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@font-face {
  font-family: "iconfont";
  src: url("@/assets/detail/iconfont.woff2") format("woff2"),
    url("@/assets/detail/iconfont.woff") format("woff"),
    url("@/assets/detail/iconfont.ttf") format("truetype");
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 20px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  color: #8a919f;
  -moz-osx-font-smoothing: grayscale;
  &:hover {
    color: #333;
  }
}
.article-leftside-container {
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 130px;
  // 中间内容区域宽度不变，随着窗口大小变化，想让左侧固定菜单与中间内容区距离不变
  // 让左侧固定菜单先居中页面，再固定偏移出合适距离
  left: 50%;
  transform: translateX(-650px);
  row-gap: 20px;
  span {
    width: 48px;
    height: 48px;
    line-height: 48px;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 4%);
    cursor: pointer;
    text-align: center;
  }
}
</style>