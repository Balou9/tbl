function tbl (arr) {
  var tabObj = arr.reduce(function createTabley(obj, val) {
  typeof obj[val] == 'undefined' ? obj[val] = 1 : obj[val] += 1
  return obj
  }, {})
  return tabObj
}

module.exports = tbl
