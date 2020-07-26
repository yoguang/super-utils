// React 动态加载组件
import React from 'react'
import { findComponent } from '../utils'
// eslint-disable-next-line import/prefer-default-export
function DynamicComponent(_ref) {
  const { page, blocks, renders } = _ref
  const children = []
  blocks.forEach(block => {
    const component = findComponent(page, renders, block.blockId)
    if(!component) return 
    // 允许返回一个 VNode， 或者一个 VNode 数组
    const result = component({
      data: block.data
    })
    if(!result) return
    children = children.concat(result)
  })
  return React.createElement.apply(React, [React.Fragment, null].concat(children))
}

export default DynamicComponent
