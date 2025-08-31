import { defineConfig } from 'vitepress'
import {withSidebar} from 'vitepress-sidebar'

// https://vitepress.dev/reference/site-config
const vitePressOptions = {
  title: "academia",
  description: "Notes collected over years of studies.",
  lang: 'en-US',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/conceivilize.png',
    
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
  sitemap: {hostname: "https://supratikchatterjee16.github.io/academia-frontend/"},
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