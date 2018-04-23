module.exports = {
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
        link: '/configReference/'
      },
      {
        text: '默认主题',
        link: '/defaultThemeConfig/'
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
