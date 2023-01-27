export const steps = (i18n) => [
    {
      element: '#guide',
      popover: {
        title: i18n('driver.guideBtn'),
        description: '引导按钮',
        position: 'left'
      }
    },
    {
      element: '#hamburger',
      popover: {
        title: i18n('driver.hamburgerBtn'),
        description: '展开和收起侧边菜单栏',
        position: 'bottom'
      }
    },
    {
      element: '#screenFull',
      popover: {
        title: i18n('driver.fullScreen'),
        description: '全屏展示',
        position: 'left'
      }
    }
]
