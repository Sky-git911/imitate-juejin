<template>
  <div class="article-container">
    <!-- 头部导航栏 -->
    <div class="header">头部导航栏</div>
    <!-- 侧边导航栏 -->
    <div class="sidebar">侧边导航栏</div>
    <!-- 文章详情主区域 -->
    <div class="article-area">
      <!-- 文章内容 -->
      <article>
        <!-- 标题 -->
        <ArticleHeader />
        <!-- 正文 -->
        <div class="main-text">
          <img src="@/assets/detail/test.png" alt="" />
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import ArticleHeader from "@/components/ArticleHeader.vue";
export default {
  components: {
    ArticleHeader,
  },
};
</script>

<style lang="less" scoped>
.article-container {
  background-color: #f4f5f5;
  width: 100%;
  padding-bottom: 30px;
  // 头部导航栏
  .header {
    height: 5rem;
    line-height: 5rem;
    background-color: lightgray;
    text-align: center;
    color: #fff;
  }
  // 侧边导航栏
  .sidebar {
    position: fixed;
    top: 100px;
    right: 380px;
    width: 300px;
    height: 600px;
    line-height: 600px;
    background-color: lightgray;
    text-align: center;
    color: #fff;
  }
  // 文章详情主区域
  .article-area {
    box-sizing: border-box;
    background-color: #fff;
    width: 820px;
    padding: 32px 32px 39px;
    margin: 20px 700px 0 auto;
    article {
      display: flex;
      flex-direction: column;
      row-gap: 25px;
      .main-text {
        img {
          width: 100%;
          height: 425px;
        }
      }
    }
  }
}
</style>
