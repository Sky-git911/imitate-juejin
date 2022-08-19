git pull origin master --allow-unrelated-histories
<template>
  <div>
    <div class="container">
      <div class="content">
        <a href="#" class="logo"
          ><img class="logo-img" src="../assets/juejinLogo.svg"
        /></a>
        <div class="tabs">
          <ul class="top-nav">
            <li><router-link to="/" exact>首页</router-link></li>
            <li><router-link to="/hot">沸点</router-link></li>
            <li><router-link to="/kc">课程</router-link></li>
            <li><router-link to="/zb">直播</router-link></li>
            <li><router-link to="/hd">活动</router-link></li>
            <li><router-link to="/sc">商城</router-link></li>
            <li><router-link to="/APP">APP</router-link></li>
            <li><router-link to="/cj">插件</router-link></li>
          </ul>
        </div>
        <div class="right">
          <div
            class="search"
            ref="input"
            :class="{ isFoucsActiveClass: isActive }"
          >
            <el-input
              v-model="input4"
              class="w-50 m-2 search-input"
              placeholder="探索稀土掘金"
              @focus="isFoucsActive(true)"
              @blur="isFoucsActive(false)"
            >
              <template #append>
                <el-button size="large" :icon="Search" />
              </template>
            </el-input>
          </div>
          <div class="menu" :class="{ menuHide: isActive }">
            <el-button-group class="menu-btn">
              <el-button color="#007fff" class="add-btn">创作者中心</el-button>
              <el-button color="#007fff" class="more-btn">
                <el-icon><CaretBottom /></el-icon>
              </el-button>
            </el-button-group>
          </div>
          <div class="member-and-btn">
            <div class="member">
              <img src="../assets/member-logo.svg" class="member-logo" />
              <a href="">会员</a>
            </div>
            <div class="btn">
              <el-button class="login-btn">登录</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Search } from "@element-plus/icons-vue";

export default {
  name: "Nav",
  setup() {
    return {
      Search,
    };
  },
  data() {
    return { isActive: false };
  },
  methods: {
    isFoucsActive(val) {
      this.isActive = val;
    },
  },
};
</script>

<style scoped>
.container {
  background-color: white;
  border-bottom: 1px solid #eaeff5;
}
.content {
  background-color: white;
  padding-top: 5px;
  height: 55px;
  display: flex;
  margin: auto;
  max-width: 1440px;
}

.right {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  height: 100%;
  order: 0;
}
.logo {
  margin-left: 20px;
  margin-top: 15px;
}
.logo-img {
  width: 107px;
  height: 22px;
}
.menu {
  width: 11rem;
  margin-left: 2rem;
  transition: width 0.3s;
}
.menu-btn {
  width: 11rem;
  font-size: 1.167rem;
}
.menuHide {
  width: 0;
  border: transparent;
  overflow: hidden;
}
.add-btn {
  height: 3rem;
  padding: 0 1rem;
  font-size: 1.167rem;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  white-space: nowrap;
}
.more-btn {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.667rem;
  height: 3rem;
  border-left: 1px solid hsla(0, 0%, 100%, 0.1);
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  box-sizing: border-box;
}
.top-nav {
  width: 460px;
  display: flex;
  flex: 1 0 auto;
  order: 99;
}
.top-nav li {
  text-align: center;
  margin-top: 12px;
  margin-right: 23px;
  padding-bottom: 20px;
}
.top-nav a {
  color: #515767;
  font-size: 1.167rem;
}
a.router-link-active {
  color: #1e80ff;
}
.top-nav li:hover {
  border-bottom: 2px solid #1e80ff;
}
.tabs {
  margin-top: 5px;
  margin-left: 30px;
}
.search {
  width: 24rem;
  transition: width 0.3s;
}
.isFoucsActiveClass {
  width: 35rem;
}
.search-input {
  transition: width 0.3s;
}
.w-50 {
  background-color: #fff;
  justify-content: space-between;
  border-radius: 4px;
  position: relative;
  height: 38px;
}
.member-and-btn {
  display: flex;
  align-items: center;
  background-color: #fff;
  z-index: 99;
}
.member {
  display: flex;
}
.member a {
  color: #86909c;
  font-weight: 400;
  font-size: 1.167rem;
  line-height: 3.6rem;
  margin-left: 4px;
}
.member-logo {
  margin-top: 10px;
  margin-left: 23px;
  width: 24px;
  height: 24px;
}
.btn {
  margin-left: 20px;
  background-color: #fff;
  z-index: 99;
}
.login-btn {
  font-size: 14px;
  font-weight: 400;
  width: 62px;
  height: 38px;
  color: #007fff;
  border-radius: 5px;
  background: rgba(30, 128, 255, 0.05);
  border: 1px solid rgba(30, 128, 255, 0.3);
}
</style>
