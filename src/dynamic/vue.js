import { findComponent }  from '../utils'

// Vue 动态加载组件
const vue = {
  functional: true,
  render(_, _ref) {
    const { props, scopedSlots } = _ref
    const children = []
    props.blocks.forEach(block => {
      const component = findComponent(props.page, scopedSlots, block.blockId)
      if(!component) return
      const result = component({
        data: block.data
      })
      if(!result) return
      children = children.concat(result)
    })
    return children
  }
}

export default vue
