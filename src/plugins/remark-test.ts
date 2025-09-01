import type { Plugin } from 'unified'
import { visit } from 'unist-util-visit'

/**
 * 简单的测试插件，用于验证插件系统是否正常工作
 */
const remarkTest: Plugin<[], Root> = () => {
  // 这里应该在插件初始化时就打印日志
  console.log('Remark Test Plugin initialized')
  
  return (tree) => {
    console.log('Remark Test Plugin: Processing tree')
    
    // 简单地访问文档中的所有段落节点
    visit(tree, 'paragraph', (node: any, index, parent) => {
      console.log('Found paragraph node at index:', index)
    })
  }
}

export default remarkTest