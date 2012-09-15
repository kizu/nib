// Это не обязательно, но некоторые ноды и утиль могут пригодиться
var stylus = require('stylus')
  , nodes = stylus.nodes
  , utils = stylus.utils

module.exports = function(value) {
  if (value) {
    return 'Hello ' + value.toString().toUpperCase()
  } else {
    return 'Hello World'
  }
}
