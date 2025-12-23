import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Nerdy Technicians Portfolio",
  description: "Because Real Nerds Selfhost",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Projects', link: '/projects.md' },
      { text: 'Contributions', link: '/contributions.md' },
      { text: 'About', link: '/about.md' },
      { text: 'Docs', link: '/docs/' }
    ],
    logo: 'https://avatars.githubusercontent.com/u/45691205?v=4',

    sidebar: {
      '/docs/': [
        {
          text: 'Documentation',
          items: [
            { text: 'Overview', link: '/docs/' },
            { text: 'TRMM Scripts', link: '/docs/trmm-scripts' },
            { text: 'LinuxRMM-Script', link: '/docs/linuxrmm-script' },
            { text: 'NerdyStore', link: '/docs/nerdystore' },
            { text: 'Boiler Plates', link: '/docs/boiler-plates' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Nerdy-Technician' }
    ]
  }
})
