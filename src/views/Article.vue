<template>
  <div class="article-container">
    <!-- 头部导航栏 -->
    <div class="header"><Nav /></div>
    <!-- 主区域 -->
    <div class="main" ref="main">
      <!-- 侧边导航栏 -->
      <div class="sidebar"></div>
      <!-- 文章详情主区域 -->
      <div class="article-area">
        <!-- 文章内容 -->
        <article>
          <!-- 标题 -->
          <ArticleHeader />
          <!-- 正文 -->
          <ArticleMainText />
        </article>
      </div>
    </div>
    <!-- 左侧固定菜单 -->
    <div class="menu">
      <ArticleLeftside />
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import ArticleHeader from "@/components/ArticleHeader.vue";
import ArticleMainText from "@/components/ArticleMainText.vue";
import ArticleLeftside from "@/components/ArticleLeftside.vue";
export default {
  components: {
    ArticleHeader,
    ArticleMainText,
    Nav,
    ArticleLeftside,
  },
  data() {
    return {
      articleId: null,
      // mainLeft: null,
    };
  },
  created() {
    this.articleId = window.location.href.substring(27);
    this.getCommentHot();
    this.getComment();
  },
  // mounted() {
  //   window.addEventListener("resize", this.setSize);
  // },
  // destroy() {
  //   window.removeEventListener("resize", this.setSize);
  // },
  methods: {
    // setSize() {
    //   console.log(this.mainLeft);
    //   const rect = this.$refs.main.getBoundingClientRect();
    //   this.mainLeft = rect.left;
    // },
    // 获取全部评论
    async getComment() {
      const res = await this.$api.getComment({
        articleId: this.articleId,
        pageIndex: "0",
      });
      console.log("comment", res);
    },
    // 获取热门评论
    async getCommentHot() {
      const res = await this.$api.getCommentHot({
        articleId: this.articleId,
      });
      console.log("commentHot", res);
    },
  },
};
</script>

<style lang="scss" scoped>
.article-container {
  background-color: #f4f5f5;
  width: 100%;
  padding-bottom: 30px;
  // 头部导航栏
  .header {
    background-color: #fff;
  }
  // 主区域
  .main {
    margin: 20px auto 0;
    width: 1140px;
    display: flex;
    column-gap: 20px;
    // 侧边导航栏
    .sidebar {
    }
    // 文章详情主区域
    .article-area {
      box-sizing: border-box;
      background-color: #fff;
      width: 820px;
      padding: 32px 32px 39px;
      article {
        display: flex;
        flex-direction: column;
        row-gap: 25px;
      }
    }
  }
  // 左侧固定菜单
  .menu {
  }
}
</style>
