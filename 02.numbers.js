// Number
const num = 42
const float = 42.0
const pow = 1e3
console.log(num, float)
console.log(pow)

console.log(Number.MAX_SAFE_INTEGER)
console.log(Math.pow(2, 53) - 1)
console.log(Number.MIN_SAFE_INTEGER)
console.log(Number.MIN_VALUE)
console.log(Number.MAX_VALUE)

console.log(Number.POSITIVE_INFINITY)
console.log(1 / 0) // -> Infinity
console.log(Number.NEGATIVE_INFINITY)

console.log(Number.NaN) // Not a number
console.log(1 / undefined) // -> NaN
console.log(isNaN(1 / undefined)) // -> true
console.log(Number.isNaN(42)) // -> false

console.log(isFinite(Infinity)) // -> false

// Все методы класса Math можно писать без Math

const number = '40.42'
console.log(parseInt(number) + 2) // -> 42

console.log(parseFloat(number) + 2) // -> 42.42
console.log(+number + 2) // -> 42.42

console.log(0.4 + 0.2) // !0.6

  // Методы решения проблемы
  console.log((0.4 + 0.2).toFixed(4)) // String type
  console.log(+(0.4 + 0.2).toFixed(4)) // Float type
  console.log(parseFloat((0.4 + 0.2).toFixed(4))) // Float type


// BigInt
console.log(typeof 9007199254740991n) // -> bigint
console.log(typeof BigInt(9007199254740991)) // -> bigint

// Math
console.log(Math.round(4.4))
console.log(Math.ceil(4.4))


// Работает только с bigint



