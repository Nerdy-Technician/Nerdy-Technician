import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Nerdy Technicians Portfolio",
  description: "Because Real Nerds Selfhost",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Projects', link: '/projects' },
      { text: 'About', link: '/about' },
    ],
    logo: '/Portfolio.png',

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Personal Projects', link: '/projects' },
          { text: 'Projects I contribute to', link: '/contributions' },
          { text: 'About Me', link: '/about' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Nerdy-Technician' }
    ]
  }
})
