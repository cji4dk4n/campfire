// 把actions合成一個物件

const combineActions = modulesFiles => {
  const combineModule = modulesFiles.keys()
    // 先過濾index.js
    .filter(filePath => filePath !== './index.js')
    .reduce((module, modulePath) => {
      return {...module, ...modulesFiles(modulePath)}
    }, {})
  return combineModule
}

export default combineActions