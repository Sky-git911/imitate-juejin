/**
 * 环境变量配置
 * @date 22/7/29
 * @author 伊书豪
 */

const env = import.meta.env.MODE || "prod";

const EnvConfig = {
  dev: {
    baseApi: "/api",
    mockApi:
      "https://www.fastmock.site/mock/eec79b676dfa24fcf5c2a0b4a12bb015/api",
  },
  prod: {
    baseApi: "//prodApi.com/api",
    mockApi:
      "https://www.fastmock.site/mock/eec79b676dfa24fcf5c2a0b4a12bb015/api",
  },
};

export default {
  env,
  mock: false,
  ...EnvConfig[env],
};
