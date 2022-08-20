<template>
  <div class="sidebar">
    <!-- 签到框 -->
    <div class="box1">
      <div class="firstline">
        <div class="flex">
          <el-icon class="icon_cld">
            <Calendar />
          </el-icon>
          <span class="text_time">{{ msg }}!</span>
        </div>

        <el-button round class="button_sign_in">去签到</el-button>
      </div>
      <div class="second_line">点亮你在社区的每一天</div>
    </div>

    <side-ad></side-ad>

    <!-- 广告框 -->
    <!-- <div class="ad" v-for="ad in ads" :key="ad.id">
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
    </div> -->

    <!-- app下载框 -->
    <!-- <div class="app_content">
      <img
        src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/home.59780ae.png"
        alt=""
        class="app_img"
      />
      <div class="app_tex">
        <div class="headline">下载稀土掘金APP</div>
        <div class="desc">一个帮助开发者成长的社区</div>
      </div>
    </div> -->

    <!-- 作者榜 -->
    <div class="authorlist">
      <el-card class="box-card" body-style="padding:0;" shadow="never">
        <template #header>
          <div class="card-header">
            <span>🎖️作者榜</span>
          </div>
        </template>

        <div class="text item" v-for="author in topAuthors" :key="author.id">
          <a href="javascript:;" class="flex author">
            <div>
              <el-avatar :src="author.avatar_large" class="author_img" />
            </div>
            <div class="author_info">
              <div class="author_name">
                <span>{{ author.user_name }}</span>
                <span
                  ><img
                    :src="author.lvimg"
                    alt=""
                    title="创作等级"
                    class="lvimg"
                /></span>
              </div>
              <div class="author_desc">
                {{ author.job_title }}
                <span v-if="author.company">@{{ author.company }}</span>
              </div>
            </div>
          </a>
        </div>
      </el-card>
      <div class="more">
        <a href="javascript:;">
          <span>完整榜单 </span>
          <el-icon class="icon_rig"><ArrowRightBold /></el-icon>
        </a>
      </div>
    </div>

    <!-- 外联列表 -->
    <div class="linklist">
      <el-card class="box-card" body-style="padding:0;" shadow="never">
        <div v-for="link in linklist" :key="link.id" class="text item">
          <a href="javascript:;" class="flex">
            <el-avatar
              shape="square"
              :size="35"
              :src="link.img"
              class="link_img"
            />
            <span class="title">{{ link.title }}</span>
          </a>
        </div>
      </el-card>
    </div>

    <!-- footer -->
    <div class="footer"></div>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

.sidebar {
  background-color: #f2f3f5;
  width: 20.2rem;
  padding: 10px auto;
}
/* 卡片样式 */
.text {
  font-size: 14px;
}
.item {
  padding: auto 0;
  padding: 12px 15px;
}

.box-card {
  width: 100%;
  border: 0;
}

.item:hover {
  background-color: hsla(0, 0%, 84.7%, 0.1);
}
/* 签到框 */
.box1 {
  height: 96px;
  margin-bottom: 16px;
  background-color: #fff;
  padding: 16px;
}
.firstline {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 32px;
  margin-bottom: 8px;
}

.flex {
  display: flex;
  flex-direction: row;
}

.text_time {
  display: block;
  font-size: 20px;
  font-weight: 500;
  margin-top: 2px;
}
.icon_cld {
  display: block;
  color: darksalmon;
  width: 34px;
  height: 24px;
  font-size: 24px;
}
.button_sign_in {
  display: block;
  color: #1e80ff;
  border: 1px solid #1e80ff;
}
.second_line {
  margin: 5px;
  color: #4e5969;
  font-size: 14px;
  font-weight: 400;
  text-align: center;
}
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

/* 作者榜 */
.authorlist,
.linklist {
  background-color: #fff;
  margin-bottom: 16px;
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.16rem;
  color: #333;
}
.author_img {
  position: relative;
  top: 0.5rem;
}
.author_img,
.link_img {
  width: 3rem;
  height: 3rem;
  margin-right: 6px;
}
.author_info {
  overflow: hidden;
  text-overflow: ellipsis;
  margin: auto 0;
}
.author_name,
.title {
  font-size: 16px;
  font-weight: 400;
  color: #333;
  margin-bottom: 5px;
}
.author_desc {
  color: #909090;
  font-size: 14px;
  margin-bottom: 3px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.lvimg {
  width: 35px;
  height: 16px;
  margin: 5px 0 0 5px;
}
.more {
  color: #007fff;
  padding: 1.2rem 0;
  text-align: center;
  border-top: 1px solid hsla(0, 0%, 59.2%, 0.1);
  font-size: 16px;
}
.icon_rig {
  font-size: 14px;
}

/* 外链列表 */
.title {
  display: block;
  margin: auto 3px;
}
</style>

<script>
import SideAd from "@/components/Side-Ad.vue";

export default {
  components: {
    SideAd,
  },
  name: "Side",
  data() {
    return {
      msg: "",
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
      topAuthors: [],
      linklist: [
        {
          id: "001",
          img: "//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/juejin-tutu.d58819c.png",
          title: "稀土掘金漫游指南",
        },
        {
          id: "002",
          img: "//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/juejin-extension-icon.4b79fb4.png",
          title: "安装掘金浏览器插件",
        },
        {
          id: "003",
          img: "//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/juejin-miner.b78347c.png",
          title: "前往掘金翻译计划",
        },
      ],
    };
  },
  methods: {
    // 根据时间显示问候语
    getTime() {
      let time = new Date();
      let hour = time.getHours();
      if (hour >= 5 && hour <= 12) {
        this.msg = "早上好";
      } else if (hour > 12 && hour < 18) {
        this.msg = "下午好";
      } else {
        this.msg = "晚上好";
      }
    },

    // 关闭广告
    closebox(id) {
      this.ads = this.ads.filter((ad) => {
        return ad.id !== id;
      });
    },

    // 获取作者榜单
    async getAuthorRank() {
      const res = await this.$api.getAuthorRank();
      // console.log(res);
      this.topAuthors = res.splice(0, 3);
      this.topAuthors.forEach((author) => {
        // author.lvimg = this.$api.getLevelImg(author.level);
        this.getlvimg(author.level).then((res) => {
          author.lvimg = res;
        });
      });
      // console.log(this.topAuthors);
    },
    async getlvimg(level) {
      const res = await this.$api.getLevelImg(level);
      // console.log(res);
      return res;
    },
  },

  mounted() {
    this.getTime();
    this.getAuthorRank();
  },
};
</script>
