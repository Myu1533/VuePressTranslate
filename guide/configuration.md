# 配置

## 配置文件

离开任何配置项，页面很简美，用户也没有任何方式在站点里进行导航。为了自定义你的站点，让我们在文档目录里先创建一个.vuepress 的目录。所有 VuePressd 的具体文件都将放在这里。

配置一个 VuePress 站点的必要文件是 .vuepress/config.js, 必须导出一个 JavaScript 对象:

```js
module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around'
};
```

如果你已经启动了开发服务，你将看到一个页面上出现了页头里有了标题和一个搜索框。VuePress 集成了基于头信息的搜索-它从所有页面中依据 title，h2 和 h3 标题构建了一个简单的搜索索引值。

请查阅[配置参考](https://vuepress.vuejs.org/config/)的所有选项的列表。

## 主题配置项

一个 VuePress 主题包含所有的站点的布局和交互细节。VuePress 提供一个针对技术文档而设计的默认主题（就是你现在看到的这一个）。它暴露了很多选项供你自定义导航条，侧边栏和主页等。更多详细信息，请查看[默认配置页面](https://vuepress.vuejs.org/default-theme-config/)。

如果你想要开发一个自定义主题，查看[自定义主题](https://vuepress.vuejs.org/guide/custom-themes.html)。

## 应用级别的增强功能

因为 VuePress 应用是标准的 Vue 应用，你要应用 app 级别的增强功能，可以通过创建一个若存在就会被导入应用的文件 .vuepress/enhanceApp.js 。文件应该导出可以接收包含一些 app 级别键值的钩子函数。你可以通过钩子来安装额外的 Vue 插件，注册全局组件，或者增加额外的路由钩子：

```js
export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router // the router instance for the app
}) => {
  // ...apply enhancements to the app
};
```
