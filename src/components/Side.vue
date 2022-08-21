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
    <div class="side_footer">
        <ul class="info_list flex">
          <li>
            <a href="javascript:;" class="link_text">用户协议</a>
          </li>
          <li>
            <a href="javascript:;" class="link_text">营业执照</a>
          </li>
          <li>
            <a href="javascript:;" class="link_text">隐私政策</a>
          </li>
          <li>
            <a href="javascript:;" class="link_text">关于我们</a>
          </li>
        </ul>
        <ul class="info_list flex">
          <li>
            <a href="javascript:;" class="link_text">站点地图</a>
          </li>
          <li>
            <a href="javascript:;" class="link_text">使用指南</a>
          </li>
          <li>
            <a href="javascript:;" class="link_text">友情链接</a>
          </li>
          <li>
            <a href="javascript:;" class="link_text">更多文章</a>
          </li>
        </ul>
        <ul class="info_list flex">
          <li>
            <a href="javascript:;" class="link_text"></a>
          </li>
        </ul>
        <ul class="info_list flex">
          <li>
            <a href="javascript:;" class="link_text">京ICP备18012699号-3</a>
          </li>
        </ul>
        <ul class="info_list flex">
          <li>
            <a href="javascript:;" class="link_text">
              <img src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/police.d0289dc.png" alt="" class="plice_img">
              京公网安备11010802026719号
            </a>
          </li>
        </ul>
        <ul class="info_list flex">
          <li>
            <span class="link_text">版权所有：北京北比信息技术有限公司</span>
          </li>
        </ul>
        <ul class="info_list flex">
          <li>
            <span class="link_text">公司地址：北京市海淀区信息路甲28号13层B座13B-5</span>
          </li>
        </ul>
        <ul class="info_list flex">
          <li>
            <span class="link_text">公司座机：010-83434395</span>
          </li>
        </ul>
        <ul class="info_list flex">
          <li>
            <span class="link_text">举报邮箱：</span>
            <a href="javascript:;" class="link_text"> feedback@xitu.io</a>
          </li>
        </ul>
        <ul class="info_list flex">
          <li>
            <a href="javascript:;" class="link_text">©2022 稀土掘金</a>
          </li>
        </ul>
        <ul class="flex">
          <li>
            <a href="javascript:;">
              <img src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/weibo.0cd39f5.png" alt="微博" class="weibo">
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <img src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/wechat.ce329e6.png" alt="微信" class="wechat">
            </a>
          </li>
        </ul>
      </div>
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
  font-size: 14px;
  font-weight: 400;
  color: #333;
  margin-bottom: 5px;
}
.author_desc {
  color: #909090;
  font-size: 12px;
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

/* 侧边栏footer */

ul.info_list {
  justify-content: space-between;
}
ul.info_list li{
  display: block;
}
ul.info_list li  .link_text{
  font-size: 14px;
  line-height: 1.6;
  color: #9aa3ab;
}
ul.info_list li a:hover{
  color: #007fff;
}
.plice_img{
  vertical-align: middle;
}
.weibo, .wechat{
  width: 30px;
  margin-top: 20px;
}
.weibo{
  margin-right: 10px;
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
