---
sideBar: auto
---

# 简介

VuePress 是由两部分组成： 一个拥有 Vue 能力的主题系统的简单静态网站生成器，一个为专门为技术文档优化的默认主题。它是为了 Vue 的子项目的文档编写需求所创建的。

## 如何工作

VuePress 实际上是基于 [vue](https://vuejs.org/)， [vue-router](https://github.com/vuejs/vue-router) 和 [webpack](https://webpack.js.org/) 的站点。如果你之前用过 vue，在写作或者开发自定义主题时，你会注意到熟悉的开发体验（甚至可以使用 Vue DevTools 来检查你的自定义主题！）。

在构建的时候，我们创建了一个 ssr 的应用版本，通过真正访问每个路由来渲染对应的 HTML 页面。这些灵感都来自于 [Nuxt](https://nuxtjs.org/)'s 的生成命令行和形如[Gatsby](https://www.gatsbyjs.org/)等项目。

每个 markdown 文件都通过[markdown-it](https://github.com/markdown-it/markdown-it)编译到 HTML 里面，同时当作一个 Vue 的组件模板处理。这就意味着允许你直接在 markdown 文件里使用 Vue，当你需要嵌入动态内容的时候体验会很棒。

## 特性

* 内置针对技术文档专门优化的[markdown 扩展](https://vuepress.vuejs.org/guide/markdown.html)
* [在 markdown 文档里使用 Vue 的能力](https://vuepress.vuejs.org/guide/using-vue.html)
* [基于 Vue 的自定义主题系统](https://vuepress.vuejs.org/guide/custom-themes.html)
* 自动化的服务工作生成器
* 集成 Google 分析
* 支持多语言
* 一个默认主题包含：
  * 响应式布局
  * 可选择的主页
  * 简单现成且基于标题的搜索
  * 自定义的导航栏和侧边栏
  * 自动生成 GitHub 链接和页面编辑链接

## Todo

VuePress 依然处于开发进度当中。还有几件计划内的事情还没得到支持：

* 集成 Algolia 的文档搜索
* 支持博客

欢迎来贡献！

## 为什么不。。。？

### Nuxt

Nuxt 已经能胜任 VuePress 正在做的事情，但是它被设计出来时为了构建应用。VuePress 专注在静态内容站点和提供现成的且为编写技术文档定制的特性。

### Docsify / Docute

它们都是运行时驱动，因此对 seo 不友好。如果你不在乎 SEO 和不想要杂乱的安装依赖，它们是很好的选择。他们都是好的项目，也支持 Vue。

### Hexo

事实上 Hexo 能很好的服务 Vue 的文档，我们还有可能还有很长的路去把我们的主站从它里面迁移出来。最大的问题是它的主题系统非常静态和基于字符串-我们真的想在布局和互动上利用 Vue。因此，Hexo 的 markdown 渲染机制在配置上不是最灵活的。
