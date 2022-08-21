<template>
  <div class="rightside">
    <!-- 作者模块 -->
    <div class="author_block block_style">
      <el-card class="box-card" body-style="padding:0;" shadow="never">
        <div class="card-header flex">
          <el-avatar :src="avatarImg" class="author_img" />
          <div class="author_info">
            <div class="author_name">
              <span>Java白羊</span>
              <span
                ><img
                  src="@/assets/detail/level.png"
                  alt=""
                  title="创作等级"
                  class="lvimg"
              /></span>
            </div>
            <div class="author_desc">Java后端开发</div>
          </div>
        </div>
        <div class="item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="26"
            viewBox="0 0 25 26"
          >
            <g fill="none" fill-rule="evenodd" transform="translate(0 .57)">
              <ellipse
                cx="12.5"
                cy="12.57"
                fill="#E1EFFF"
                rx="12.5"
                ry="12.57"
              ></ellipse>
              <path
                fill="#7BB9FF"
                d="M8.596 11.238V19H7.033C6.463 19 6 18.465 6 17.807v-5.282c0-.685.483-1.287 1.033-1.287h1.563zm4.275-4.156A1.284 1.284 0 0 1 14.156 6c.885.016 1.412.722 1.595 1.07.334.638.343 1.687.114 2.361-.207.61-.687 1.412-.687 1.412h3.596c.38 0 .733.178.969.488.239.317.318.728.21 1.102l-1.628 5.645a1.245 1.245 0 0 1-1.192.922h-7.068v-7.889c1.624-.336 2.623-2.866 2.806-4.029z"
              ></path>
            </g>
          </svg>
          <span class="content">获得点赞&nbsp;51</span>
        </div>
        <div class="item">
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            class="icon stat-view-icon"
          >
            <g fill="none" fill-rule="evenodd">
              <circle cx="12.5" cy="12.5" r="12.5" fill="#E1EFFF"></circle>
              <path
                fill="#7BB9FF"
                d="M4 12.5S6.917 7 12.75 7s8.75 5.5 8.75 5.5-2.917 5.5-8.75 5.5S4 12.5 4 12.5zm8.75 2.292c1.208 0 2.188-1.026 2.188-2.292 0-1.266-.98-2.292-2.188-2.292-1.208 0-2.188 1.026-2.188 2.292 0 1.266.98 2.292 2.188 2.292z"
              ></path>
            </g>
          </svg>
          <span class="content">文章被阅读&nbsp;111</span>
        </div>
      </el-card>
    </div>

    <!-- app下载模块 -->
    <AppLinkBlock class="block_style" />

    <!-- 广告 -->
    <div class="ad block_style" v-if="isshowad">
      <a href="javascript:;">
        <img
          src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/default.640d9a7.png"
          alt=""
          class="adimg"
        />
      </a>
      <div class="ad_control">
        <el-icon class="icon_close" @click="closead"><CloseBold /></el-icon>
      </div>
    </div>

    <!-- 相关文章推荐 -->

    <div class="block_style">
      <el-card class="box-card" body-style="padding:0;" shadow="never">
        <div class="card-header flex similar_header">相关文章</div>
        <div
          v-for="article in similarArticle"
          key="article.artile_id"
          class="simalar_item"
        >
          <a href="javascript:;">
            <div class="title">
              {{ article.article_info.title }}
            </div>
            <div class="descbox">
              <span>{{ article.article_info.collect_count }}点赞</span>
              <span>&nbsp;&nbsp;·&nbsp;&nbsp;</span>
              <span>{{ article.article_info.comment_count }}评论</span>
            </div>
          </a>
        </div>
      </el-card>
    </div>
  </div>
</template>
<script>
import avatarImg from "@/assets/detail/avatar.png";
import AppLinkBlock from "@/components/AppLinkBlock.vue";
export default {
  components: { AppLinkBlock },
  data() {
    return {
      avatarImg,
      isshowad: true,
      params: {
        articleId: "6979389405807476749",
        userId: "712139267383838",
      },
      similarArticle: [],
    };
  },
  methods: {
    // 关闭广告
    closead() {
      this.isshowad = false;
    },

    // 获取相关文章
    async getSimilarArticle() {
      const res = await this.$api.getSimilarArticle(this.params);
      this.similarArticle = res;
      console.log("@@@@", this.similarArticle);
    },
  },
  mounted() {
    this.getSimilarArticle();
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.rightside {
  width: 25rem;
}
.flex {
  display: flex;
}
.rightside .block_style {
  margin-bottom: 20px;
  width: 100%;
  background-color: #fff;
}

/* 作者模块 */
.box-card {
  width: 100%;
  border: 0;
  padding: 1.6rem;
}

.card-header {
  padding-bottom: 1.6rem;
  border-bottom: 1px solid #e4e6eb;
}
.author_img {
  width: 4rem;
  height: 4rem;
  margin-right: 1.3rem;
}
.author_name {
  font-size: 1.333rem;
  font-weight: 500;
  line-height: 2rem;
  color: #252933;
}
.lvimg {
  width: 35px;
  height: 1.3rem;
  margin: 5px 0 0 5px;
}
.author_desc {
  color: #909090;
  font-size: 1rem;
  margin: 3px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.item {
  display: flex;
  align-items: center;
  margin-top: 1rem;
}
.content {
  font-size: 1.167rem;
  color: #252933;
  font-weight: 400;
  vertical-align: middle;
  margin-left: 1rem;
}

/* 广告模块 */
.ad {
  position: relative;
}
.adimg {
  width: 100%;
}
.icon_close {
  position: absolute;
  top: 0.8rem;
  right: 0.8rem;
  font-size: 1rem;
  color: #333;
  opacity: 0.5;
  display: none;
  cursor: pointer;
}
.ad:hover .icon_close {
  display: block;
}
.icon_close:hover {
  opacity: 1;
}

/* 相关文章模块 */
.similar_header {
  font-size: 16px;
  line-height: 2rem;
  color: #1d2129;
  font-weight: 500;
}

.title {
  line-height: 22px;
  font-size: 1.167rem;
  font-weight: 400;
  color: #252933;
}
.simalar_item:hover .title {
  color: #007fff;
}
.simalar_item {
  align-items: center;
  margin-top: 1.5rem;
}
.descbox {
  font-size: 1.1rem;
  line-height: 22px;
  color: #8a919f;
  font-weight: 400;
}
</style>