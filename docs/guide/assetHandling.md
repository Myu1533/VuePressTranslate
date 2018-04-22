---
sideBar: auto
---

# 资源处理

## 相对地址链接

所有的 markdown 文件都将编译到 Vue 的组件中并且被 webpack 处理，因此你可以也最好通过相对地址引用资源：

```md
![An image](./image.png)
```

这在 \*.vue 模板文件中也是一样的。图片将被 url-loader 和 file-loader 处理，在生成静态构建的时候复制到适当的位置。

此外，你可以使用~字首来明确表明这是一个 webpack 的模块应用，允许你使用 webpack 别名或者通过 npm 依赖来引用文件：

```md
![Image from alias](~@alias/image.png)
![Image from dependency](~some-dependency/image.png)
```

webpack 别名可以在 .vuepress/config.js 中通过 configureWebpack 来设置。例如：

```js
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': 'path/to/some/dir'
      }
    }
  }
};
```

## 公共文件

有时候你可能需要提供那些没有在你的 markdown 文件或者主题组件里直接应用的静态资源-例如，favicons 和 PWA icons。在这些地方你可以把它们放在 .vuepress/public 里面，然后他们将被复制到生成目录的根目录里。

## 基础链接

如果你的站点部署到了一个没有根的链接上，你会需要在.vuepress/config.js 里设置基础选项。例如，如果你计划把站点部署到`https://foo.github.io/bar/`, 然后基础网址就需要设置为“/bar/”（必须以斜线作为开始和结束）。

根据基本链接，如果你需要引用.vuepress/public 里面的图片，你必须使用/bar/image.png 这样的链接。然而，如果你稍后改变了基本链接，这就会变得很脆弱。为了帮助解决这个问题，VuePress 提供了一个内嵌的帮助器 $withBase（注入在 Vue 的 prototype 上）来生成正确的路径：

```vue
<img :src="$withBase('/foo.png')" alt="foo">
```

注意你不仅可以在主题组件里使用上面的语法，在 markdown 文件里同样可以。

此外，如果基本链接已经设置，它将自动添加到.vuepress/config.js 选项的所有资源链接上。
