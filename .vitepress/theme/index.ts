// .vitepress/theme/index.ts
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import { useData, useRoute } from 'vitepress';
import giscusTalk from '.vitepress/components/giscus';

export default {
    extends: DefaultTheme,
    async enhanceApp({ app }) {
        // register your custom global components
        // app.component('MyComponent', import('../components/Test.vue'));
    },
    // Layout() {
    //     return h(DefaultTheme.Layout, null, {
    //         'doc-bottom': () =>
    //             h(giscus as Component, {
    //                 ...{
    //                     id: 'comment',
    //                     host: 'https://giscus.app',
    //                     category: 'General',
    //                     mapping: 'pathname',
    //                     term: 'Welcome to giscus!',
    //                     reactionsEnabled: '1',
    //                     inputPosition: 'top',
    //                     lang: 'zh-CN',
    //                     loading: 'lazy',
    //                     repo: 'xxx/xxx',
    //                     repoId: ''
    //                 },
    //                 theme: 'light',
    //                 ...{
    //                     repo: 'giovannymassuia/wiki.giovannymassuia.io',
    //                     repoId: 'R_kgDOKkhyFA',
    //                     category: 'General', // default: `General`
    //                     categoryId: 'DIC_kwDOKkhyFM4CarR2',
    //                     mapping: 'pathname', // default: `pathname`
    //                     inputPosition: 'top', // default: `top`
    //                     lang: 'en'
    //                 }
    //             })
    //     });
    // }
    setup() {
        // Get frontmatter and route
        const { frontmatter } = useData();
        const route = useRoute();

        // Obtain configuration from: https://giscus.app/
        giscusTalk(
            {
                repo: 'giovannymassuia/wiki.giovannymassuia.io',
                repoId: 'R_kgDOKkhyFA',
                category: 'General', // default: `General`
                categoryId: 'DIC_kwDOKkhyFM4CarR2',
                mapping: 'pathname', // default: `pathname`
                inputPosition: 'top', // default: `top`
                lang: 'en'
            },
            {
                frontmatter,
                route
            },
            // Whether to activate the comment area on all pages.
            // The default is true, which means enabled, this parameter can be ignored;
            // If it is false, it means it is not enabled.
            // You can use `comment: true` preface to enable it separately on the page.
            false
        );
    }
} satisfies Theme;
