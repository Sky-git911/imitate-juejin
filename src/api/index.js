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
};
