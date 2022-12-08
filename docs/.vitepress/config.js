const path = require("path");

module.exports = {
  title: "Vue Avatar",
  description: "Simple avatar component for Vue 3",
  base: "/vue-avatar/",
  vite: {
    plugins: [],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "../../src"),
      },
      dedupe: ["vue"], // avoid error when using dependencies that also use Vue
    },
  },
  themeConfig: {
    sidebar: {
      "/guide/": [
        {
          text: "Get started",
          items: [{ text: "Install & Use", link: "/guide/install" }],
        },
        {
          text: "Props",
          collapsible: true,
          items: [
            { text: "Username", link: "/guide/username" },
            { text: "Size", link: "/guide/size" },
            { text: "Border radius", link: "/guide/border-radius" },
            { text: "Background color", link: "/guide/background-color" },
            { text: "Color", link: "/guide/color" },
            { text: "Lighten", link: "/guide/lighten" },
            { text: "Image", link: "/guide/image" },
          ],
        },
      ],
      "/demo/": [],
    },
  },
};
