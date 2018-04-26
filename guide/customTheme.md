# 自定义主题

::: tip TIP

主题组件同样受到[浏览器 API 的限制](./UseVueInMarkDown.html)。
:::

VuePress 自定义主题使用的是 Vue 的单文件组件。使用一个自定义布局，在文档根目录里创建`.vuepress/theme`目录，然后创建一个`Layout.vue`目录：

```
.
└─ .vuepress
   └─ theme
      └─ Layout.vue
```

到这里都是和开发一个普通 Vue 应用一样的。完全取决于你怎样组织你的主题。

## 站点和页面的元信息

`文档`中的每个`.md`文件都将调用一次`布局`组件，整个站点的元信息和具体页面都将分别暴露在`this.$site`和`this.$page`属性中，这些都将注入到 app 里的每个组件里。

下面是每个网页的`$site`值：

```json
{
  "title": "VuePress",
  "description": "Vue-powered Static Site Generator",
  "base": "/",
  "pages": [
    {
      "path": "/",
      "title": "VuePress",
      "frontmatter": {}
    },
    ...
  ]
}
```

`title`,`description`和`base`从`.vuepress/config.js`中分别拷贝。`pages`包含每个页面的元信息对象的数组，包含路径，页面标题（明确定义的[YAML front matter](./UseVueInMarkDown.html)或者从页面上最前面的头信息中推断），和文件里的其他的[YAML front matter](./UseVueInMarkDown.html)数据。

下面是你将看到的`$page`对象：

```json
{
  "path": "/custom-themes.html",
  "title": "Custom Themes",
  "headers": [
    /* ... */
  ],
  "frontmatter": {}
}
```

如果用户在`.vuepress/config.js`里提供`themmeConfig`，它也将作为`$site.themeConfig`出现。你可以利用这个特点来允许用户自定义你的主题行为-例如，提供分类和页面订购信息。你在`$site.pages`里获得动态的导航链接结构。

最终，别忘了`this.$route`和`this.$router`作为 Vue-Router API 也是可用的。

## 内容出口

当前渲染的`.md`的编译的内容将作为特殊的`<Content/>`全局组件是可用的。你将需要为了展示页面的内容在布局某些地方渲染它。最简单的主题将类似下面内容的单个`Layout.vue`组件：

```html
<template>
  <div class="theme-container">
    <Content/>
  </div>
</template>
```

## 从依赖里使用主题

主题可以作为原始 Vue SFC 格式的`vuepress-theme-xxx`发布到 NPM 上。

从一个 NPM 依赖的使用一个主题，在`.vuepress/config.js`里提供了一个`theme`选项：

```js
module.exports = {
  theme: 'awesome'
};
```

VuePress 将尝试定位和使用`node_modules/vuepress-theme-awesome/Layout.vue`。

## 自定义默认主题

`vuepress eject [targetDir]`命令将把默认主题源代码复制到`.vuepress/theme`去提供完整的定制。注意，然而，一旦你执行了该操作，在更新 VuePress 的时候,你将只使用你自己的，将不会再收到默认主题的更新或者 bug 修复。
