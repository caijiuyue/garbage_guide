const GARBAGE_TYPE = require('../enum/garbage_type.js')

var format_garbage_type = {}

for (var i = 0; i<GARBAGE_TYPE.length; i++){
  format_garbage_type[GARBAGE_TYPE[i].type] = GARBAGE_TYPE[i]
}

module.exports = {format_garbage_type}
