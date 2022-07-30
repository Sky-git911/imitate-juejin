import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ElementPlus from "element-plus";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import "element-plus/dist/index.css";
import request from "./utils/request";
import api from "./api";

console.log("环境变量", import.meta.env);

const app = createApp(App);

app.config.globalProperties.$request = request;
app.config.globalProperties.$api = api;

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

// app.use(router).use(ElementPlus).mount("#app");
app.use(router).use(ElementPlus, { size: "small" }).mount("#app");
