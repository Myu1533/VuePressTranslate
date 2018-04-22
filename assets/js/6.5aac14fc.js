(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{54:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署","aria-hidden":"true"}},[t._v("#")]),t._v(" 部署")]),a("p",[t._v("下面的引导假设你把文档放在项目里的"),a("code",[t._v("docs")]),t._v("目录里，并使用默认构建输出位置。")]),a("h2",{attrs:{id:"github-pages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#github-pages","aria-hidden":"true"}},[t._v("#")]),t._v(" Github Pages")]),a("ol",[a("li",[a("p",[t._v("在"),a("code",[t._v(".vuepress/config.js")]),t._v("将"),a("code",[t._v("base")]),t._v("设置为你仓库的名字。例如，如果仓库名为"),a("code",[t._v("https://github.com/foo/bar")]),t._v("，发布的页面将在"),a("code",[t._v("https://github.com/foo/bar")]),t._v("。在这种情况下，你应该设置"),a("code",[t._v("base")]),t._v("为"),a("code",[t._v('"/bar/"')]),t._v("。")])]),a("li",[a("p",[t._v("在项目里，运行：")])])]),a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("# build")]),t._v("\nvuepress build docs\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("# navigate into the build output directory")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("cd")]),t._v(" docs/.vuepress/dist\n\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" init\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" add -A\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),a("span",{attrs:{class:"token string"}},[t._v("'deploy'")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("# push to the gh-pages branch of your repo.")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("# replace <USERNAME>/<REPO> with your info")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" push -f git@github.com:"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("USERNAME"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("/"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("REPO"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(".git master:gh-pages\n")])]),a("p",[t._v("可以在持续集成工具里执行这个脚本，方便在每个 push 的时候自动发布。")]),a("h2",{attrs:{id:"netlify"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#netlify","aria-hidden":"true"}},[t._v("#")]),t._v(" Netlify")]),a("ol",[a("li",[t._v("确保你的已经有了构建文档的 npm 脚本：")])]),a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"scripts"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"docs:build"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"vuepress build docs"')]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("在 Netlify，按照下面的步骤从 Github 新建项目：")])]),a("ul",[a("li",[t._v("构建命令： "),a("code",[t._v("npm run docs:build")]),t._v("或"),a("code",[t._v("yarn docs:build")])]),a("li",[t._v("发布目录："),a("code",[t._v("docs/.vuepress/dist")])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("按下发布按钮！")])])])}],!1,null,null,null);s.default=e.exports}}]);