export function getJsonPaths(json, prefix) {
  const paths = []
  function getPath(json, prefix) {
    let _prefix
    let item = json
    if (json.constructor === Array) {
      _prefix = prefix ? prefix + '[*].' : '[*].'
      item = json[0]
    } else if (json.constructor === Object) {
      _prefix = prefix ? prefix + '.' : ''
    }
    if (item && item.constructor !== Array && item.constructor === Object) {
      Object.keys(item).map(key => {
        if (item[key] instanceof Object) {
          getPath(item[key], _prefix + key)
        }
        paths.push(_prefix + key)
      })
    }
  }
  getPath(json, prefix)
  return paths
}
