<template>
  <div class="timeline" ref="scrollContainer" @scroll="handleScrollEvent">
    <div class="infinite-list-phantom" :style="virtualHegiht"></div>
    <div class="timeline__content" :style="blankFillStyle">
      <div class="timeline__content__entry-list">
        <div class="list-container">
          <header class="list-container__header">
            <nav role="navigation" class="list-container__nav">
              <ul class="nav-list">
                <li class="nav-list__item">
                  <a href="" class="active">推荐</a>
                </li>
                <li class="nav-list__item"><a href="">最新</a></li>
                <li class="nav-list__item"><a href="">热榜</a></li>
              </ul>
            </nav>
          </header>
          <div class="list-container__wrap">
            <!-- 列表 -->
            <div class="entry-list">
              <!-- 循环 li ，文章卡片-->
              <li
                class="item"
                v-for="(item, index) in showDataList"
                :key="index"
                @click="handleToDetail(item.article_id || item.advert_id)"
              >
                <!-- <li
                class="item"
                v-for="(item) in showDataList"
                :key="item.article_id || item.advert_id"
                @click="handleToDetail(item.article_id || item.advert_id)"
              > -->
                <div
                  :class="{
                    item__content: true,
                    'item-hover': item.article_id,
                  }"
                >
                  <!-- 发布信息 -->
                  <div class="item__content__meta">
                    <a href="" class="user-message">
                      <div class="user-popover">{{ item.author_name }}</div>
                    </a>
                    <div class="date">时间</div>
                    <div class="tag_list">
                      <a
                        v-for="tag in item.tags"
                        :key="tag.id"
                        href=""
                        class="tag"
                        >{{ tag.tag_name }}</a
                      >
                    </div>
                  </div>
                  <div v-if="item.advert_id" class="advertisement">广告</div>
                  <!-- 文章内容 -->
                  <div class="item__content__wrap">
                    <!-- 标题、正文缩略语 -->
                    <div class="content-main">
                      <div class="content-main__title">
                        <a href="" class="title" :title="item.title">{{
                          item.title
                        }}</a>
                      </div>
                      <div class="content-main__abstract">
                        <a href="" class="abstract" target="_blank">
                          <div>
                            {{ item.brief || item.brief_content }}
                          </div>
                        </a>
                      </div>
                      <!-- 左下角icon、浏览点赞评论数量 -->
                      <ul
                        v-if="item.article_id"
                        class="content-main__action-area"
                      >
                        <li class="item view">
                          <i></i>
                          <span>{{ item.view_count }}</span>
                        </li>
                        <li class="item like">
                          <i></i>
                          <span>{{ item.collect_count }}</span>
                        </li>
                        <li class="item comment">
                          <i></i>
                          <span>{{ item.comment_count }}</span>
                        </li>
                      </ul>
                    </div>
                    <!-- 文章主图 -->
                    <img
                      v-if="item.cover_image || item.picture"
                      class="lazy content-thumb"
                      :src="item.cover_image || item.picture"
                      :alt="item.title"
                    />
                  </div>
                  <!-- 关闭按钮 -->
                  <div class="dislike-button" @click.stop>
                    <svg class="svg">
                      <path
                        d="M1.70538 11.7191C1.52399 11.899 1.22992 11.899 1.04853 11.7191L1.03125 11.7019C0.849866 11.522 0.84987 11.2302 1.03125 11.0502L10.2956 1.85884C10.477 1.67889 10.7711 1.67889 10.9525 1.85885L10.9697 1.876C11.1511 2.05596 11.1511 2.34773 10.9697 2.52769L1.70538 11.7191Z"
                      />
                      <path
                        d="M1.0828 2.48943C0.903312 2.30758 0.904276 2.01369 1.08495 1.83302L1.10216 1.8158C1.28284 1.63513 1.5748 1.63609 1.75428 1.81794L10.9104 11.0949C11.0898 11.2767 11.0889 11.5706 10.9082 11.7513L10.891 11.7685C10.7103 11.9492 10.4183 11.9482 10.2389 11.7664L1.0828 2.48943Z"
                      />
                    </svg>
                  </div>
                </div>
              </li>
              <div class="loading">
                <h2>{{ msg }}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    allDataList: {
      type: Array,
      default: () => [],
    },
    // isRequestStatus: {
    //   type: Boolean,
    //   default: true,
    // },
  },
  data() {
    return {
      msg: "正在加载中",
      isRequestStatus: false, // 请求数据状态
      oneHeight: 141, //单条数据的高度
      containSize: 0, // 容器的最大容积
      startIndex: 0, // 记录当前滚动的第一个元素的索引
      scrollStatus: true,
      pagenum: 0,
    };
  },
  mounted() {
    this.observerLoading();
    this.getContainSize();
    window.onresize = this.getContainSize;
    window.onorientationchange = this.getContainSize;
  },
  computed: {
    // 容器最后一个元素索引
    endIndex() {
      let endIndex = this.startIndex + this.containSize * 2;
      if (!this.allDataList[endIndex]) {
        endIndex = this.allDataList.length - 1;
      }
      return endIndex;
    },
    // 定义待显示的数组列表元素
    showDataList() {
      let startIndex = 0;
      if (this.startIndex <= this.containSize) {
        startIndex = 0;
      } else {
        startIndex = this.startIndex - this.containSize;
      }
      return this.allDataList.slice(startIndex, this.endIndex);
    },
    // 定义上下空白的高度样式
    blankFillStyle() {
      let startIndex = 0;
      if (this.startIndex <= this.containSize) {
        startIndex = 0;
      } else {
        startIndex = this.startIndex - this.containSize;
      }
      return {
        paddingTop: startIndex * this.oneHeight + "px",
        paddingBottom:
          (this.allDataList.length - this.endIndex) * this.oneHeight + "px",
      };
    },
    // 列表总高度
    virtualHegiht() {
      return {
        height: this.allDataList.length * this.oneHeight + "px",
      };
    },
  },
  watch: {
    allDataList() {
      this.isRequestStatus = false;
    },
  },
  methods: {
    // 计算容器的最大容积
    getContainSize() {
      let screenHeight = this.$el.clientHeight;
      console.log("可视高度", screenHeight);
      this.containSize = Math.ceil(screenHeight / this.oneHeight);
      console.log(this.containSize);
    },
    // 定义滚动行为事件方法
    handleScrollEvent() {
      // 节流
      // if (this.scrollStatus) {
      //   this.scrollStatus = false;
      //   this.setDataStartIndex();
      //   let timer = setTimeout(() => {
      //     this.scrollStatus = true;
      //     clearTimeout(timer);
      //   }, 30);
      // }

      // 使用 requestAnimationFrame 动画帧方法来实现节流效果

      // 兼容大部分浏览器
      let requestAnimationFrame =
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.msRequestAnimationFrame;
      let fps = 60;
      let interval = 1000 / fps;
      let then = Date.now(); // 执行前时间戳
      requestAnimationFrame(() => {
        let now = Date.now(); // 执行时时间戳
        this.setDataStartIndex();
        if (now - then >= interval) {
          console.log("active");
          then = now;
          requestAnimationFrame(arguments.callee);
        }
      });
    },
    // 执行数据设置的相关任务，滚动事件的具体行为
    setDataStartIndex() {
      let scrollTop = this.$refs.scrollContainer.scrollTop;
      let currentIndex = ~~(scrollTop / this.oneHeight);
      if (this.startIndex == currentIndex) return;
      this.startIndex = currentIndex;
    },

    observerLoading() {
      const loading = document.querySelector(".loading");
      // 建立观察者
      const ob = new IntersectionObserver(
        (entries) => {
          let entry = entries[0];
          if (entry.isIntersecting && !this.isRequestStatus) {
            this.isRequestStatus = true;
            this.$emit("request", { pagenum: this.pagenum });
            this.pagenum++;
          }
        },
        {
          thresholds: 0.1,
        }
      );
      // 观察
      ob.observe(loading);
    },

    // 跳转详情页
    handleToDetail(id) {
      console.log(id);
      let routeUrl = this.$router.resolve({
        path: `/post/${id}`,
      });
      window.open(routeUrl.href, "_blank");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/article-list.scss";
.loading {
  height: 2rem;
}
</style>
