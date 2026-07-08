import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Nerdy Technician",
  titleTemplate: ":title | Portfolio & Docs",
  description: "Infrastructure automation, self-hosting projects, and practical documentation from Nerdy Technician.",
  lastUpdated: true,
  cleanUrls: true,
  head: [
    ['link', { rel: 'icon', href: 'https://avatars.githubusercontent.com/u/45691205?v=4' }],
    ['meta', { name: 'theme-color', content: '#c80000' }],
    ['meta', { property: 'og:title', content: 'Nerdy Technician' }],
    ['meta', { property: 'og:description', content: 'Infrastructure automation, self-hosting projects, and practical documentation.' }],
    ['meta', { property: 'og:type', content: 'website' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/blog' },
      {
        text: 'Projects',
        items: [
          { text: 'All Projects', link: '/projects/' },
          { text: 'Nerdy-RMMScripts', link: '/projects/Nerdy-RMMScripts/' },
          { text: 'NerdyStore', link: '/projects/NerdyStore/' },
          { text: 'LinuxRMM-Script', link: '/projects/LinuxRMMScript/' },
          { text: 'BoilerPlates', link: '/projects/BoilerPlates/' }
        ]
      },
      {
        text: 'Documentation',
        items: [
          { text: 'Nerdy-RMMScripts', link: '/docs/Nerdy-RMMScripts/' },
          { text: 'NerdyStore', link: '/docs/NerdyStore/' },
          { text: 'LinuxRMM-Script', link: '/docs/LinuxRMMScript/Getting-Started' },
          { text: 'BoilerPlates', link: '/docs/BoilerPlates/Getting-Started' }

        ]
      },
      { text: 'CV', link: '/cv/' },
      { text: 'Contributions', link: '/contributions' },
      { text: 'Homelab', link: '/homelab' },
      { text: 'About', link: '/about' }
    ],
    logo: 'https://avatars.githubusercontent.com/u/45691205?v=4',

    search: {
      provider: 'local'
    },

    sidebar: {
      '/projects/Nerdy-RMMScripts': [
        {
          text: 'Nerdy-RMMScripts',
          items: [
            { text: 'Overview', link: '/projects/Nerdy-RMMScripts/' },
            { text: 'Documentation', link: '/docs/Nerdy-RMMScripts/' },
          ]
        }
        
      ],
      '/projects/NerdyStore': [
        {
          text: 'NerdyStore',
          items: [
            { text: 'Overview', link: '/projects/NerdyStore/' },
            { text: 'Documentation', link: '/docs/NerdyStore/' },
          ]
        }
      ],
      '/projects/LinuxRMMScript': [
        {
          text: 'LinuxRMM-Script',
          items: [
            { text: 'Overview', link: '/projects/LinuxRMMScript/' },
            { text: 'Documentation', link: '/docs/LinuxRMMScript/Getting-Started' },
          ]
        }
      ],
      '/projects/BoilerPlates': [
        {
          text: 'BoilerPlates',
          items: [
            { text: 'Overview', link: '/projects/BoilerPlates/' },
            { text: 'Documentation', link: '/docs/BoilerPlates/Getting-Started' },
          ]
        }
      ],
      '/docs/BoilerPlates': [
        {
          text: 'BoilerPlates Docs',
          items: [
            { text: 'Getting Started', link: '/docs/BoilerPlates/Getting-Started' },
          ]
        }

      ],
      '/docs/Nerdy-RMMScripts': [
        {
          text: 'Nerdy-RMMScripts Docs',
          items: [
            { text: 'Overview', link: '/docs/Nerdy-RMMScripts/' },
            { text: 'Getting Started', link: '/docs/Nerdy-RMMScripts/Getting-Started' },
            { text: 'Naming Convention', link: '/docs/Nerdy-RMMScripts/Naming-Convention' },
            { text: 'Issue Reporting', link: '/docs/Nerdy-RMMScripts/Issue-Reporting' },
          ]
        }
      ],

      '/docs/NerdyStore': [
        {
          text: 'NerdyStore Docs',
          items: [
            { text: 'Overview', link: '/docs/NerdyStore/' },
            { text: 'Live Store', link: 'https://store.nerdytech.dev/' },
          ]
        }
      ],
      '/docs/LinuxRMMScript': [
        {
          text: 'LinuxRMM-Script Docs',
          items: [
            { text: 'Getting Started', link: '/docs/LinuxRMMScript/Getting-Started' },
            { text: 'Step 1: Download and Prep', link: '/docs/LinuxRMMScript/Step%201%20‐%20Download%20and%20Prep%20the%20Script' },
            { text: 'Step 2: Fetch Mesh URL', link: '/docs/LinuxRMMScript/Step%202%20‐%20Fetch%20Mesh%20URL' },
            { text: 'Step 3: Client and Site IDs', link: '/docs/LinuxRMMScript/Step%203%20‐%20Fetch%20your%20Site%20and%20Client%20ID' },
            { text: 'Step 4: Auth Token', link: '/docs/LinuxRMMScript/Step%204%20‐%20Getting%20Tactical%20RMM%20authorisation%20Token' },
            { text: 'Step 5: Install the Agent', link: '/docs/LinuxRMMScript/Step%205%20‐%20Install%20the%20Agent' },
          ]
        }
      ],
      '/cv/': [
        {
          text: 'CV & Expertise',
          items: [
            { text: 'Dark Web Monitoring', link: '/cv/darkweb-monitoring' },
            { text: 'Automation', link: '/cv/automation' },
            { text: 'Builds (Intune)', link: '/cv/builds' }
          ]
        }
      ]
    },



    footer: {
      message: 'Built with ❤️ using VitePress | Because Real Nerds Selfhost',
      copyright: 'Copyright © 2024-2026 Nerdy Technician. All rights reserved.<br><a href="https://buymeacoffee.com/nerdytechie" target="_blank" rel="noopener">Buy Me A Coffee ☕</a>'
    },

    socialLinks: [
      { icon: { svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>' }, link: 'https://github.com/Nerdy-Technician' },
      { icon: { svg: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Mastodon</title><path d="M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C17.51.242 15.792 0 11.813 0h-.03c-3.98 0-4.835.242-5.288.309C3.882.692 1.496 2.518.917 5.127.64 6.412.61 7.837.661 9.143c.074 1.874.088 3.745.26 5.611.118 1.24.325 2.47.62 3.68.55 2.237 2.777 4.098 4.96 4.857 2.336.792 4.849.923 7.256.38.265-.061.527-.132.786-.213.585-.184 1.27-.39 1.774-.753a.057.057 0 0 0 .023-.043v-1.809a.052.052 0 0 0-.02-.041.053.053 0 0 0-.046-.01 20.282 20.282 0 0 1-4.709.545c-2.73 0-3.463-1.284-3.674-1.818a5.593 5.593 0 0 1-.319-1.433.053.053 0 0 1 .066-.054c1.517.363 3.072.546 4.632.546.376 0 .75 0 1.125-.01 1.57-.044 3.224-.124 4.768-.422.038-.008.077-.015.11-.024 2.435-.464 4.753-1.92 4.989-5.604.008-.145.03-1.52.03-1.67.002-.512.167-3.63-.024-5.545zm-3.748 9.195h-2.561V8.29c0-1.309-.55-1.976-1.67-1.976-1.23 0-1.846.79-1.846 2.35v3.403h-2.546V8.663c0-1.56-.617-2.35-1.848-2.35-1.112 0-1.668.668-1.67 1.977v6.218H4.822V8.102c0-1.31.337-2.35 1.011-3.12.696-.77 1.608-1.164 2.74-1.164 1.311 0 2.302.5 2.962 1.498l.638 1.06.638-1.06c.66-.999 1.65-1.498 2.96-1.498 1.13 0 2.043.395 2.74 1.164.675.77 1.012 1.81 1.012 3.12z"/></svg>'}, link: 'https://masto.nerdy-technician.social/@Roffo' },
      { icon: { svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Links</title><path d="m13.73635 5.85251 4.00467-4.11665 2.3248 2.3808-4.20064 4.00466h5.9085v3.30473h-5.9365l4.22865 4.10766-2.3248 2.3338L12.0005 12.099l-5.74052 5.76852-2.3248-2.3248 4.22864-4.10766h-5.9375V8.12132h5.9085L3.93417 4.11666l2.3248-2.3808 4.00468 4.11665V0h3.4727zm-3.4727 10.30614h3.4727V24h-3.4727z"/></svg>' }, link: 'https://links.nerdytech.dev/' },
      { icon: { svg: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Discord</title><path d="M20.317 4.369a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.211.375-.444.864-.607 1.25a18.27 18.27 0 00-5.487 0c-.163-.386-.395-.875-.607-1.25a.077.077 0 00-.079-.036 19.736 19.736 0 00-4.885 1.515.07.07 0 00-.033.028C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.056 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.873-1.295 1.226-1.994a.076.076 0 00-.042-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.294.075.075 0 01.078-.01c3.928 1.793 8.18 1.793 12.062 0a.075.075 0 01.079.009c.12.098.246.198.373.295a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.359.698.77 1.364 1.225 1.994a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.055c.5-4.718-.838-8.813-3.549-12.456a.061.061 0 00-.033-.028zM8.02 15.331c-1.183 0-2.157-.965-2.157-2.156 0-1.193.964-2.157 2.157-2.157 1.193 0 2.157.964 2.157 2.157 0 1.191-.964 2.156-2.157 2.156zm7.975 0c-1.183 0-2.157-.965-2.157-2.156 0-1.193.964-2.157 2.157-2.157 1.193 0 2.157.964 2.157 2.157 0 1.191-.964 2.156-2.157 2.156z" fill="currentColor"/></svg>' }, link: 'https://discord.com/users/512164935137099780' },

    ]

  }
})
