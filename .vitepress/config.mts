import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar' // Using standard generateSidebar for multi-routing

// https://vitepress.dev
export default defineConfig({
  title: "academia",
  description: "Notes collected over years of studies.",
  lang: 'en-US',
  head: [['link', { rel: 'icon', href: '/academia-frontend/conceivilize.png' }]],
  
  themeConfig: {
    logo: '/conceivilize.png',
    socialLinks: [
      { icon: 'github', link: 'https://github.com' }
    ],
    footer: {
      message: 'Powered by VitePress',
      copyright: 'Copyright © 2025 Conceivilize'
    },
    search: {
      provider: 'local'
    },

    // ─── MULTI-SIDEBAR CONFIGURATION ───
    // Generates a separate directory scanner context for each root folder
    sidebar: generateSidebar([
      {
        documentRootPath: 'academia',
        scanStartPath: 'business',
        resolvePath: '/business/',
        useTitleFromFileHeading: true,
        useFolderTitleFromIndexFile: true,
        useFolderLinkFromIndexFile: true,
        collapsed: true,
        capitalizeFirst: true,
        excludeByFolderDepth: undefined // Ensures nothing is skipped downward
      },
      {
        documentRootPath: 'academia',
        scanStartPath: 'decision_science',
        resolvePath: '/decision_science/',
        useTitleFromFileHeading: true,
        useFolderTitleFromIndexFile: true,
        useFolderLinkFromIndexFile: true,
        collapsed: true,
        capitalizeFirst: true,
        excludeByFolderDepth: undefined
      },
      {
        documentRootPath: 'academia',
        scanStartPath: 'sustainability',
        resolvePath: '/sustainability/',
        useTitleFromFileHeading: true,
        useFolderTitleFromIndexFile: true,
        useFolderLinkFromIndexFile: true,
        collapsed: true,
        capitalizeFirst: true,
        excludeByFolderDepth: undefined
      },
      {
        documentRootPath: 'academia',
        scanStartPath: 'technology',
        resolvePath: '/technology/',
        useTitleFromFileHeading: true,
        useFolderTitleFromIndexFile: true,
        useFolderLinkFromIndexFile: true,
        collapsed: true,
        capitalizeFirst: true,
        excludeByFolderDepth: undefined
      }
    ])
  },
  
  markdown: { math: true },
  srcDir: 'academia',
  cleanUrls: true,
  lastUpdated: true,
  base: '/academia-frontend/',
  sitemap: { hostname: "https://github.io" },
});