import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";
import tinymce from "tinymce";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

import "element-plus/dist/index.css";

const app = createApp(App);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(ElementPlus).use(store).use(router).mount("#app");
