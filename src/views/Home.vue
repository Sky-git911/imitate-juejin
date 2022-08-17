<template>
  <div class="view-container">
    <div class="main-header-box">
      <header class="main-header">
        <Nav />
      </header>
    </div>

    <main class="containerwith-view-nav">
      <div class="main-container">
        <article-list
          :allDataList="allDataList"
          @equestr="requestData"
        ></article-list>
      </div>
    </main>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import ArticleList from "@/components/Article-List.vue";
export default {
  components: { Nav, ArticleList },
  data() {
    return {
      allDataList: [],
    };
  },
  created() {
    this.getTestData();
    this.getComprehensiveList();
  },
  computed: {},
  methods: {
    async getTestData() {
      const res = await this.$api.getTestData();
      console.log(res);
    },
    requestData(e) {
      console.log("子组件来的", e);
      this.getComprehensiveList(e.pagenum);
    },

    // 获取综合文章列表接口
    async getComprehensiveList(pagenum = 0) {
      try {
        const res = await this.$api.getComprehensiveList({
          pageIndex: pagenum,
        });
        // console.log(res);
        let articleList = [];
        this.isRequestStatus = false;
        res.forEach((item) => {
          const { item_type, item_info } = item;
          if (item_type == 14) {
            //广告
            articleList.push(item_info);
          } else {
            // 加入作者名称
            item_info.article_info.author_name =
              item_info.author_user_info.user_name;
            // 加入文章标签
            item_info.article_info.tags = item_info.tags;
            articleList.push(item_info.article_info);
          }
        });
        console.log(articleList);
        this.allDataList = [...this.allDataList, ...articleList];
      } catch (error) {
        throw new Error();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.container,
.view-container {
  position: relative;
  margin: 0px auto;
  width: 100%;
  height: 100vh;
}

.main-container {
  height: calc(100vh - 5rem);
}
.main-header-box {
  position: relative;
  height: 5rem;
}
.main-header {
  background: #fff;
  border-bottom: 1px solid #f1f1f1;
  color: #909090;
  height: 5rem;
  z-index: 250;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  transition: all 0.2s;
}
</style>
