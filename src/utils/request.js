/**
 * axios 二次封装
 * @date 22/7/29
 * @author 伊书豪
 */

import axios from "axios";
import config from "./../config";
import { ElMessage } from "element-plus";

// 创建axios实例对象，添加全局配置
const service = axios.create({
  baseURL: config.baseApi,
  timeout: 8000,
});

// 请求拦截
service.interceptors.request.use((req) => {
  return req;
});

// 响应拦截
service.interceptors.response.use((res) => {
  // 假设 code, data, msg 是data的数据结构
  const { code, data, msg } = res.data;
  if (code === 200) {
    return data;
  } else {
    ElMessage.error(msg);
    return Promise.reject(msg);
  }
});

/**
 * 请求核心函数
 * @param {Object} options 请求配置
 */
function request(options) {
  options.method = options.method || "get";
  if (options.method.toLowerCase() === "get") {
    options.params = options.data;
  }

  let isMock = config.mock;
  if (typeof options.mock != "undefined") {
    isMock = options.mock;
  }
  if (config.env === "prod") {
    service.defaults.baseURL = config.baseApi;
  } else {
    service.defaults.baseURL = isMock ? config.mockApi : config.baseApi;
  }

  return service(options);
}

["get", "post", "put", "delete", "patch"].forEach((item) => {
  request[item] = (url, data, options) => {
    return request({
      url,
      data,
      method: item,
      ...options,
    });
  };
});

export default request;
