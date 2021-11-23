// 1 - npm init (create package.json file) or npm init -y to accept everything
const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)

console.log(newItems)