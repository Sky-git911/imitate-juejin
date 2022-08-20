<template>
  <div class="comment-container">
    <div class="header">评论</div>
    <!-- 发表评论 -->
    <div class="my-comment">
      <div class="content">
        <img src="@/assets/detail/avatar.png" alt="" />
        <textarea
          placeholder="输入评论(Enter换行,Ctrl + Enter发送)"
          @focus="handleFocus"
          @blur="handleBlus"
          @input="handleInput"
          ref="textarea"
        ></textarea>
      </div>
      <!-- 点击输入框后进入编辑状态 -->
      <div class="editor" ref="editor">
        <div class="left">
          <div class="item">
            <i class="iconfont">&#xe602;</i>
            <span>表情</span>
          </div>
          <div class="item">
            <i class="iconfont">&#xe7b3;</i>
            <span>图片</span>
          </div>
        </div>
        <div class="right">
          <span>Ctrl + Enter</span>
          <div class="publish" ref="publish">发表评论</div>
        </div>
      </div>
    </div>
    <div class="all">
      <div class="all-header">全部评论</div>
      <div class="all-item" v-for="item in allRes" :key="item.comment_id">
        <div class="avatar">
          <img :src="item.user_info.avatar_large" alt="" />
        </div>
        <div class="user_name">{{ item.user_info.user_name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articleId: null,
      allRes: null,
    };
  },
  created() {
    this.articleId = window.location.href.substring(27);
    this.getCommentHot();
    this.getComment();
  },
  methods: {
    // 获取全部评论
    async getComment() {
      const res = await this.$api.getComment({
        articleId: this.articleId,
        pageIndex: "0",
      });
      console.log("comment", res);
      this.allRes = res;
      console.log(res[0].user_info.user_name);
    },
    // 获取热门评论
    async getCommentHot() {
      const res = await this.$api.getCommentHot({
        articleId: this.articleId,
      });
      console.log("commentHot", res);
    },
    handleFocus() {
      this.$refs.textarea.style.border = "1px solid #1e80ff";
      this.$refs.textarea.style.background = "#fff";
      this.$refs.editor.style.display = "flex";
    },
    handleBlus() {
      this.$refs.textarea.style.border = "none";
      this.$refs.textarea.style.background = "#f2f3f5";
    },
    handleInput() {
      this.$refs.textarea.value
        ? (this.$refs.publish.style.background = "#1e80ff")
        : (this.$refs.publish.style.background = "#abcdff");
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
.comment-container {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 32px 32px 39px;
  background-color: #fff;
  row-gap: 30px;
  .header {
    font-size: 18px;
    font-weight: bold;
    color: #252933;
  }
  .my-comment {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    .content {
      display: flex;
      justify-content: space-between;
      img {
        width: 50px;
        height: 50px;
        object-fit: cover;
      }
      textarea {
        width: 700px;
        height: 64px;
        resize: none;
        padding: 8px 12px;
        box-sizing: border-box;
        outline: none;
        background: #f2f3f5;
        border: none;
        border-radius: 4px;
      }
    }
    .editor {
      display: flex;
      display: none;
      justify-content: space-between;
      margin-top: 5px;
      //   &:hover {
      //     display: flex !important;
      //   }
      .left {
        display: flex;
        align-items: center;
        column-gap: 20px;
        padding-left: 55px;
        .item {
          display: flex;
          align-items: center;
          column-gap: 5px;
          cursor: pointer;
        }
      }
      .right {
        display: flex;
        column-gap: 20px;
        align-items: center;
        span {
          color: #86909c;
        }
        .publish {
          background: #abcdff;
          width: 92px;
          height: 36px;
          line-height: 36px;
          text-align: center;
          color: #fff;
          border-radius: 4px;
          cursor: pointer;
        }
      }
    }
  }
  .all {
    margin-top: 10px;
    .all-header {
      font-size: 18px;
      font-weight: bold;
      color: #252933;
    }
    .all-item {
      .avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
        }
      }
      .user_name {
        font-size: 15px;
        color: #252933;
      }
    }
  }
}
</style>