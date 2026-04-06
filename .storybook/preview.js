import "../src/styles/globals.css"
import { withThemeByClassName } from "@storybook/addon-themes"

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    options: {
      storySort: {
        order: [
          "Getting Started",
          ["Introduction", "Design Tokens", "Contributing", "Changelog"],
          "Inputs",
          "Layout",
          "Data Display",
          "Feedback",
          "Forms",
          "Theme",
        ],
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    a11y: {
      config: {
        rules: [
          { id: "color-contrast", enabled: true },
          { id: "label", enabled: true },
          { id: "button-name", enabled: true },
          { id: "aria-roles", enabled: true },
          { id: "aria-valid-attr-value", enabled: true },
        ],
      },
    },
  },
  decorators: [
    withThemeByClassName({
      themes: {
        "Lavender Dawn": "",
        "Lavender Moon": "dark",
      },
      defaultTheme: "Lavender Dawn",
    }),
  ],
}

export default preview
