/**
 * api 管理
 * @date 22/7/29
 * @author 伊书豪
 */
import request from "./../utils/request";
export default {
  // 获取导航栏类别
  getCategory() {
    return request({
      url: "/category",
      method: "get",
      data: {},
      mock: false,
    });
  },
  // 获取导航栏类别下标签
  getCategoryType(params) {
    return request({
      url: "/category/tag",
      method: "post",
      data: params,
      mock: false,
    });
  },
  // 获取comment
  getComment(params) {
    return request({
      url: "/comment",
      method: "post",
      data: params,
      mock: false,
    });
  },

  // 获取热门评论
  getCommentHot(params) {
    return request({
      url: "/comment/hot",
      method: "post",
      data: params,
      mock: false,
    });
  },

  // 获取综合文章列表接口
  getComprehensiveList(params) {
    return request({
      url: "/article/comprehensive",
      method: "post",
      data: params,
      mock: false,
    });
  },
  // 获取author
  getAuthorRank() {
    return request({
      url: "/user/rank",
      method: "get",
      data: {},
      mock: false,
    });
  },
  // 获取author登记图片
  getLevelImg(params) {
    return request({
      url: `/lvimg/${params}`,
      method: "get",
      data: {},
      mock: false,
    });
  },
  // 获取相关文章
  getSimilarArticle(params) {
    return request({
      url: "/article/similar",
      method: "post",
      data: params,
      mock: false,
    });
  },
};
