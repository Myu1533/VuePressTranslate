# Markdown 扩展

## 头信息锚点

头信息自动获得锚点链接。锚点的渲染可以用`markdown.anchor`来配置。

## 链接

* 在`.md`或者`.html`中站内链接的结束会为 SPA 导航转化为`\<router-link\>`
  * [Home](./README.html)
  * [Configuring Markdown](https://vuepress.vuejs.org/config/#markdown)
* 站外链接自动获得`target="\_blank"`:
  * [vuejs.org](https://vuejs.org/)
  * [VuePress on GitHub](https://github.com/vuejs/vuepress)

## YAML 头信息

[YAML 头信息](https://jekyllrb.com/docs/frontmatter/)是开箱支持的：

```
---
title: Blogging Like a Hacker
lang: en-US
---
```

这些数据可以得到页面的其他部门，作`$page`跟多的自定义和主题组件。

` title``lang `将自动设置到正确的页面上。此外你可以指定额外的 meta 标签作为注入：

```
---
meta:
  - name: description
    content: hello
  - name: keywords
    content: super duper SEO
---
```

## GitHub-Style 表格

输入

```
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
```

输出
| Tables | Are | Cool |
| ------------- |:-------------:| -----:|
| col 3 is | right-aligned | $1600 |
| col 2 is | centered | $12 |
| zebra stripes | are neat | $1 |

## Emoji

输入

```
:tada: :100:
```

输出

:tada: :100:

## 内容表格

输入

```
[[toc]]
```

输出

[[toc]]

渲染 TOC 可以用`markdown.toc`配置。

## 自定义容器

输入

```
::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::
```

输出

::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

也可以自定义块的标题：

```
::: danger STOP
Danger zone, do not proceed
:::
```

::: danger STOP
Danger zone, do not proceed
:::

## 代码块高亮

输入

````
``` js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## 高级配置项

VuePress 使用[markdown-it](https://github.com/markdown-it/markdown-it)作为 markdown 的渲染器。以上很多扩展都提供自定义插件。你可以在`.vuepress/config.js`中的`markdown`选项里深入定制`markdown-it`用例。

```js{4}
module.exports = {
  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: false },
    // options for markdown-it-toc
    toc: { includeLevel: [1, 2] },
    config: md => {
      // use more markdown-it plugins!
      md.use(require('markdown-it-xxx'))
    }
  }
}
```
