// Common JS. Every file is a node module by defaut
const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavour')
require('./7-mind-grenade')
console.log(data.items)
console.log(data.singlePerson)
sayHi('james')
sayHi(names.john)
sayHi(names.peter)