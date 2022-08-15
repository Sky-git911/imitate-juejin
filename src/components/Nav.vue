<template>
  <div class="content">
    <a href="#" class="logo"
      ><img class="logo-img" src="../assets/juejinLogo.svg"
    /></a>
    <div class="tabs">
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="首页" name="first"></el-tab-pane>
        <el-tab-pane label="沸点" name="second"></el-tab-pane>
        <el-tab-pane label="课程" name="third"></el-tab-pane>
        <el-tab-pane label="直播" name="fourth"></el-tab-pane>
        <el-tab-pane label="活动" name="fifth"></el-tab-pane>
        <el-tab-pane label="商城" name="sisth"></el-tab-pane>
        <el-tab-pane label="APP" name="seventh"></el-tab-pane>
        <el-tab-pane label="插件" name="eighth"></el-tab-pane>
      </el-tabs>
    </div>
    <div class="search">
      <el-input v-model="input4" class="w-50 m-2" placeholder="探索稀土掘金">
        <template #prefix>
          <el-icon class="el-input__icon"><search /></el-icon>
        </template>
      </el-input>
    </div>
    <div class="menu">
      <el-dropdown>
        <el-button type="primary" class="menu-btn">
          创作者中心<el-icon class="el-icon--right"><arrow-down /></el-icon>
        </el-button>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>写文章</el-dropdown-item>
            <el-dropdown-item>写沸点</el-dropdown-item>
            <el-dropdown-item>写代码</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
    <img src="../assets/member-logo.svg" class="member-logo" />
    <div class="member">
      <a href="">会员</a>
    </div>
    <div class="btn">
      <el-button class="login-btn">登录</el-button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Nav",
  data() {
    return {
      activeName: "",
      input4: "",
    };
  },
  methods: {
    handleClick() {},
  },
};
</script>

<style lang="scss" scoped>
.content {
  margin: auto;
  max-width: 1440px;
  width: 100%;
  border-bottom: 1px solid #f1f1f1;
  display: flex;
  height: 100%;
  background-color: #fff;
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
  margin-left: 25px;
  margin-top: 8px;
}
.menu-btn {
  width: 115px;
  height: 32px;
}

.tabs {
  margin-top: 5px;
  margin-left: 30px;
}
.search {
  margin-left: 220px;
  margin-top: 8px;
}
.w-50 {
  width: 216px;
  height: 32px;
}
.member {
  margin-top: 12px;
  text-align: center;
}
.member a {
  color: #86909c;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  margin-left: 4px;
}
.member-logo {
  margin-top: 10px;
  margin-left: 23px;
  width: 24px;
  height: 24px;
}
.btn {
  margin-top: 8px;
  margin-left: 20px;
}
.login-btn {
  font-size: 14px;
  width: 62px;
  height: 32px;
  background-color: #e1eefa;
  color: #0080ff;
  border-radius: 5px;
  border: 1px solid #7cb9f7;
}
</style>
