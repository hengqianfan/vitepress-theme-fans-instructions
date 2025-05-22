import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "FANS主题",
  description: "FANS主题使用文档",
  base: '/vitepress-theme-fans-instructions/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },

      {
        text: 'boke系列', items: [
          { text: 'boke-mini 主题', link: '/repo/boke_mini/00 简述' },
          { text: 'boke 主题', link: '/repo/boke/00 简述' },
          // { text: 'boke-Ultra', link: '/boke_mini/00 简述' }


        ]
      }
    ],

    sidebar: {
      '/repo/boke/': [
        {
          text: '简介',
          link: '/boke/00 简述'

        }
      ],
      '/repo/boke_mini/': [
        {
          text: '简介',
          link: '/boke/00 简述'

        }
      ]
    },
    outline: {

      label: '页面大纲',
      level: [2, 6]

    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/hengqianfan/vitepress-theme-fans-instructions' },
      { icon: 'github', link: 'https://github.com/hengqianfan/vitepress-theme-fans-instructions' }
    ]
  }
})
