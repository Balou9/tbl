var tape = require('tape')
var tbl = require('./index')
var arr = ['Mikey', 'Gani', 'Gani', 'Louis', 'Gani', '419', '419', 'Louis',
             'Mikey', 'Gani', 'Louis', 'Gani', '419', '419']

var tabObj = tbl(arr)

tape('Output is', function (t) {
  t.ok(tabObj, 'is true')
  t.end()
})

tape('Sum of object values equals array length', function (t) {
  function sum (arr) {
    result = 0
    for (var i = 0; i < arr.length; i++){
      result += arr[i]
    }
    return result
  }
  t.ok(sum(Object.values(tabObj)) == arr.length, 'is true')
  t.end()
})
