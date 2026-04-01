const path = require("path")

module.exports = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    {
      name: "@storybook/addon-essentials",
      options: {
        docs: false,
      },
    },
    {
      name: "@storybook/addon-docs",
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [require("remark-gfm").default || require("remark-gfm")],
          },
        },
      },
    },
    "@storybook/addon-themes",
  ],
  framework: "@storybook/react-vite",
  viteFinal: async (config) => {
    config.resolve = config.resolve || {}
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "../src"),
    }
    return config
  },
}
