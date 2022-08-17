<template>
  <div class="article-header-container">
    <div class="title">【Java基础篇】抽象类和接口概念和区别</div>
    <div class="auth">
      <div class="auth-left">
        <div class="left">
          <img src="@/assets/detail/avatar.png" alt="" />
        </div>
        <div class="right">
          <div class="id">
            <span>Java白羊</span>
            <img src="@/assets/detail/level.png" alt="" title="创作等级" />
          </div>
          <div class="desc">
            <div
              class="date"
              title="Fri Aug 12 2022 03:32:25 GMT+0800 (中国标准时间)"
            >
              2022年08月12日 03:32
            </div>
            <span>&nbsp;· 阅读</span>
            <div class="nums">111</div>
          </div>
        </div>
      </div>
      <div class="auth-right unfocus" @click="focus = !focus" v-if="!focus">
        +&nbsp;关注
      </div>
      <div class="auth-right focus" @click="focus = !focus" v-if="focus">
        <span class="txt1"> √&nbsp;已关注</span>
        <span class="txt2">√&nbsp;取消关注</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      focus: false,
    };
  },
};
</script>

<style scoped lang="scss">
.article-header-container {
    display: flex;
    flex-direction: column;
    row-gap: 25px;
  .title {
    font-size: 30px;
    font-weight: bold;
    color: #252933;
  }
  .auth {
    display: flex;
    justify-content: space-between;
    .auth-left {
      display: flex;
      column-gap: 10px;
      .left {
        cursor: pointer;
        img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
        }
      }
      .right {
        display: flex;
        flex-direction: column;
        row-gap: 5px;
        .id {
          display: flex;
          column-gap: 5px;
          cursor: pointer;
          img {
            width: 35px;
            height: 16px;
          }
        }
        .desc {
          display: flex;
          color: #8a919f;
          font-size: 14px;
        }
      }
    }
    .auth-right {
      cursor: pointer;
      height: 32px;
      line-height: 32px;
      padding: 0 12px;
      text-align: center;
      font-size: 14px;
      &.unfocus {
        color: #1e80ff;
        background: rgba(30, 128, 255, 0.05);
        border: 1px solid rgba(30, 128, 255, 0.3);
        border-radius: 4px;
      }
      &.focus {
        color: #1e80ff;
        background: rgba(30, 128, 255, 0.05);
        border: 1px solid rgba(30, 128, 255, 0.3);
        border-radius: 4px;
        color: #515767;
        background: rgba(81, 87, 103, 0.05);
        border-color: rgba(81, 87, 103, 0.3);
        .txt2 {
          display: none;
        }
        &:hover {
          .txt2 {
            display: block;
          }
          .txt1 {
            display: none;
          }
        }
      }
    }
  }
}
</style>