import { addons } from "@storybook/manager-api"

addons.setConfig({
  sidebar: {
    filters: {
      hideInternalDocs: (item) => item.id !== "how-ai-was-used--docs",
    },
  },
})
