<template>
  <div>this is home page</div>
  <el-button @click="goArticle">详情</el-button>
  <div>
    <img src="../assets/juejinLogo.svg" alt="" />
  </div>
</template>

<style scoped>
  
</style>

<script>
import Side from './Side.vue';
export default {
  components:{Side},
  data() {
    return {};
  },
  created() {
    this.getTestData();
  },
  methods: {
    async getTestData() {
      const res = await this.$api.getTestData();
      console.log(res);
    },

    goArticle() {
      let routeUrl = this.$router.resolve({
        path: "/article/post/1234567890",
      });
      window.open(routeUrl.href, "_blank");
    },
  },
};
</script>

<style></style>
