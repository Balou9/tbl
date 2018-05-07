var tape = require('tape')
var table = require('./index')
var array = ['Mikey', 'Gani', 'Gani', 'Louis', 'Gani', '419', '419', 'Louis',
             'Mikey', 'Gani', 'Louis', 'Gani', '419', '419']

var tabarr = table(array)

tape('Output is', function (t) {
  t.ok(tabarr, 'is true')
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
  t.ok(sum(Object.values(tabarr)) == array.length, 'is true')
  t.end()
})
