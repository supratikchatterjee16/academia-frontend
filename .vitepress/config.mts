import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "academia",
  description: "Notes collected over years of studies.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/assets/conceivilize.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/supratikchatterjee16/academia' }
    ],
    footer: {
      message: 'Powered by VitePress',
      copyright: 'Copyright © 2025 Conceivilize'
    }
  }
})
