import { defineConfig } from 'vitepress';
import { version } from '../package.json';

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Giovanny's Wiki",
    description: 'A Software Development Wiki',
    lastUpdated: true,
    lang: 'en-US',

    head: [
        [
            'script',
            {
                async: '',
                src: 'https://www.googletagmanager.com/gtag/js?id=G-49BMGQ90H9'
            }
        ],
        [
            'script',
            {},
            "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-49BMGQ90H9');"
        ]
    ],

    themeConfig: {
        search: {
            provider: 'local',
            options: {
                detailedView: true
            }
        },
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Wiki', link: '/wiki/' },
            { text: `v${version}`, link: '#' }
        ],

        sidebar: [
            {
                text: '🏠 Home',
                link: '/wiki/'
            },

            {
                text: '🤖 Data Structures & Algorithms',
                link: '/wiki/dsa/',
                docFooterText: 'Data Structures & Algorithms',
                collapsed: false,
                items: [
                    { text: 'Trie', link: '/wiki/dsa/trie/' },
                    { text: 'Binary Search Tree', link: '/wiki/dsa/binary-search-tree/' }
                ]
            },

            {
                text: '🌐 System Design',
                collapsed: true,
                docFooterText: 'System Design',
                link: '/wiki/system-design/',
                items: []
            },

            {
                text: '🏗️ Domain Driven Design',
                collapsed: true,
                docFooterText: 'Domain Driven Design',
                link: '/wiki/ddd/',
                items: [
                    {
                        text: 'Sub-domains vs Bounded Context',
                        link: '/wiki/ddd/subdomain-bounded-context'
                    }
                ]
            },

            {
                text: '📒 Vitepress Examples',
                collapsed: true,
                docFooterText: 'Vitepress Examples',
                items: [
                    {
                        text: 'Markdown Examples',
                        link: '/wiki/vite-examples/markdown-examples'
                    },
                    {
                        text: 'Runtime API Examples',
                        link: '/wiki/vite-examples/api-examples'
                    }
                ]
            },

            {
                text: '👨‍💻 About Me',
                link: '/wiki/about-me.md'
            }
        ],

        socialLinks: [
            {
                icon: 'github',
                link: 'https://github.com/giovannymassuia/wiki.giovannymassuia.io'
            }
        ],

        footer: {
            message: 'Giovanny Massuia 👨‍💻',
            copyright: 'Copyright © 2023'
        }
    }
});
