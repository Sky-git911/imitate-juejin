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
    <!-- 热门评论 -->
    <div class="hot" v-if="hotResLength != 0">
      <div class="hot-header">
        <span>热门评论</span>
        <span class="iconfont hot-icon">&#xe8c9;</span>
      </div>
      <div
        class="hot-item"
        v-for="(item, index) in hotRes"
        :key="item.comment_id"
      >
        <div class="left">
          <div class="avatar">
            <img :src="item.user_info.avatar_large" alt="" />
          </div>
        </div>
        <div class="center">
          <div class="center-top">
            <div class="user_name">{{ item.user_info.user_name }}</div>
            <img
              class="level-img"
              :src="level[index]"
              alt=""
              v-if="level[index] != ''"
            />
          </div>
          <div class="center-center">
            {{ item.comment_info.comment_content }}
          </div>
          <div class="center-bottom">
            <div class="center-bottom-item">
              <span class="iconfont">&#xe65c;</span>
              <span>点赞</span>
            </div>
            <div class="center-bottom-item">
              <span class="iconfont">&#xe891;</span>
              <span>回复</span>
            </div>
          </div>
          <!-- 评论回复 -->
          <div class="reply">
            <div
              class="hot-item"
              v-for="(item, index) in hotRes"
              :key="item.comment_id"
            >
              <div
                class="hot-item reply-item"
                v-for="i in item.reply_infos"
                :key="i"
              >
                <div class="left">
                  <div class="avatar">
                    <img :src="i.user_info.avatar_large" alt="" />
                  </div>
                </div>
                <div class="center">
                  <div class="center-top">
                    <div class="user_name">
                      {{ i.user_info.user_name }}
                    </div>
                    <img
                      class="level-img"
                      :src="level[index]"
                      alt=""
                      v-if="level[index] != ''"
                    />
                  </div>
                  <div class="center-center">
                    {{ i.reply_info.reply_content }}
                  </div>
                  <div class="center-bottom">
                    <div class="center-bottom-item">
                      <span class="iconfont">&#xe65c;</span>
                      <span>点赞</span>
                    </div>
                    <div class="center-bottom-item">
                      <span class="iconfont">&#xe891;</span>
                      <span>回复</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 全部评论 -->
    <div class="all">
      <div class="all-header">
        <div class="left">
          <span>全部评论</span>
          <span>{{ allResLength }}</span>
        </div>
        <div class="right">
          <div
            class="right-item"
            :class="timeActive ? 'active' : ''"
            @click="(timeActive = !timeActive), (hotActive = !hotActive)"
          >
            <span class="iconfont">&#xe610;</span>
            <span>最新</span>
          </div>
          <div
            class="right-item"
            :class="hotActive ? 'active' : ''"
            @click="(hotActive = !hotActive), (timeActive = !timeActive)"
          >
            <span class="iconfont">&#xe614;</span>
            <span>最热</span>
          </div>
        </div>
      </div>
      <div
        class="all-item"
        v-for="(item, index) in allRes"
        :key="item.comment_id"
      >
        <div class="left">
          <div class="avatar">
            <img :src="item.user_info.avatar_large" alt="" />
          </div>
        </div>
        <div class="center">
          <div class="center-top">
            <div class="user_name">{{ item.user_info.user_name }}</div>
            <img
              class="level-img"
              :src="level[index]"
              alt=""
              v-if="level[index] != ''"
            />
            <div class="user_job">{{ item.user_info.job_title }}</div>
          </div>
          <div class="center-center">
            {{ item.comment_info.comment_content }}
          </div>
          <div class="center-bottom">
            <div class="center-bottom-item">
              <span class="iconfont">&#xe65c;</span>
              <span>点赞</span>
            </div>
            <div class="center-bottom-item">
              <span class="iconfont">&#xe891;</span>
              <span>回复</span>
            </div>
          </div>
        </div>
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
      allResLength: 0,
      level: [],
      hotRes: null,
      hotlevel: [],
      hotResLength: 0,
      timeActive: true,
      hotActive: false,
    };
  },
  created() {
    this.articleId = window.location.hash.split("/")[2];
    this.getCommentHot();
    this.getComment();
    // console.log(this.level);
    // console.log(this.hotlevel);
  },
  methods: {
    // 获取作者等级
    async getlvimg(level) {
      const res = await this.$api.getLevelImg(level);
      return res;
    },
    // 获取全部评论
    async getComment() {
      const res = await this.$api.getComment({
        articleId: this.articleId,
        pageIndex: "0",
      });
      // console.log("comment", res);
      this.allRes = res;
      this.allResLength = res.length;
      res.forEach((item) => {
        this.getlvimg(item.user_info.level).then((res) => {
          // console.log(res);
          this.level.push(res);
        });
      });
    },
    // 获取热门评论
    async getCommentHot() {
      const res = await this.$api.getCommentHot({
        articleId: this.articleId,
      });
      // console.log("commentHot", res);
      this.hotRes = res;
      this.hotResLength = res.length;
      res.forEach((item) => {
        this.getlvimg(item.user_info.level).then((res) => {
          // console.log(res);
          this.hotlevel.push(res);
        });
      });
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
    display: flex;
    flex-direction: column;
    row-gap: 30px;
    .all-header {
      font-size: 18px;
      font-weight: bold;
      color: #252933;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .right {
        display: flex;
        column-gap: 10px;
        background-color: #f2f3f5;
        padding: 5px;
        border-radius: 5px;
        .right-item {
          font-size: 14px;
          display: flex;
          align-items: center;
          color: #8a919f;
          cursor: pointer;
          padding: 5px;
          border-radius: 5px;
          &.active {
            color: #1e80ff;
            background-color: #fff;
            .iconfont {
              color: #1e80ff;
            }
          }
        }
      }
    }
    .all-item {
      display: flex;
      column-gap: 20px;
      .left {
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
      }
      .center {
        display: flex;
        flex-direction: column;
        row-gap: 10px;
        .center-top {
          display: flex;
          column-gap: 10px;
          .level-img {
            width: 35px;
            height: 16px;
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
          .user_name {
            font-size: 15px;
            color: #252933;
          }
          .user_job {
            font-size: 14px;
            color: #8a919f;
          }
        }
        .center-center {
          font-size: 16px;
        }
        .center-bottom {
          margin-top: 5px;
          display: flex;
          column-gap: 20px;
          align-items: center;
          .center-bottom-item {
            display: flex;
            align-items: center;
            color: #8a919f;
            cursor: pointer;
          }
        }
      }
    }
  }
  .hot {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    row-gap: 30px;
    .hot-header {
      font-size: 18px;
      font-weight: bold;
      color: #252933;
      .hot-icon {
        color: #ff5132;
      }
    }
    .hot-item {
      display: flex;
      column-gap: 20px;
      &.reply-item {
        width: 670px;
        border-radius: 4px;
        padding: 20px;
        background: rgba(247, 248, 250, 0.7);
      }
      .left {
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
      }
      .center {
        display: flex;
        flex-direction: column;
        row-gap: 10px;
        .center-top {
          display: flex;
          .level-img {
            width: 35px;
            height: 16px;
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
          .user_name {
            font-size: 15px;
            color: #252933;
          }
        }
        .center-center {
          font-size: 16px;
        }
        .center-bottom {
          margin-top: 5px;
          display: flex;
          column-gap: 20px;
          align-items: center;
          .center-bottom-item {
            display: flex;
            align-items: center;
            color: #8a919f;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
