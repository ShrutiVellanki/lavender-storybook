import React, { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher"

const meta: Meta<typeof LanguageSwitcher> = {
  title: "Components/LanguageSwitcher",
  component: LanguageSwitcher,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A compact toggle button that cycles between supported languages (EN ↔ ES). Works in both expanded and collapsed sidebar layouts. Uses lucide Globe icon and exposes `onLanguageChange` callback.",
      },
    },
  },
  argTypes: {
    collapsed: { control: "boolean" },
    currentLanguage: { control: "select", options: ["en", "es"] },
  },
}

export default meta
type Story = StoryObj<typeof LanguageSwitcher>

export const Default: Story = {
  render: () => {
    const [lang, setLang] = useState("en")
    return (
      <div className="w-60 p-4 rounded-lg border border-border bg-card">
        <LanguageSwitcher currentLanguage={lang} onLanguageChange={setLang} />
      </div>
    )
  },
}

export const Collapsed: Story = {
  render: () => {
    const [lang, setLang] = useState("en")
    return (
      <div className="w-16 p-2 rounded-lg border border-border bg-card flex justify-center">
        <LanguageSwitcher collapsed currentLanguage={lang} onLanguageChange={setLang} />
      </div>
    )
  },
}

export const SpanishActive: Story = {
  render: () => {
    const [lang, setLang] = useState("es")
    return (
      <div className="w-60 p-4 rounded-lg border border-border bg-card">
        <LanguageSwitcher currentLanguage={lang} onLanguageChange={setLang} />
      </div>
    )
  },
}
