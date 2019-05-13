const PRINT = Symbol('this is private people method')

export class People {
  [PRINT] () {
    console.log('name')
  }
}

const kimi = new People()

kimi[PRINT]()

getOwnPropertySymbols
