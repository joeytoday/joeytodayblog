import type { Root } from 'mdast'
import type { Plugin } from 'unified'
import { toString } from 'mdast-util-to-string'
import { visit, CONTINUE } from 'unist-util-visit'

// 支持的callout类型
const CALL_TYPES = ['note', 'tip', 'caution', 'danger'] as const
type CallType = typeof CALL_TYPES[number]

// 检查是否为有效类型
function isValidType(type: string): type is CallType {
  return CALL_TYPES.includes(type as CallType)
}

/**
 * Remark插件：支持Markdown中使用>[!tip]等格式的提示框
 */
const remarkCallout: Plugin<[], Root> = () => {
  return (tree) => {
    console.log('Remark Callout Plugin initialized')
    
    // 处理blockquote节点，寻找callout格式
    visit(tree, 'blockquote', (blockquoteNode: any, index, parent) => {
      if (index === undefined || !parent) return CONTINUE
      
      // 检查blockquote的第一个子节点是否为paragraph
      if (blockquoteNode.children.length === 0 || blockquoteNode.children[0].type !== 'paragraph') {
        return CONTINUE
      }
      
      const firstParagraph = blockquoteNode.children[0]
      const firstLineText = toString(firstParagraph)
      
      // 非常宽松的匹配格式，适应各种可能的用户输入格式
      const calloutMatch = firstLineText.match(/^\[!*([a-z]+)\](?:\s+|)(.*)$/i)
      
      // 无条件添加调试日志
      console.log('Processing blockquote with first line:', firstLineText)
      console.log('Match result:', calloutMatch)
      
      if (calloutMatch) {
        const [, rawType, rawTitle] = calloutMatch
        const type = rawType.toLowerCase() // 转换为小写以支持大小写不敏感的匹配
        const title = rawTitle.trim()
        
        console.log('Potential callout match:', type, 'with title:', title)
        
        if (isValidType(type)) {
          console.log('Valid callout found, processing:', type)
          
          // 创建callout节点，使用div元素以确保更好的兼容性
          const calloutNode: any = {
            type: 'div',
            data: {
              hName: 'div',
              hProperties: {
                className: `aside aside-${type}`,
                'data-callout': type,
                'role': 'note',
                'aria-label': title || type.toUpperCase()
              }
            },
            children: []
          }
          
          // 添加标题元素
          calloutNode.children.push({
            type: 'div',
            data: {
              hName: 'div',
              hProperties: {
                className: 'aside-title',
                'data-callout-title': ''
              }
            },
            children: [{
              type: 'text',
              value: title || type.toUpperCase()
            }]
          })
          
          // 处理内容部分
          const contentChildren = []
          
          // 如果有其他内容节点，添加到内容中
          if (blockquoteNode.children.length > 1) {
            // 保留第一个段落中除了标题行之外的内容
            if (firstParagraph.children && firstParagraph.children.length > 0) {
              // 创建一个新的段落节点，包含第一个段落中除了标题行之外的内容
              const remainingContentInFirstPara = {
                type: 'paragraph',
                children: [...firstParagraph.children]
              }
              contentChildren.push(remainingContentInFirstPara)
            }
            
            // 从第二个节点开始的所有内容节点
            const remainingNodes = blockquoteNode.children.slice(1)
            contentChildren.push(...remainingNodes)
          }
          
          // 添加内容元素容器
          calloutNode.children.push({
            type: 'div',
            data: {
              hName: 'div',
              hProperties: {
                className: 'aside-content',
                'data-callout-content': ''
              }
            },
            children: contentChildren.length > 0 ? contentChildren : [{
              type: 'paragraph',
              children: [{ type: 'text', value: '' }]
            }]
          })
          
          // 替换节点
          console.log('Replacing blockquote with callout node')
          parent.children[index] = calloutNode
          return index + 1
        }
      }
      
      return CONTINUE
    })
  }
}

export default remarkCallout