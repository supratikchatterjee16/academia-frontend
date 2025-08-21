import { defineConfig } from 'vitepress'
import {withSidebar} from 'vitepress-sidebar'

// https://vitepress.dev/reference/site-config
const vitePressOptions = {
  title: "academia",
  description: "Notes collected over years of studies.",
  lang: 'en-US',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/academia-frontend/assets/conceivilize.svg',
    // nav: [
    //   { text: 'Home', link: '/' },
    //   { text: 'Examples', link: '/markdown-examples' }
    // ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/supratikchatterjee16/academia' }
    ],

    footer: {
      message: 'Powered by VitePress',
      copyright: 'Copyright © 2025 Conceivilize'
    },

    search: {
      provider: 'local'
    }
  },
  markdown: {math: true},
  srcDir: 'academia',
  cleanUrls: true,
  lastUpdated: true,
  base: '/academia-frontend/',
};

const vitePressSidebarOptions = {
  // VitePress Sidebar's options here...
  documentRootPath: 'academia',
  collapsed: true,
  capitalizeFirst: true,
  useTitleFromFileHeading: true,
  useFolderLinkFromIndexFile: true,
  useFolderTitleFromIndexFile: true,
};

export default defineConfig(withSidebar(vitePressOptions, vitePressSidebarOptions));