import "../src/styles/globals.css"
import { withThemeByClassName } from "@storybook/addon-themes"

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
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
