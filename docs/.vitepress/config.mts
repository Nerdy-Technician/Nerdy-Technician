import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Nerdy Technicians Portfolio",
  description: "Because Real Nerds Selfhost",
  head: [
    ['link', { rel: 'icon', href: 'https://avatars.githubusercontent.com/u/45691205?v=4' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Projects', link: '/projects.md' },
      { text: 'Contributions', link: '/contributions.md' },
      { 
        text: 'Documentation', 
        items: [
          { text: '� TRMM Scripts', link: '/docs/trmm-scripts' },
          { text: '🔧 LinuxRMM-Script', link: '/docs/linuxrmm-script' },
          { text: '🛍️ NerdyStore', link: '/docs/nerdystore' },
          { text: '🔨 Boiler Plates', link: '/docs/boiler-plates' }
        ]
      },
      { 
        text: 'Roadmap', 
        items: [
          { text: '📜 TRMM Scripts', link: '/roadmap/trmm-scripts.md' },
          { text: '🔧 LinuxRMM-Script', link: '/roadmap/linuxrmm-script.md' },
          { text: '🛍️ NerdyStore', link: '/roadmap/nerdystore.md' },
          { text: '🔨 Boiler Plates', link: '/roadmap/boiler-plates.md' }
        ]
      },
      { text: 'About', link: '/about.md' }
    ],
    logo: 'https://avatars.githubusercontent.com/u/45691205?v=4',

    search: {
      provider: 'local'
    },

    sidebar: {
      '/projects/': [
        {
          text: 'Projects',
          items: [
            { text: '📜 TRMM Scripts', link: '/projects/trmm-scripts' },
            { text: '🔧 LinuxRMM-Script', link: '/projects/linuxrmm-script' },
            { text: '🛍️ NerdyStore', link: '/projects/nerdystore' },
            { text: '🔨 Boiler Plates', link: '/projects/boiler-plates' }
          ]
        }
      ],
      '/docs/': [
        {
          text: 'Documentation',
          items: [
            { text: '📚 Overview', link: '/docs/' },
            { text: '📜 TRMM Scripts', link: '/docs/trmm-scripts' },
            { text: '🔧 LinuxRMM-Script', link: '/docs/linuxrmm-script' },
            { text: '🛍️ NerdyStore', link: '/docs/nerdystore' },
            { text: '🔨 Boiler Plates', link: '/docs/boiler-plates' }
          ]
        }
      ]
    },

    footer: {
      message: 'Built with ❤️ using VitePress | Because Real Nerds Selfhost',
      copyright: 'Copyright © 2024-2025 Nerdy-Technician. All rights reserved.<br><a href="https://buymeacoffee.com/nerdytechie" target="_blank" rel="noopener">Buy Me A Coffee ☕</a>'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Nerdy-Technician' },
      { icon: { svg: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M9.88 9.88a5 5 0 0 0 7.07 7.07l1.71-1.71" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>' }, link: 'https://links.nerdy-technician.social/' },
      { icon: { svg: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.317 4.369a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.211.375-.444.864-.607 1.25a18.27 18.27 0 00-5.487 0c-.163-.386-.395-.875-.607-1.25a.077.077 0 00-.079-.036 19.736 19.736 0 00-4.885 1.515.07.07 0 00-.033.028C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.056 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.873-1.295 1.226-1.994a.076.076 0 00-.042-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.294.075.075 0 01.078-.01c3.928 1.793 8.18 1.793 12.062 0a.075.075 0 01.079.009c.12.098.246.198.373.295a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.359.698.77 1.364 1.225 1.994a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.055c.5-4.718-.838-8.813-3.549-12.456a.061.061 0 00-.033-.028zM8.02 15.331c-1.183 0-2.157-.965-2.157-2.156 0-1.193.964-2.157 2.157-2.157 1.193 0 2.157.964 2.157 2.157 0 1.191-.964 2.156-2.157 2.156zm7.975 0c-1.183 0-2.157-.965-2.157-2.156 0-1.193.964-2.157 2.157-2.157 1.193 0 2.157.964 2.157 2.157 0 1.191-.964 2.156-2.157 2.156z" fill="currentColor"/></svg>' }, link: 'https://discord.com/users/512164935137099780' }
    ]
  }
})
