import { defineConfig } from 'vitepress';
import { version } from '../package.json';

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Giovanny's Wiki",
    description: 'A Software Development Wiki',
    lastUpdated: true,
    lang: 'en-US',

    themeConfig: {
        search: {
            provider: 'local'
        },
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Wiki', link: '/wiki/' },
            { text: `v${version}`, link: '#' }
        ],

        sidebar: [
            {
                text: 'Home',
                link: '/wiki/'
            },

            {
                text: 'Data Structures & Algorithms',
                collapsed: true,
                items: [
                    { text: 'Trie', link: '/wiki/dsa/trie/' },
                    { text: 'Binary Search Tree', link: '/wiki/dsa/binary-search-tree/' }
                ]
            },

            {
                text: 'Vitepress Examples',
                collapsed: true,
                docFooterText: 'Vitepress Examples',
                items: [
                    { text: 'Markdown Examples', link: '/wiki/vite-examples/markdown-examples' },
                    { text: 'Runtime API Examples', link: '/wiki/vite-examples/api-examples' }
                ]
            },

            {
                text: 'About Me',
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
