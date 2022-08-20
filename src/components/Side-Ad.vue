<template>
  <!-- 广告框 -->
  <div class="ad" v-for="ad in ads" :key="ad.id">
    <a :href="ad.link">
      <img :src="ad.imgurl" alt="" class="adimg" />
    </a>
    <div class="ad_control">
      <el-icon class="icon_close" @click="closebox(ad.id)"
        ><CloseBold
      /></el-icon>
      <a
        href="https://bd.juejin.cn?utm_campaign=bd&utm_source=web&utm_medium=banner"
        target="_blank"
        class="ad_text"
      >
        <span class="pub_text">投放 </span>
        <span>广告</span>
      </a>
    </div>
  </div>

  <!-- app下载框 -->
  <div class="app_content">
    <img
      src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/home.59780ae.png"
      alt=""
      class="app_img"
    />
    <div class="app_tex">
      <div class="headline">下载稀土掘金APP</div>
      <div class="desc">一个帮助开发者成长的社区</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ads: [
        {
          id: "001",
          link: "/404",
          imgurl:
            "https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0b6a58397c77485495a051142f1d863d~tplv-k3u1fbpfcp-no-mark:480:400:0:0.awebp?",
        },
        {
          id: "002",
          link: "/404",
          imgurl:
            "https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a88a1ea956734105a5b002dfb48840cb~tplv-k3u1fbpfcp-no-mark:480:400:0:0.awebp?",
        },
        {
          id: "003",
          link: "/404",
          imgurl:
            "https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9b6c70fab5e446ce9b8be1678065d4e8~tplv-k3u1fbpfcp-no-mark:480:400:0:0.awebp?",
        },
      ],
    };
  },
};
</script>

<style>
/* 广告框 */
.ad {
  position: relative;
  height: 200px;
  margin-bottom: 16px;
}

.adimg {
  width: 100%;
  height: 200px;
}
.ad_text {
  position: absolute;
  right: 10px;
  bottom: 10px;
  font-size: 12px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.2);
  border: 1px solid #fff;
  border-radius: 6px;
  padding: 5px 10px;
  font-weight: 300;
}
.icon_close {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  font-size: 1rem;
  color: #909090;
  opacity: 0.5;
  display: none;
  cursor: pointer;
}

.pub_text {
  display: none;
}
.ad:hover .icon_close {
  display: block;
}
.icon_close:hover {
  opacity: 1;
}
.ad_text:hover .pub_text {
  display: inline-block;
  margin-right: 5px;
}
.ad_text:hover .ad_text {
  background-color: rgba(0, 0, 0, 0.4);
}
/* app下载框 */
.app_content {
  display: flex;
  flex-direction: row;
  background-color: #fff;
  margin-bottom: 16px;
  padding: 16px;
  font-size: 1.16rem;
  line-height: 1.29;
  color: #333;
}
.app_img {
  flex-direction: row;
  width: 4.167rem;
  height: 4.167rem;
  margin-right: 16px;
}
.headline {
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: #1d2129;
}
.desc {
  margin-top: 0.5rem;
  font-size: 12px;
  line-height: 20px;
  color: #86909c;
}
</style>
