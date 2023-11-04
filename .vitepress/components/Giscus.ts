import giscus from '@giscus/vue';
import { Component, createApp, h, nextTick, onMounted, Ref, watch } from 'vue';
import { PageData, Route } from 'vitepress';
import { GiscusProps } from '@giscus/vue/dist/types';

type vitepressAPI = {
    frontmatter: Ref<PageData['frontmatter']>;
    route: Route;
};

const setGiscus = (
    props: GiscusProps | {} = {},
    frontmatter?: Ref<PageData['frontmatter']>,
    defaultEnable: boolean = true
) => {
    const defaultProps: GiscusProps = {
        id: 'comment',
        host: 'https://giscus.app',
        category: 'General',
        mapping: 'pathname',
        term: 'Welcome to giscus!',
        reactionsEnabled: '1',
        inputPosition: 'top',
        lang: 'zh-CN',
        loading: 'lazy',
        repo: 'xxx/xxx',
        repoId: ''
    };
    // Delete the original comment container
    let oldCommentContainer = document.getElementById('giscus');
    if (oldCommentContainer) {
        oldCommentContainer.parentNode!.removeChild(oldCommentContainer);
    }
    // console.log(frontmatter?.value.comment);
    if (frontmatter?.value.comment !== undefined) {
        // If comment is false, comments are not loaded
        if (!Boolean(frontmatter?.value.comment)) {
            return;
        }
    } else {
        if (!defaultEnable) {
            return;
        }
    }
    // If it is the homepage, do not add it
    // console.log('location.pathname', location.pathname);

    // do not load on localhost
    // if (location.hostname === 'localhost') return;

    if (!location.pathname || location.pathname === '/' || location.pathname === '/wiki/') {
        return;
    }

    const dark: boolean = !!document.querySelector('html')?.className.includes('dark');

    // Get the parent container and create a comment container
    const docContent = document.getElementsByClassName('VPDocFooter')[0];
    if (docContent) {
        const bindGiscus = document.createElement('div');
        // Set the attribute and style of the comment container
        bindGiscus.setAttribute('id', 'giscus');
        bindGiscus.style.height = 'auto';
        bindGiscus.style.marginTop = '40px';
        bindGiscus.style.borderTop = '1px solid var(--vp-c-divider)';
        bindGiscus.style.paddingTop = '20px';
        // Add comment container
        // docContent.insertBefore(bindGiscus, docContent.firstChild);
        docContent.append(bindGiscus);
        // Use vue to dynamically create comment components and bind them to the corresponding elements
        createApp({
            render: () => {
                return h(giscus as Component, {
                    ...defaultProps,
                    theme: dark ? 'transparent_dark' : 'light',
                    ...props
                });
            }
        }).mount('#giscus');
    }
};

/**
 * Listen to the page theme and change the theme of the comment container
 */
const setThemeWatch = () => {
    const element: HTMLElement | Node | null = document.querySelector('html');
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type == 'attributes') {
                let comment: Element | null = document.getElementById('comment');
                comment?.setAttribute(
                    'theme',
                    (element! as HTMLElement).className.indexOf('dark') !== -1 ? 'transparent_dark' : 'light'
                );
            }
        });
    });
    observer.observe(element as Node, {
        attributeFilter: ['class']
    });
};

/**
 * initialize comment area
 * @param props giscus setting (giscus 配置)
 * @param vitepressObj frontmatter & routing (前言 & 路由)
 * @param defaultEnable default enable comment area (默认启用评论区)
 */
const giscusTalk = (props: GiscusProps, vitepressObj: vitepressAPI, defaultEnable: boolean = true) => {
    onMounted(() => {
        setGiscus(props, vitepressObj.frontmatter, defaultEnable);
        setThemeWatch();
    });
    watch(
        () => vitepressObj.route.path,
        () =>
            nextTick(() => {
                setGiscus(props, vitepressObj.frontmatter, defaultEnable);
            })
    );
};

export default giscusTalk;
