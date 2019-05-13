
"use strict";
const app = {
  name: 'ts',
  test: {
    name: 'kimi'
  }
}

Object.freeze(app.test)
Object.freeze(app)

// app.name= 'asdfgh'

// app.de = 'dede'
app.test.me = 'dede'

delete app.test.name


console.log('app', app)



function f(test) {
  test.aa = '123'
  console.log('test', test)
}

var a = {
  aa: {
    ty: 123
  }
}

f(a)
