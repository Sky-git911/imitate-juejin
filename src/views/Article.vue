<template>
  <div class="article-container">
    <!-- 头部导航栏 -->
    <div class="header"><Nav /></div>
    <!-- 主区域 -->
    <div class="main">
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
          <!-- 文章底部 -->
          <div class="article-bottom">
            <div class="classify">
              分类:
              <span>后端</span>
            </div>
            <div class="label">
              标签：
              <span>Java</span>
            </div>
          </div>
        </article>
        <!-- 评论区 -->
        <Comment />
      </div>
      <div class="right_side">
        <ArticleRightside></ArticleRightside>
      </div>
    </div>
    <!-- 左侧固定菜单 -->
    <div class="menu">
      <ArticleLeftside />
    </div>
    <!-- 右侧边栏 -->
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import ArticleHeader from "@/components/ArticleHeader.vue";
import ArticleMainText from "@/components/ArticleMainText.vue";
import ArticleLeftside from "@/components/ArticleLeftside.vue";
import Comment from "@/components/Comment.vue";
import ArticleRightside from "@/components/ArticleRightside.vue";

export default {
  components: {
    ArticleHeader,
    ArticleMainText,
    Nav,
    ArticleLeftside,
    Comment,
    ArticleRightside,
  },
  data() {
    return {};
  },
  methods: {},
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
      background-color: inherit;
      width: 820px;
      display: flex;
      flex-direction: column;
      row-gap: 30px;
      article {
        box-sizing: border-box;
        padding: 32px 32px 39px;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        row-gap: 25px;
        .article-bottom {
          display: flex;
          column-gap: 50px;
          font-size: 14px;
          color: #515767;
          span {
            margin-left: 5px;
            padding: 8px;
            border-radius: 4px;
          }
          .classify {
            span {
              background-color: #f2f3f5;
            }
          }
          .label {
            span {
              background-color: #eaf2ff;
              color: #1e80ff;
            }
          }
        }
      }
    }
  }
}
</style>
