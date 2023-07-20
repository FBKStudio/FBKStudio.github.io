import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "博文",
    icon: "book",
    link: "/article/"
  },
  {
    text: "聚餐",
    icon: "users",
    link: "/together/"
  },
  {
    text: "旅游",
    icon: "plane-departure",
    link: "/travel/"
  },
  {
    text: "游戏",
    icon: "gamepad",
    link: "/game/"
  },
  {
    text: "信息",
    icon: "cloud",
    link: "/information/"
  },
  {
    text: "时间轴",
    icon: "hourglass-half",
    link: "/timeline/"
  },
  {
    text: "索引",
    icon: "magnifying-glass",
    children: [
      { text: "分类", icon: "list", link: "/category/" }, 
      { text: "标签", icon: "tags", link: "/tag/" },
      { text: "收藏", icon: "star", link: "/star/" },  
    ]
  },

]);
