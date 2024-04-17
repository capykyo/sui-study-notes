import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Sui notes",
  description: "Learn Move&Sui, understand them and apply them.",
  lang: 'zh-CN',
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }]
  ],
  themeConfig: {
    logo: '/favicon.png',
    search: {
      provider: 'local'
    },
    nav: [
      {
        text: 'Sui Notes',
        items: [
          { text: 'Basics', link: '/sui/basics/overview' },
          { text: 'Advanced', link: '/sui/advanced/smart-contracts' },
          { text: 'Resources', link: '/sui/resources/tools' }
        ]
      },
      {
        text: 'Move Notes',
        items: [
          { text: 'Basics', link: '/move/basics/overview' },
          { text: 'Advanced', link: '/move/advanced/modules' },
          { text: 'Resources', link: '/move/resources/tools' }
        ]
      },
      { text: 'QA', link: '/qa/index' },
      { text: 'Contributor', link: '/team' },
    ],

    sidebar: {
      '/sui/': [
        {
          text: 'Sui Notes',
          items: [
            { text: 'Basics', link: '/sui/basics/overview' },
            { text: 'Advanced', link: '/sui/advanced/smart-contracts' },
            { text: 'Resources', link: '/sui/resources/tools' }
          ]
        }
      ],
      '/move/': [
        {
          text: 'Move Notes',
          items: [
            { text: 'Basics', link: '/move/basics/overview' },
            { text: 'Advanced', link: '/move/advanced/modules' },
            { text: 'Resources', link: '/move/resources/tools' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/capykyo/sui-study-notes' }
    ]
  }
})
