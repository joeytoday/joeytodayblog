import { defineConfig, presetMini, presetTypography, type Rule } from 'unocss'

import { integ } from './src/site.config.ts'

const typographyCustom = integ.typography || {}

const fg = 'hsl(var(--foreground) / var(--un-text-opacity, 1))'
const fgMuted = 'hsl(var(--muted-foreground) / var(--un-text-opacity, 1))'
const bgMuted = 'hsl(var(--muted) / var(--un-bg-opacity, 1))'

const typographyConfig = {
  cssExtend: {

    // 添加字体大小设置
    'p, li, blockquote, dd': {
      'font-size': '20px', // 可以直接设置具体数值
    },
    // 添加字体设置
    html: {
      fontFamily: 'ChillKai, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    },
    body: {
      fontFamily: 'ChillKai, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    },

    // Title
    'h2,h3,h4,h5,h6': {
      'scroll-margin-top': '3rem',
      'font-weight': '500',
      color: fg
    },
    // 三级标题颜色设置（增加优先级）及字体大小
    h3: {
      color: 'hsl(var(--h3-color) / var(--un-text-opacity, 1)) !important',
      'font-size': '1.6rem !important',  // 设置三级标题字体大小
    },
    'h1>a,h2>a,h3>a,h4>a,h5>a,h6>a': {
      'margin-inline-start': '0.75rem',
      color: fgMuted,
      transition: 'opacity 0.2s ease',
      opacity: '0'
    },
    'h1>a:focus,h2>a:focus,h3>a:focus,h4>a:focus,h5>a:focus,h6>a:focus': {
      opacity: 1
    },
    'h1:hover>a,h2:hover>a,h3:hover>a,h4:hover>a,h5:hover>a,h6:hover>a': {
      opacity: 1
    },
    'h1:target>a,h2:target>a,h3:target>a,h4:target>a,h5:target>a,h6:target>a': {
      opacity: 1
    },

    // Blockquote
    blockquote: {
      position: 'relative',
      'border-top': '1px solid #E3E8EF',
      'border-right': '1px solid #E3E8EF',
      'border-bottom': '1px solid #E3E8EF',
      'border-left': '4px solid #5E9B43',
      'border-radius': '8px',
      'padding-inline': '1.6rem',
      'padding-block': '1rem',
      background: '#EFF3ED',
      'box-sizing': 'border-box',
      ...(typographyCustom.blockquoteStyle === 'normal' ? { 'font-style': 'normal' } : {})
    },
    '.dark blockquote': {
      background: '#262625',
      'border-top': '1px solid rgba(255, 255, 255, 0.1)',
      'border-right': '1px solid rgba(255, 255, 255, 0.1)',
      'border-bottom': '1px solid rgba(255, 255, 255, 0.1)'
    },
    '.callout': {
      background: '#EFF3ED'
    },
    '.dark .callout': {
      background: '#262625'
    },
    // Table
    table: {
      display: 'block',
      'font-size': '.875em'
    },
    'table tr': {
      'border-bottom-width': '1px'
    },
    'tbody tr:last-child': {
      'border-bottom-width': '0'
    },
    'thead th': {
      'font-weight': '500',
      color: fg
    },
    'td, th': {
      border: 'inherit',
      'text-align': 'start',
      padding: '0.57em'
    },
    'thead th:first-child,thead th:first-child,tbody td:first-child,tfoot td:first-child': {
      'padding-inline-start': '0'
    },
    // List
    'ol, ul': {
      'padding-left': '1.625em'
    },
    'ol>li, ul>li': {
      'padding-inline-start': '.375em'
    },
    'ul>li::marker': {
      color: fgMuted,
      '--un-text-opacity': '0.35'
    },
    li: {
      'margin-top': '.5em',
      'margin-bottom': '.5em'
    },

    // Inline code
    ...(typographyCustom.inlineCodeBlockStyle === 'modern' && {
      ':not(pre)>code::before,:not(pre)>code::after': {
        content: 'none'
      },
      ':not(pre) > code': {
        padding: '0.3em 0.5em',
        color: 'hsl(var(--primary) / var(--un-text-opacity, 1))',
        border: '1px solid hsl(var(--border) / 1)',
        'border-radius': 'var(--radius)',
        'background-color': 'hsl(var(--muted) / var(--un-bg-opacity, 1))'
      }
    }),
    // Others
    img: {
      'border-radius': 'var(--radius)',
      margin: '0 auto'
    },
    hr: {
      '--un-prose-hr': 'hsl(var(--border) / 1)'
    },
    kbd: {
      color: fg,
      'border-color': 'hsl(var(--border) / 1)',
      'box-shadow':
        '0 0 0 1px hsl(var(--primary-foreground) / 1), 0 3px hsl(var(--primary-foreground) / 1)'
    },
    strong: {
      'font-weight': '600',
      color: '#C91D2A' // 浅色模式颜色
    },
    '.dark strong': {
      color: '#DF5D5C' // 暗色模式颜色
    },
    a: {
      'font-weight': '500',
      color: fg
    },
    'code:not(pre code)': {
      'white-space': 'pre-wrap!important',
      'word-break': 'break-all!important'
    }
  }
}

const themeColors = {
  border: 'hsl(var(--border) / <alpha-value>)',
  input: 'hsl(var(--input) / <alpha-value>)',
  ring: 'hsl(var(--ring) / <alpha-value>)',
  background: 'hsl(var(--background) / <alpha-value>)',
  foreground: 'hsl(var(--foreground) / <alpha-value>)',
  primary: {
    DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
    foreground: 'hsl(var(--primary-foreground) / <alpha-value>)'
  },
  secondary: {
    DEFAULT: 'hsl(var(--secondary) / <alpha-value>)',
    foreground: 'hsl(var(--secondary-foreground) / <alpha-value>)'
  },
  destructive: {
    DEFAULT: 'hsl(var(--destructive) / <alpha-value>)',
    foreground: 'hsl(var(--destructive-foreground) / <alpha-value>)'
  },
  muted: {
    DEFAULT: 'hsl(var(--muted) / <alpha-value>)',
    foreground: 'hsl(var(--muted-foreground) / <alpha-value>)'
  },
  accent: {
    DEFAULT: 'hsl(var(--accent) / <alpha-value>)',
    foreground: 'hsl(var(--accent-foreground) / <alpha-value>)'
  },
  popover: {
    DEFAULT: 'hsl(var(--popover) / <alpha-value>)',
    foreground: 'hsl(var(--popover-foreground) / <alpha-value>)'
  },
  card: {
    DEFAULT: 'hsl(var(--card) / <alpha-value>)',
    foreground: 'hsl(var(--card-foreground) / <alpha-value>)'
  }
}

const rules: Rule<object>[] = [
  // Fix unocss presetMini
  [
    'sr-only',
    {
      position: 'absolute',
      width: '1px',
      height: '1px',
      padding: '0',
      margin: '-1px',
      overflow: 'hidden',
      clip: 'rect(0,0,0,0)',
      'white-space': 'nowrap',
      'border-width': '0'
    }
  ],
  [
    'object-cover',
    {
      'object-fit': 'cover'
    }
  ]
]

export default defineConfig({
  presets: [
    presetMini(), // required
    // presetWind3(), // original full version
    presetTypography(typographyConfig)
  ],
  rules,
  theme: {
    colors: themeColors
  },
  // https://unocss.dev/guide/extracting#limitations
  safelist: [
    // TOC
    'rounded-t-2xl',
    'rounded-b-2xl',
    // Typography
    'text-xl',
    'prose'
  ]
})
