---
sideBar: auto
---

# 部署

下面的引导假设你把文档放在项目里的`docs`目录里，并使用默认构建输出位置。

## Github Pages

1.  在`.vuepress/config.js`将`base`设置为你仓库的名字。例如，如果仓库名为`https://github.com/foo/bar`，发布的页面将在`https://github.com/foo/bar`。在这种情况下，你应该设置`base`为`"/bar/"`。

2.  在项目里，运行：

```bash
# build
vuepress build docs

# navigate into the build output directory
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

# push to the gh-pages branch of your repo.
# replace <USERNAME>/<REPO> with your info
git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
```

可以在持续集成工具里执行这个脚本，方便在每个 push 的时候自动发布。

## Netlify

1.  确保你的已经有了构建文档的 npm 脚本：

```json
{
  "scripts": {
    "docs:build": "vuepress build docs"
  }
}
```

2.  在 Netlify，按照下面的步骤从 Github 新建项目：

* 构建命令： `npm run docs:build`或`yarn docs:build`
* 发布目录：`docs/.vuepress/dist`

3.  按下发布按钮！
