---
sideBar: auto
---

# 国际化

## 站点级别 i18n 配置

为了在 VuePress 力支持多语言，你首先需要下面的文件结构：

```
/
├─ README.md
├─ foo.md
├─ /nested/
│  └─ README.md
└─ /zh/
   ├─ README.md
   ├─ foo.md
   └─ /zh/nested/
      └─ README.md
```

然后，在`.vuepress/config.js`里指定`locales`选项：

```js
module.exports = {
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/': {
      lang: 'en-US', // this will be set as the lang attribute on <html>
      title: 'VuePress',
      description: 'Vue-powered Static Site Generator'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'VuePress',
      description: 'Vue 驱动的静态网站生成器'
    }
  }
};
```

如果本地没有`title`或者`description`，VuePress 将退回到根层级的值。你可以忽略根级别的`title`和`description`,知道它们在本地被提供。

## 默认主题 i18n 配置

默认主题通过`themeConfig.locales`内嵌 i18n 的支持，使用同样`{ path: config }`转换。每一个本地可以有它自己的[导航](https://vuepress.vuejs.org/default-theme-config/#navbar-links)和[侧边栏](https://vuepress.vuejs.org/default-theme-config/#sidebar)配置，此外少量文字可以跨站点使用：

```js
module.exports = {
  locales: {
    /* ... */
  },
  themeConfig: {
    locales: {
      '/': {
        // text for the language dropdown
        selectText: 'Languages',
        // label for this locale in the language dropdown
        label: 'English',
        // text for the edit-on-github link
        editLinkText: 'Edit this page on GitHub',
        nav: [{ text: 'Nested', link: '/nested/' }],
        sidebar: {
          '/': [
            /* ... */
          ],
          '/nested/': [
            /* ... */
          ]
        }
      },
      '/zh/': {
        selectText: '选择语言',
        label: '简体中文',
        editLinkText: '在 GitHub 上编辑此页',
        nav: [{ text: '嵌套', link: '/zh/nested/' }],
        sidebar: {
          '/zh/': [
            /* ... */
          ],
          '/zh/nested/': [
            /* ... */
          ]
        }
      }
    }
  }
};
```
