// Функции


// Function expression
const greet2 = function (name) {
  console.log('Hello,' + name)
}

// greet("Elena")
//
// greet2("Number 2")

// Function declaration (Работает в любом месте кода может быть объявлена уже после вызова)
// function greet(name) {
//   console.log('Hello,' + name)
// }
//
//
// // console.log(typeof greet3(''))
// console.dir(greet3(''))
//
// // Функции в JS являются объектами
//
// // Анонимные функции
// setInterval(function () {
//
// }, 1000)

// 3 Стрелочные функции

const greet3 = (name) => {
  console.log('Hello', name)
}

const liteGreet3 = name => console.log('Hello', name)

// 4 Параметры по умолчанию

const sum = (a, b = 1) => a + b
const sum1 = (a, b = a * 2) => a + b

console.log(sum(41))

// Rest
function sumAll (...numbers) {
  let result = 0
  for (let number of numbers) {
    result += number
  }
  return result
}

console.log(sumAll(1, 2, 3, 4, 5))

// 5 Замыкания
function createMember(name) {
  return function (lastName) {
    console.log(name + lastName)
  }
}

const logWithLastName = createMember("Name")
console.log(logWithLastName) /*
function (lastName) {
    console.log(name + lastName)
  }
  */

console.log(logWithLastName("Test"))
