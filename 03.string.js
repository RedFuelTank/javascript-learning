const age = 20
// const getAge = (age) => {
//   return age
// }

// const output = 'Hello, my name\'s' + name + 'and I\'m ' + age + 'years old'
// const output = `Hello, my name\'s ${name} and i\'m ${getAge(age)} years old`
// const output = `
// <div>This is div</div>
// <p>Paragraph</p>`
// console.log(output)


// const name = 'Daniil'
// console.log(name.toUpperCase())
// console.log(name.toLowerCase())
// console.log(name.charAt(2))
// console.log(name.indexOf('iil'))
// console.log(name.startsWith("!"))
//
// const wordWithSpaces = '   word    '
// console.log(wordWithSpaces.trim())
// console.log(wordWithSpaces.trimLeft())
// console.log(wordWithSpaces.trimRight())

function logPerson(s, name, age) {
  console.log(s, name, age)
  return `${s[0]}${name}${s[1]}${age}`
}

const personName = 'Name'
const personAge = 20

const output = logPerson`Name: ${personName}, Age: ${personAge}!`// Выдаёт массив в параметр s
console.log(output)

