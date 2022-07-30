<template>
  <div>
    <h1>this is article page</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    this.getCategory();
    this.getComment();
    this.getArticle();
  },
  methods: {
    async getCategory() {
      const res = await this.$api.getCategory();
      console.log("类别", res);
    },
    async getComment() {
      const res = await this.$api.getComment({
        articleId: "6953423646664687652",
        pageIndex: "1",
      });
      console.log("comment", res);
    },
    async getArticle() {
      const res = await this.$api.getArticle({
        cateId: "6809637767543259144",
        pageIndex: "0",
      });
      console.log("article", res);
    },
  },
};
</script>

<style></style>
