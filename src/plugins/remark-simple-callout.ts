import type { Plugin } from 'unified'
import type { Root, Node } from 'mdast'
import { toString } from 'mdast-util-to-string'
import { visit } from 'unist-util-visit'

/**
 * 一个简单版本的callout插件，用于测试插件系统
 */
const remarkSimpleCallout: Plugin<[], Root> = () => {
  return (tree) => {
    // 遍历所有的blockquote节点
    visit(tree, 'blockquote', (node: any, index: number | undefined, parent: any) => {
      if (!parent || index === undefined) return
      
      // 检查blockquote的第一个子节点是否为paragraph
      if (!node.children || !node.children.length || node.children[0].type !== 'paragraph') return
      
      const firstParagraph = node.children[0]
      const text = toString(firstParagraph)
      
      // 检查是否匹配callout格式
      const match = text.match(/^\[(?:!)?([a-z]+)\](.*)$/i)
      if (match) {
        const [, type, title] = match
        
        // 只支持基本的类型
        const validTypes = ['note', 'tip', 'caution', 'danger']
        if (!validTypes.includes(type.toLowerCase())) return
        
        // 构建一个新的div元素作为callout
        const calloutDiv: any = {
          type: 'div',
          data: {
            hName: 'div',
            hProperties: {
              className: `simple-callout simple-callout-${type.toLowerCase()}`,
              'data-type': type.toLowerCase()
            }
          },
          children: []
        }
        
        // 添加标题元素
        const titleDiv: any = {
          type: 'div',
          data: {
            hName: 'div',
            hProperties: {
              className: 'simple-callout-title'
            }
          },
          children: [{ type: 'text', value: title.trim() || type.toUpperCase() }]
        }
        calloutDiv.children.push(titleDiv)
        
        // 处理内容部分
        const contentDiv: any = {
          type: 'div',
          data: {
            hName: 'div',
            hProperties: {
              className: 'simple-callout-content'
            }
          },
          children: []
        }
        
        // 如果有其他节点，添加到内容中
        if (node.children.length > 1) {
          contentDiv.children = node.children.slice(1)
        }
        
        calloutDiv.children.push(contentDiv)
        
        // 替换原始的blockquote节点
        parent.children[index] = calloutDiv
      }
    })
  }
}

export default remarkSimpleCallout