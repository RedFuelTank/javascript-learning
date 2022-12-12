const person = {
  name: "Name",
  age: 26,
  languages: ["RU"],
  needToRemove: "Need to remove",
  info: function() {
    console.info('Person information:', this.name)
  }
}

// delete person.needToRemove
//
//
// // Дестректуризация
//
// // const name = person.name
// // const age = person.age
// // const languages = person.languages
//
// const {name, age: personAge, languages} = person
//
// console.log(name, personAge, languages)
//
// for (let key in person) {
//   if (person.hasOwnProperty(key)) { // Следует делать так чтобы он не заходил в прототип
//     console.log(key) // Выдаст ключи из объекта person
//     console.log(person[key])
//   } // Выдаст значения из объекта person
//   // По логике значения в объектах находятся в словарях
//   // Данный цикл может быть опасен поскольку цикл может заходить и в данные прототипа
// }
//
// const keys = Object.keys(person) // Не затрагивает прототип
// keys.forEach((key) => {
//   console.log(key)
//   console.log(person[key])
// })
//
// person.info()

const logger = {
  keys() {
    console.log('Object keys: ', Object.keys(this))
  },

  keysAndValuesArrow() {
    console.log('Object keys: ', Object.keys(this))
    Object.keys(this).forEach((key) => {
      console.log(this[key]);
    })
  },

  keysAndValuesWrong() {
    console.log('Object keys: ', Object.keys(this))
    Object.keys(this).forEach(function(key) { // Выдаёт undefined всё дело в контексте
      // Функция создаёт новый контекст (this не относится к this в методе keys()
      console.log(this[key]);
      })},

    keysAndValuesRight() {
    console.log('Object keys: ', Object.keys(this))
      const self = this;
    Object.keys(self).forEach(function(key) { // Выдаёт undefined всё дело в контексте
      // Функция создаёт новый контекст (this не относится к this в методе keys()
      console.log(self[key]);
    })

      // function().bind(this) так же помогает
  },

  withParams(top = false, between = false, bottom = false) {
    if (top) {
      console.log('====START====')
    }
    Object.keys(this).forEach((key, index, array) => {
      console.log(this[key]);
      if (between && index !== array.length - 1) {
        console.log('=============')
      }
    })
    if (bottom) {
      console.log('====END====')
    }
  },
}

// const bound = logger.keys.bind(person)
// console.log(bound)

// logger.keys.call(person) // выполняет и bind и console.log
logger.withParams.call(person, true, true, true)
logger.withParams.apply(person, [true, true, true]) // Принимает только два параметра
