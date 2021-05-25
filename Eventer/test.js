const eventBus = require('./eventBus')

let ssFn = function(a, b) {
  console.log(a)
  console.log(b)
}

eventBus.on('ss', ssFn)

eventBus.emit('ss', 123, 34)  // 123  // 34

eventBus.remove('ss', ssFn)

eventBus.emit('ss', 123, 34) // null