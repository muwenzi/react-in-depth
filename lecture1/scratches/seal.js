const App = {
  name: 'ts'
}

Object.seal(App)

App.name = 'asgh'

console.log('name', App.name)
