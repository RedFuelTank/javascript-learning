const cars = ["Mazda", "Ford", "BMW", "Mercedez"]
const stringWithNumber = ["Mazda", "Ford", "BMW", "Mercedez", 1]
const people = [
  {name: "Name1", budget:1000},
  {name: "Name1", budget:3000},
  {name: "Name1", budget:5000},
  {name: "Name1", budget:7000},
  {name: "Name1", budget:8000},
  {name: "Name1", budget:9000},

]

// cars.push("addStringLast")
// cars.unshift("Lada") // В начало списка
//
// cars.shift() // Удаляет первый элемент в массиве
// cars.pop() // Удаляет последний элемент в массиве

// cars.reverse()

// // Задача 1
// const text = "Hello, we're learning JavaScript!"
// const reverseText = text.split("").reverse().join(" ")
//
// console.log(reverseText)

// console.log(cars.indexOf("BMW"))
// const index = people.findIndex(function (person) {
//   return person.budget === 8000
// })
//
// const person = people.find(function (person) {
//   return person.budget === 8000
// })

// const person = people.find(person => person.budget === 8000)
// //
// // console.log(index)
// console.log(person)

// cars.includes("Car not exist") // false
const test = people.reduce((acc, person) => {
  acc += person.budget
  return acc;
})

