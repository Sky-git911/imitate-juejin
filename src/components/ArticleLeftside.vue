<template>
  <div class="article-leftside-container" ref="leftSide">
    <span class="iconfont" id="icon1" ref="icon1">&#xec8c;</span>
    <span class="iconfont" id="icon2" ref="icon2">&#xe619;</span>
    <span class="iconfont" id="icon3" ref="icon3">&#xe601;</span>
    <div class="share">
      <span class="iconfont" id="icon4" ref="icon4">&#xe628;</span>
      <div class="child">
        <div class="sub-child">
          <div class="item" id="wechat">
            <i class="iconfont">&#xe604;</i>
            <div>微信</div>
            <div class="qrcode">
              <img src="@/assets/detail/qrcode.png" alt="" />
              <div class="txt">微信扫码分享</div>
            </div>
          </div>
          <div class="item">
            <i class="iconfont">&#xe603;</i>
            <div>新浪微博</div>
          </div>
          <div class="item">
            <i class="iconfont">&#xe882;</i>
            <div>QQ</div>
          </div>
        </div>
      </div>
    </div>
    <span class="iconfont" id="icon5" ref="icon5">&#xe600;</span>
    <div class="seriously">
      <span class="iconfont" id="icon6" ref="icon6" @click="handleSeriously"
        >&#xe644;</span
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      seriously: false,
    };
  },
  methods: {
    handleSeriously() {
      this.seriously = !this.seriously;
      if (this.seriously) {
        this.$refs.icon1.style.display = "none";
        this.$refs.icon2.style.display = "none";
        this.$refs.icon3.style.display = "none";
        this.$refs.icon4.style.display = "none";
        this.$refs.icon5.style.display = "none";
        this.$refs.icon6.style.color = "#1e80ff";
      } else {
        this.$refs.icon1.style.display = "block";
        this.$refs.icon2.style.display = "block";
        this.$refs.icon3.style.display = "block";
        this.$refs.icon4.style.display = "block";
        this.$refs.icon5.style.display = "block";
        this.$refs.icon6.style.color = "#8a919f";
      }
    },
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
  // 中间内容区域居中，宽度不变，随着窗口大小变化，想让左侧固定菜单与中间内容区距离不变
  // 让左侧固定菜单先居中页面，再固定偏移出合适距离
  left: 50%;
  transform: translateX(-650px);
  row-gap: 20px;
  span {
    display: block;
    width: 48px;
    height: 48px;
    line-height: 48px;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 4%);
    cursor: pointer;
    text-align: center;
  }
  .share {
    position: relative;
    &:hover .child {
      display: block;
    }
    .child {
      display: none;
      position: absolute;
      left: 0;
      top: 0;
      width: 100px;
      height: 48px;
      background: transparent;
      &:hover .sub-child {
        display: flex;
      }
      .sub-child {
        display: none;
        border-radius: 4px;
        position: absolute;
        left: 60px;
        top: 0;
        width: 100px;
        height: 150px;
        background: #fff;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding-left: 10px;
        box-sizing: border-box;
        &::before {
          content: "";
          display: block;
          width: 10px;
          height: 10px;
          background: #fff;
          position: absolute;
          left: -5px;
          top: 20px;
          transform: rotate(45deg);
        }
        .item {
          cursor: pointer;
          display: flex;
          column-gap: 10px;
          color: #8a919f;
          align-items: center;
          &#wechat {
            position: relative;
            &:hover .qrcode {
              display: flex;
            }
            .qrcode {
              position: absolute;
              left: 100px;
              top: -15px;
              width: 100px;
              height: 150px;
              background: #fff;
              border-radius: 4px;
              display: flex;
              flex-direction: column;
              row-gap: 20px;
              align-items: center;
              justify-content: center;
              display: none;
              img {
                width: 85px;
                height: 85px;
              }
              .txt {
                color: #333;
                white-space: nowrap;
              }
            }
          }
        }
      }
    }
  }
}
</style>