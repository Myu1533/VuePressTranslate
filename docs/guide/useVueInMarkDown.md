# 在 Markdown 里面使用 Vue

## 浏览器 API 访问限制

因为在生成静态构建的时候，VuePress 应用是 Node.js 的服务端渲染的，任何 Vue 的用法都是遵循[通用代码的要求](https://ssr.vuejs.org/en/universal.html)。简而言之，确保在`beforeMounted`或者`mounted`钩子里访问浏览器/DOM 的 API。

如果你使用或者使用组件小样不遵从 SSR（例如包含自定义指令），你可以用内置的`<ClientOnly>`组件包裹它们：

```md
<ClientOnly>
  <NonSSRFriendlyComponent/>
</ClientOnly>
```

注意这不能修复引入的组件或者库去访问浏览器 API-在一个假设的浏览器环境里引入代码，你需要在生命周期钩子里动态引入他们：

```vue
<script>
export default {
  mounted() {
    import('./lib-that-access-window-on-import').then(module => {
      // use code
    });
  }
};
</script>
```

## 模板化

### 插值

每一个 markdown 文件首先编译为 HTML，然后转化为 Vue 组件到`vue-loader`。这就意味着你在文本里可以用 Vue 的插值运算：

**输入**

```md
{{ 1 + 1 }}
```

**输出**

{{ 1 + 1 }}

## 命令

命令依然可用：

**输入**

```md
<span v-for="i in 3">{{ i }}</span>
```

**输出**

<span v-for="i in 3">{{ i }}</span>

### 访问站点和页面数据

被编译的组件没有任何的私有数据，但是可以访问站点的元数据。例如：

**输入**

```md
{{ $page }}
```

**输出**

```json
{
  "path": "/UseVueInMarkDown.html",
  "title": "在 Markdown 里面使用 Vue",
  "headers": [
    {
      "level": 3,
      "title": "浏览器 API 访问限制",
      "slug": "浏览器-api-访问限制"
    },
    { "level": 3, "title": "模板化", "slug": "模板化" },
    { "level": 3, "title": "命令", "slug": "命令" }
  ],
  "frontmatter": {}
}
```

## 脱离 vue 编译

默认的，圈定的代码块自动被`v-pre`包裹。如果你要展示原始的片段或者 Vue 语法的代码片段或者纯文本，你需要用`v-pre`自定义容器来包裹段落：

**输入**

```md
::: v-pre
`{{ This will be displayed as-is }}`
:::
```

**输出**
::: v-pre
`{{ This will be displayed as-is }}`
:::

## 使用组件

任何在`.vuepress/components`里的`\*.vue`会自动注册为全局异步组件。例如：

```
.
└─ .vuepress
   └─ components
      ├─ demo-1.vue
      └─ OtherComponent.vue
```

在 markdown 文件里可以直接使用组件（组建名推断自与文件名）：

```md
<demo-1/>
<OtherComponent/>
```

<demo-1/>
<OtherComponent/>

::: warning 重点

确保自定义组件的名字包含连字符或者驼峰命名。另外它将被当作一个行内元素对待并被包裹在`<p>`标签里，导致连字符不匹配，因为`<p>`不允许块元素放在它里面。
:::

## 脚本和样式包装

有时候你需要只在当前页应用一些 JavaScript 或者 CSS。在这些地方你可以直接在 markdown 文件里直接写`<script>`或`<style>`,它们将包装在编译的 HTML 外面，当作生成的 Vue 单文件组件的`<script>`或`<style>`块。

<p class="demo" :class="$style.example"></p>

<style module>
.example {
  color: #41b883;
}
</style>

<script>
  export default {
    mounted () {
      document.querySelector(`.${this.$style.example}`)
        .textContent = 'This is rendered by inline script and styled by inline CSS'
    }
  }
</script>
