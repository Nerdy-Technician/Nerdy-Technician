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
      { 
        text: 'Projects', 
        items: [
          { text: '📜 Nerdy-RMMScripts', link: '/projects/Nerdy-RMMScripts/Index.md' },  
          { text: '🛍️ NerdyStore', link: '/projects/NerdyStore/Index.md' },
          { text: '🔧 LinuxRMM-Script', link: '/projects/LinuxRMMScript/Index.md' },
          { text: '📦 BoilerPlates', link: '/projects/BoilerPlates/Index.md' }
        ]
      },
      { 
        text: 'Documentation', 
        items: [
          { text: '📜 Nerdy-RMMScripts', link: '/docs/Nerdy-RMMScripts/Getting-Started.md' },  
          { text: '🛍️ NerdyStore', link: '/docs/NerdyStore/Getting-Started.md' },
          { text: '🔧 LinuxRMM-Script', link: '/docs/LinuxRMMScript/Getting-Started.md' },
          { text: '📦 BoilerPlates', link: '/docs/BoilerPlates/Getting-Started.md' }

        ]
      },
      { text: 'Contributions', link: '/contributions.md' },
      { text: 'About', link: '/about.md' }
    ],
    logo: 'https://avatars.githubusercontent.com/u/45691205?v=4',

    search: {
      provider: 'local'
    },

    sidebar: {
      '/projects/Nerdy-RMMScripts': [
        {
          text: '📜 Nerdy-RMMScripts',
          items: [
            { text: '🚀 Overview', link: '/projects/Nerdy-RMMScripts/Index.md' },
            { text: '🗂️ Documentation', link: '/docs/Nerdy-RMMScripts/Getting-Started.md' },
          ]
        }
        
      ],
      '/projects/NerdyStore': [
        {
          text: '🛍️ NerdyStore',
          items: [
            { text: '🚀 Overview', link: '/projects/NerdyStore/Index.md' },
            { text: '🗂️ Documentation', link: '/docs/NerdyStore/Getting-Started.md' },
          ]
        }
      ],
      '/projects/LinuxRMMScript': [
        {
          text: '🔧 LinuxRMM-Script',
          items: [
            { text: '🚀 Overview', link: '/projects/LinuxRMMScript/Index.md' },
            { text: '🗂️ Documentation', link: '/docs/LinuxRMMScript/Getting-Started.md' },
          ]
        }
      ],
      '/projects/BoilerPlates': [
        {
          text: '📦 BoilerPlates',
          items: [
            { text: '🚀 Overview', link: '/projects/BoilerPlates/Index.md' },
            { text: '🗂️ Documentation', link: '/docs/BoilerPlates/Getting-Started.md' },
          ]
        }
      ],
      '/docs/BoilerPlates': [
        {
          text: '📦 BoilerPlates Docs',
          items: [
            { text: '🚀 Getting Started', link: '/docs/BoilerPlates/Getting-Started.md' },
          ]
        }

      ],
      '/docs/Nerdy-RMMScripts': [
        {
          text: '📜 Nerdy-RMMScripts Docs',
          items: [
            { text: '🚀 Getting Started', link: '/docs/Nerdy-RMMScripts/Getting-Started.md' },
            { text: '🗚 Naming Convention', link: '/docs/Nerdy-RMMScripts/Naming-Convention.md' },
            { text: '🚩 Issue Reporting', link: '/docs/Nerdy-RMMScripts/Issue-Reporting.md' },
          ]
        }
      ],

      '/docs/NerdyStore': [
        {
          text: '🛍️ NerdyStore Docs',
          items: [
            { text: '🚀 Getting Started', link: '/docs/NerdyStore/Getting-Started.md' },
          ]
        }
      ],
      '/docs/LinuxRMMScript': [
        {
          text: '🔧 LinuxRMM-Script Docs',
          items: [
            { text: '🚀 Getting Started', link: '/docs/LinuxRMMScript/Getting-Started.md' },
            { text: '1️⃣ Download and Prep Script', link: '/docs/LinuxRMMScript/Step%201%20‐%20Download%20and%20Prep%20the%20Script.md' },
            { text: '2️⃣ Fetch Mesh URL', link: '/docs/LinuxRMMScript/Step%202%20‐%20Fetch%20Mesh%20URL.md' },
            { text: '3️⃣ Fetch Site and Client ID', link: '/docs/LinuxRMMScript/Step%203%20‐%20Fetch%20your%20Site%20and%20Client%20ID.md' },
            { text: '4️⃣ Get Tactical RMM Auth Token', link: '/docs/LinuxRMMScript/Step%204%20‐%20Getting%20Tactical%20RMM%20authorisation%20Token.md' },
            { text: '5️⃣ Install the Agent', link: '/docs/LinuxRMMScript/Step%205%20‐%20Install%20the%20Agent.md' },
          ]
        }
      ],
      '/docs/BoilerPlates': [
        {
          text: '📦 BoilerPlates Docs',
          items: [
            { text: '🚀 Getting Started', link: '/docs/BoilerPlates/Getting-Started.md' },
          ]
        }
      ]
    },



    footer: {
      message: 'Built with ❤️ using VitePress | Because Real Nerds Selfhost',
      copyright: 'Copyright © 2024-2025 Nerdy-Technician. All rights reserved.<br><a href="https://buymeacoffee.com/nerdytechie" target="_blank" rel="noopener">Buy Me A Coffee ☕</a>'
    },

    socialLinks: [
      { icon: { svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>' }, link: 'www.github.com/Nerdy-Technician' },
      { icon: { svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Links</title><path d="m13.73635 5.85251 4.00467-4.11665 2.3248 2.3808-4.20064 4.00466h5.9085v3.30473h-5.9365l4.22865 4.10766-2.3248 2.3338L12.0005 12.099l-5.74052 5.76852-2.3248-2.3248 4.22864-4.10766h-5.9375V8.12132h5.9085L3.93417 4.11666l2.3248-2.3808 4.00468 4.11665V0h3.4727zm-3.4727 10.30614h3.4727V24h-3.4727z"/></svg>' }, link: 'https://links.nerdy-technician.social/' },
      { icon: { svg: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Discord</title><path d="M20.317 4.369a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.211.375-.444.864-.607 1.25a18.27 18.27 0 00-5.487 0c-.163-.386-.395-.875-.607-1.25a.077.077 0 00-.079-.036 19.736 19.736 0 00-4.885 1.515.07.07 0 00-.033.028C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.056 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.873-1.295 1.226-1.994a.076.076 0 00-.042-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.294.075.075 0 01.078-.01c3.928 1.793 8.18 1.793 12.062 0a.075.075 0 01.079.009c.12.098.246.198.373.295a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.359.698.77 1.364 1.225 1.994a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.055c.5-4.718-.838-8.813-3.549-12.456a.061.061 0 00-.033-.028zM8.02 15.331c-1.183 0-2.157-.965-2.157-2.156 0-1.193.964-2.157 2.157-2.157 1.193 0 2.157.964 2.157 2.157 0 1.191-.964 2.156-2.157 2.156zm7.975 0c-1.183 0-2.157-.965-2.157-2.156 0-1.193.964-2.157 2.157-2.157 1.193 0 2.157.964 2.157 2.157 0 1.191-.964 2.156-2.157 2.156z" fill="currentColor"/></svg>' }, link: 'https://discord.com/users/512164935137099780' }
    ]
  }
})

