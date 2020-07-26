/**
 * 动态化组件 获取对应的组件名
 * @param {*} page 组件所在页面名称
 * @param {*} renders 组件渲染对象
 * @param {*} blockId 组件对应模块ID 对应块的数据
 */
export function findComponent(page, renders, blockId) {
  const name = Object.keys(renders).find(key => {
    const id = blockId.split('@')[1]
    return id === key || id === page + '_' + key
  })
  return name ? renders[name] : null
}