<template>
  <div class="article-container">
    <!-- 头部导航栏 -->
    <div class="header"><Nav /></div>
    <!-- 主区域 -->
    <div class="main">
      <!-- 文章详情主区域 -->
      <div class="article-area">
        <!-- 文章内容 -->
        <article>
          <!-- 标题 -->
          <ArticleHeader />
          <!-- 正文 -->
          <ArticleMainText ref="maintext" />
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
        <div class="directory" ref="directory">
          <div class="header">目录</div>
          <div class="body">
            <div
              class="item"
              :class="{ active: activeIndex == 0 }"
              @click="handleClick0"
            >
              抽象类
            </div>
            <div
              class="item"
              :class="{ active: activeIndex == 1 }"
              @click="handleClick1"
            >
              接口
            </div>
            <div
              class="item"
              :class="{ active: activeIndex == 2 }"
              @click="handleClick2"
            >
              抽象类和接口的比较
            </div>
          </div>
        </div>
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
    return {
      activeIndex: null,
      height1: null,
      height2: null,
      height3: null,
    };
  },
  created() {
    const title = localStorage.getItem("pageTitle");
    document.title = title;
  },
  methods: {
    handleScroll() {
      // 滚动条垂直距离超过一定高度，使目录为固定定位，使目录一直可见
      if (document.documentElement.scrollTop > 1085) {
        this.$refs.directory.style.position = "fixed";
        this.$refs.directory.style.left = "50%";
        this.$refs.directory.style.top = "20px";
        this.$refs.directory.style.transform = "translateX(270px)";
      } else {
        this.$refs.directory.style.position = "relative";
        this.$refs.directory.style.left = "0";
        this.$refs.directory.style.top = "0";
        this.$refs.directory.style.transform = "translate(0,0)";
      }
      // 滚动到哪部分，目录高亮
      if (document.documentElement.scrollTop < this.height1) {
        this.activeIndex = null;
      } else if (
        document.documentElement.scrollTop >= this.height1 &&
        document.documentElement.scrollTop < this.height2
      ) {
        this.activeIndex = 0;
      } else if (
        document.documentElement.scrollTop >= this.height2 &&
        document.documentElement.scrollTop < this.height3
      ) {
        this.activeIndex = 1;
      } else {
        this.activeIndex = 2;
      }
    },
    // 得到锚点到顶部的距离
    getHeight1() {
      let loc = this.$refs.maintext.$refs.loc1;
      let height = 0;
      do {
        // offsetTop:元素到offsetParent顶部的距离,此处累加到body，求出锚点1到顶部的距离
        height += loc.offsetTop;
        loc = loc.offsetParent;
      } while (loc !== document.body);
      this.height1 = height;
    },
    getHeight2() {
      let loc = this.$refs.maintext.$refs.loc2;
      let height = 0;
      do {
        height += loc.offsetTop;
        loc = loc.offsetParent;
      } while (loc !== document.body);
      this.height2 = height;
    },
    getHeight3() {
      let loc = this.$refs.maintext.$refs.loc3;
      let height = 0;
      do {
        height += loc.offsetTop;
        loc = loc.offsetParent;
      } while (loc !== document.body);
      this.height3 = height;
    },
    handleClick0() {
      this.activeIndex = 0;
      window.scrollTo({
        top: this.height1,
      });
    },
    handleClick1() {
      this.activeIndex = 1;
      window.scrollTo({
        top: this.height2,
      });
    },
    handleClick2() {
      this.activeIndex = 2;
      window.scrollTo({
        top: this.height3,
      });
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.getHeight1();
    this.getHeight2();
    this.getHeight3();
  },
  destroy() {
    window.removeEventListener("scroll", this.handleScroll);
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
    .right_side {
      display: flex;
      flex-direction: column;
      .directory {
        width: 300px;
        background-color: #fff;
        padding: 0 20px;
        box-sizing: border-box;
        overflow: hidden;
        .header {
          height: 60px;
          line-height: 60px;
          font-size: 18px;
          border-bottom: 1px solid #ededed;
        }
        .item {
          margin: 20px 0;
          height: 40px;
          line-height: 40px;
          font-size: 14px;
          padding: 0 10px;
          border-radius: 4px;
          position: relative;
          cursor: pointer;
          &.active {
            background-color: #ededed;
            color: #1e80ff;
            &::before {
              display: block;
              height: 14px;
              width: 30px;
              background-color: #1e80ff;
              content: "";
              position: absolute;
              border-radius: 4px;
              left: -45px;
              top: 14px;
            }
          }
        }
      }
    }
  }
}
</style>
