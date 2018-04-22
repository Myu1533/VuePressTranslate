module.exports = {
  base: '/vuepresstranslate',
  dest: 'vuepress',
  lang: 'zh-CN',
  title: 'VuePress',
  description: 'translation for VuePress',
  themeConfig: {
    nav: [
      // { text: '首页', link: '/' },
      {
        text: '指南',
        link: '/guide/'
      },
      {
        text: '参考配置',
        link: '/ConfigReference/'
      },
      {
        text: '默认主题',
        link: '/DefaultThemeConfig/'
      }
    ],
    sidebar: {
      '/guide/': [
        '',
        'introduce',
        'gettingStart',
        'configuration',
        'assetHandling',
        'markdownExtensions',
        'useVueInMarkDown',
        'customTheme',
        'internationalization',
        'deploying'
      ]
    }
  }
};

function genSidebarConfig(title) {
  return [{
    title,
    collapsable: false,
    children: [
      '',
      'introduce',
      'gettingStart',
      'configuration',
      'assetHandling',
      'markdownExtensions',
      'usingVueInMarkdown',
      'customThemes',
      'internationalization',
      'deploying'
    ]
  }];
}