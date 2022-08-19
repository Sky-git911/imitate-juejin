/**
 * api 管理
 * @date 22/7/29
 * @author 伊书豪
 */
import request from "./../utils/request";
export default {
    // 获取测试数据
    getTestData() {
        return request({
            url: "/test",
            method: "get",
            data: {},
            mock: true,
        });
    },
    // 获取导航栏类别
    getCategory() {
        return request({
            url: "/category",
            method: "get",
            data: {},
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
    // 获取article
    getArticle(params) {
        return request({
            url: "/article",
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
};