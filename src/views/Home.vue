<template>
  <div class="view-container">
    <div class="main-header-box" :class="{ mainHeaderBgc: hidenav }">
      <header class="main-header">
        <Nav :class="{ visible: !hidenav }" :hidenav="hidenav" />
      </header>
    </div>
    <main class="containerwith-view-nav" :class="{ top: hidenav }">
      <nav class="content2" :class="{ top: hidenav }">
        <div class="second-nav">
          <div class="category">
            <router-link to="/" exact>综合</router-link>
          </div>
          <div
            v-for="(item, index) in category"
            :key="index"
            @mouseover="handleGetCategoryType(item.category_id)"
          >
            <el-popover
              placement="bottom-start"
              :width="320"
              trigger="hover"
              :show-after="200"
              transition="none"
            >
              <div class="cat-tag">
                <div v-for="(tag, index) in categorytype" :key="index">
                  <div class="cat-btn" :model="(catid = item.category_id)">
                    <a href="">{{ tag }}</a>
                  </div>
                </div>
              </div>
              <template #reference>
                <div class="category">
                  <router-link to="/404">{{ item.category_name }}</router-link>
                </div>
              </template>
            </el-popover>
          </div>
        </div>
      </nav>
      <div class="main-container" :class="{ mainHeight: hidenav }">
        <article-list
          :allDataList="allDataList"
          @request="requestData"
          @hideNav="hideNav"
        ></article-list>
      </div>
    </main>
  </div>
</template>

<style scoped>
  
</style>

<script>
import Nav from "@/components/Nav.vue";
import ArticleList from "@/components/Article-List.vue";
import backtop from "@/components/BackTop.vue";
import formatTime from "@/utils/formatTime.js";

export default {
  components: { Nav, ArticleList, backtop },
  data() {
    return {
      allDataList: [],
      category: [],
      categoryid: [],
      categorytype: [],
      hidenav: false,
    };
  },
  created() {
    this.getCategory();
    // this.getCategoryType();
  },
  methods: {
    requestData(e) {
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
            // 格式化发布时间
            item_info.article_info.publishTime = formatTime.timeInterval(
              item_info.article_info.mtime
            );
          }
        });
        this.allDataList = [...this.allDataList, ...articleList];
      } catch (error) {
        throw new Error();
      }
    },
    async getCategory() {
      const res = await this.$api.getCategory();
      //console.log("分类", res);
      res.forEach((item) => {
        this.category.push(item);
      });
    },
    async getCategoryType(cateId) {
      const res = await this.$api.getCategoryType({
        // cateId: "6809637769959178254",
        cateId,
      });
      //console.log("标签", res);
      let type = [];
      res.forEach((item) => {
        type.push(item.tag_name);
      });
      this.categorytype = type;
    },

    handleGetCategoryType(id) {
      this.getCategoryType(id);
    },

    //
    hideNav(e) {
      this.hidenav = e;
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
  height: calc(100vh - 9rem);
}
.mainHeight {
  height: calc(100vh - 4rem);
  transition: height 0.3s;
}
.main-header-box {
  position: relative;
  height: 5rem;
  background-color: #fff;
}
.mainHeaderBgc {
  background-color: #f4f5f5;
}

.main-header {
  background: #fff;
  border-bottom: 1px solid #f1f1f1;
  color: #909090;
  // height: 5rem;
  // z-index: 250;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  transition: all 0.2s;
  .visible {
    transform: translateZ(0);
  }
}
.containerwith-view-nav {
  padding-top: 4rem;
}
.content2 {
  background-color: white;
  position: fixed;
  top: 5rem;
  width: 100%;
  height: 3.833rem;
  z-index: 100;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
  transition: all 0.2s;
}
.content2::before {
  content: "";
  position: absolute;
  right: 0;
  bottom: 0;
  height: 200%;
  z-index: -1;
}
.top {
  transform: translate3d(0, -5rem, 0);
}
.category {
  text-align: center;
  margin-top: 14px;
  margin-right: 23px;
}
.second-nav a {
  font-size: 1.16rem;
  color: #71777c;
}
a.router-link-active {
  color: #1e80ff;
}
.second-nav a:hover {
  color: #1e80ff;
}
.second-nav {
  display: flex;
  margin: auto;
  max-width: 960px;
}
.cat-tag {
  display: flex;
  flex-wrap: wrap;
}
.cat-btn {
  background-color: #f1f1f1;
  width: auto;
  border-radius: 10px;
  padding: 2px 10px;
  margin: 3px 7px;
}
.cat-btn a {
  font-size: 1.16rem;
  color: #71777c;
}
.cat-btn a:hover {
  color: #1e80ff;
}

.flex {
  display: flex;
  flex-direction: row;
}
</style>
