function table (arr, callback) {
  var tabarr = arr.reduce(function (tabObj, val) {
  typeof tabObj[val] == 'undefined' ? tabObj[val] = 1 : tabObj[val] += 1
  return tabObj
  }, {})
  return tabarr
}

module.exports = table
