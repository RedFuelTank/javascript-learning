// // 1 Переменные
//
// // variable (Устаревшая переменная)
// // Можно переназначать значение переменной
// // var name = "Testable name"
// // name = "Another testable name"
// //
// // // constant
// // // Нельзя переназначить значение переменной
// // const lastName = "Testable last name"
// //
// //   // boolean const
// //   const isProgrammer = true
// //
// // //
// // // Является схожии с variable поддаётся изменения
// // let age = 26
// // age = 27
// //
// // // Позволяет создавать переменные с символами
// // const _ = 'private'
// // const $ = 'some value'
// //
// // // const if - невозможное решение
// //
// // // С цифрами
// // const withNum5 = '5'
//
//   // Но в начале названия переменной нельзя: const 5withNum
//
// // 2 Мутирование
// console.log('Имя человека: ' + name)
//
//   // Но у языка так - же слабая типизация
//   console.log('Возраст: ' + age) // значение age приводится к String
//
//   // JS предоставляет только правила языка
//   //   alert("Test") // Браузерная часть может оказаться невозможной в некоторых средах
//
// // prompt('Введите фамилия') // Данная функция возвращает значение обратно такая конструкция не выведет ничего в
// //   // браузере
// //
// // let lastNamePrompt = prompt("Введите фамилию") // Вызывает запрос у пользователя
// // alert(lastNamePrompt)
//
// // 3 Операторы
// let currentYear = 2022
// const birthYear = 2001
//
// age = currentYear - birthYear
//
// const a = 10
// const b = 5
//
// console.log(a + b)
// console.log(a - b)
// console.log(a / b)
// console.log(a * b)
// console.log(currentYear++)
// console.log(currentYear)
//
// let c = 32
// // c = c + a
// c += a
//
// // 4 Тип данных
// const booleanVariable = true
// const stringVariable = 'string variable'
// const numberVariable = 25
// let x;
//
//
// console.log(typeof booleanVariable) // boolean
// console.log(typeof stringVariable) // string
// console.log(typeof numberVariable) // number
// console.log(typeof x) // undefined
// console.log(typeof null) // object
//
// 5 Приоритет операторов
const fullAge = 20
const birthYear = 2001
const currentYear = 2022

const isFullAge = currentYear - birthYear >= fullAge

// 6 Условные операторы
// const courseStatus = 'pending'
//
// if (courseStatus === 'ready') {
//   console.log('Course is ready and ready to be taken')
// } else if (courseStatus === 'pending')
//   console.log('Course in development')


const num1 = 42
const num2 = '42'

if (num1 == num2) {} //true

if (num1 === num2) {} // false

// Тернарное выражение
const isReady = true
isReady ? console.log('YEP') : 'BAZINGA'

// 7 Булевая логика


// 8 Функции
function calculateAge(year) {
  return 2022 - year
}

const year = calculateAge(2022)
console.log(year)
console.log(calculateAge(2019))

function logInfoAbout(name, year) {
  const age = calculateAge(year)

  if (age > 0) {
    console.log('Человек по имени ' + name)
  }
}

// 9 Массивы
// const array = new Array('First', 'Second', 'Third')
// const array = ['First', 'Second', 'Third']
// console.log(array[0])
// console.log(array[1])
// console.log(array.length)
//
// array[0] = 'Non-first'
// console.log(array)

// 10 Циклы
const array = ['First', 'Second', 'Third']

// for (let i = 0; i < array.length; i++) {
//   console.log(i)
//   console.log(array[i])
// }
//
// for (let symbol of array) {
//   console.log(symbol)
// }

// 11 Объекты
const person = {
  firstName: 'First name',
  lastName: 'Last name',
  languages: ['RU', 'EN', 'FR'],
  hasWife: false,
  greet: function () {
    console.log("Greeting")
  }
}

console.log(person.firstName)
console.log(person["firstName"])

const key = 'languages'
console.log(person[key])

person.hasWife = true

person.isProgrammer = true;

person.greet()



