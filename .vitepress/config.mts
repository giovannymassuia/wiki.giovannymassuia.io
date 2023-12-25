import { defineConfig } from 'vitepress';
import { version } from '../package.json';

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Giovanny's Wiki",
    description: 'A Software Development Wiki',
    lastUpdated: true,
    lang: 'en-US',
    cleanUrls: true,

    head: [
        // favicon
        ['link', { rel: 'icon', href: '/logo.png' }],
        // apple touch icon
        ['link', { rel: 'apple-touch-icon', href: '/logo.png' }],
        [
            'script',
            {
                async: '',
                src: 'https://www.googletagmanager.com/gtag/js?id=G-49BMGQ90H9'
            }
        ],
        ['script', {}, "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-49BMGQ90H9');"]
    ],

    themeConfig: {
        logo: '/logo.png',
        lastUpdated: {
            formatOptions: {
                forceLocale: true
            }
        },

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
            { text: `v${version}`, items: [{ text: 'About Me', link: '/wiki/about-me.md' }] }
        ],

        sidebar: [
            {
                text: '🏠 Home',
                link: '/wiki/'
            },

            // blog
            {
                text: '📝 Blog',
                // link: '/blog/',
                docFooterText: 'Blog',
                collapsed: true,
                items: [
                    {
                        // 2024
                        text: '2024',
                        link: '/wiki/blog/2024/',
                        items: [
                            {
                                text: '📱 Expo Social Login',
                                link: '/wiki/blog/2024/expo-social-login/',
                                collapsed: true,
                                items: [
                                    {
                                        text: 'Google Sign In 🤖',
                                        link: '/wiki/blog/2024/expo-social-login/expo-google-sign-in'
                                    },
                                    {
                                        text: 'Apple Sign In 🍎',
                                        link: '/wiki/blog/2024/expo-social-login/expo-apple-sign-in'
                                    },
                                    {
                                        text: 'Supabase Auth Setup ⚡️',
                                        link: '/wiki/blog/2024/expo-social-login/expo-supabase-setup'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },

            // data structures & algorithms
            {
                text: '🤖 Data Structures & Algorithms',
                link: '/wiki/dsa/',
                docFooterText: 'Data Structures & Algorithms',
                collapsed: true,
                items: [
                    { text: 'Trie', link: '/wiki/dsa/trie/' },
                    { text: 'Binary Search Tree', link: '/wiki/dsa/binary-search-tree/' }
                ]
            },

            // programming languages
            {
                text: '👨‍💻 Programming Languages',
                collapsed: true,
                docFooterText: 'Programming Languages',
                link: '/wiki/programming-languages/',
                items: [
                    {
                        text: '🐿️ Go',
                        link: '/wiki/programming-languages/go/'
                    },
                    {
                        text: '☕️ Java',
                        link: '/wiki/programming-languages/java/'
                    }
                ]
            },

            // design patterns
            {
                text: '🎨 Design Patterns',
                collapsed: true,
                docFooterText: 'Design Patterns',
                link: '/wiki/design-patterns/',
                items: [
                    {
                        text: 'Creational',
                        link: '/wiki/design-patterns/creational/'
                    },
                    {
                        text: 'Structural',
                        link: '/wiki/design-patterns/structural/'
                    },
                    {
                        text: 'Behavioral',
                        link: '/wiki/design-patterns/behavioral/'
                    }
                ]
            },

            // system design
            {
                text: '🌐 System Design',
                collapsed: true,
                docFooterText: 'System Design',
                link: '/wiki/system-design/',
                items: []
            },

            // domain driven design
            {
                text: '🏗️ Domain Driven Design',
                collapsed: true,
                docFooterText: 'Domain Driven Design',
                link: '/wiki/ddd/',
                items: [
                    // discussions with chat gpt
                    {
                        text: '🤖 Discussions with Chat GPT',
                        collapsed: true,
                        link: '/wiki/ddd/chat-gpt/',
                        items: [
                            {
                                text: 'Sub-domains vs Bounded Context',
                                link: '/wiki/ddd/chat-gpt/subdomain-bounded-context'
                            },
                            {
                                text: 'Aggregates Transaction Boundaries',
                                link: '/wiki/ddd/chat-gpt/aggregates-transaction-boundaries'
                            },
                            {
                                text: 'SaaS products and core domains not in-house',
                                link: '/wiki/ddd/chat-gpt/ddd-saas-products'
                            }
                        ]
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
                text: '🙋 About Me',
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
