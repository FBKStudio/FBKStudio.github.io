import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchProPlugin } from "vuepress-plugin-search-pro";

export default defineUserConfig({
  base: "/",
  port: 8888,
  lang: "zh-CN",
  title: " FBK ",
  description: "FiveBlack 的博客",

  theme,

  plugins: [
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
    }),
  ],

  // Enable it with pwa
  // shouldPrefetch: false,
});
