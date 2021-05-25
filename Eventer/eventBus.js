
let eventBus = function() {
  let eventList = {}

  // 订阅者
  function on(key, fn) {
    if (!eventList[key]) {
      eventList[key] = []
    }
    eventList[key].push(fn)
  }

  // 发布者
  function emit() {
    let key = Array.prototype.shift.call(arguments)
    let fnList = eventList[key]
    if (!fnList || fnList.length === 0) {
      return false
    }
    fnList.forEach(fnItem => {
      fnItem.apply(null, arguments)
    })
  }

  function remove(key, fn) {
    let fnList = eventList[key]
    if (!fnList) {
      return
    }
    if (fn) {
      const len = fnList.length
      for(let i = len; i >= 0; i--) {
        let _fn = fnList[i]
        if (_fn === fn) {
          fnList.splice(i, 1)
        }
      }
    } else {
      fnList && (fnList.length = 0)
    } 
  }

  return {
    on,
    emit,
    remove
  }

}()


module.exports = eventBus