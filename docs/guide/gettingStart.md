---
sideBar: auto
---

# 开始

> 兼容性注释
> VuePress 基于 Node.js >= 8.

## 全局安装

如果你想随时随地使用 VuePress，你可以全局安装：

```bash
# install globally
yarn global add vuepress # OR npm install -g vuepress

# create a markdown file
echo '# Hello VuePress' > README.md

# start writing
vuepress dev

# build
vuepress build
```

## 在已有项目中使用

如果你有一个现存的项目，并且想在项目中建立文档，我可以把 VuePress 作为一个本地依赖进行安装。这个安装同样允许你使用持续集成或者在推送的时候使用类似于 Netlify 自动发布的服务。

```bash
# install as a local dependency
yarn add -D vuepress # OR npm install -D vuepress

# create a docs directory
mkdir docs
# create a markdown file
echo '# Hello VuePress' > docs/README.md
```

> 警告
>
> 当在一个依赖 webpack 3.x 的现存项目里安装 VuePress 的时候，用 Yarn 代替 npm。Npm 在这类项目里不能生成正确的依赖。

然后，在 package.json 里增加这些脚本：

```json
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

现在你可以输入：

```bash
yarn docs:dev # OR npm run docs:dev
```

生成静态资源，执行：

```bash
yarn docs:build # Or npm run docs:build
```

默认构建文件在 .vuepress/dist 里面， .vuepress/config.js 里通过 dest 字段配置。构建文件可以发布在任何静态文件服务里。可以在[发布引导](https://vuepress.vuejs.org/guide/deploy.html)查找如恶化发布到流行服务里。
