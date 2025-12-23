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
      { text: 'About', link: '/about.md' },
    ],
    logo: '/Logo.png',

    sidebar: [
      {
        text: 'Navigation',
        items: [
          { text: 'Personal Projects', link: '/projects.md' },
          { text: 'Projects I Contribute To', link: '/contributions.md' },
          { text: 'About Me', link: '/about.md' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Nerdy-Technician' }
    ]
  }
})
