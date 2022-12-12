// Event Loop
//
// const timeout = setTimeout(() => {
//   console.log("PASSED")
// }, 2500)
//
// clearTimeout(timeout) // Очищает таймаут не сработает
//
// const interval = setInterval(() => {
//   console.log('After timeout')
// }, 1000)
//
// clearInterval(interval)

// const delay = (callback, wait=1000) => {
//   setTimeout(callback, wait)
// }
//
// delay(() => {
//   console.log("Test")
// })

const delay = (wait = 1000) => {
  return new Promise((resolve, reject) => { // resole - пошло всё по плану / reject - всё пошло не так
    setTimeout(() => {
      reject("Something went wrong")
    }, wait)
  })
}
//
// delay(2500)
//   .then(
//     () => {
//       console.log('After 2 seconds');
//     }
//   )
//   .catch(err => console.error(err))
//   .finally(() => console.log('Finally'))


const getData = () => new Promise(resolve => resolve([
  1,1,2,3,5,8,13
]))

// getData().then(data => console.log(data))

async function asyncExample() {
  try {
    await delay(3000)
  } catch (e) {}
  const data = await getData()
  console.log(data)
}

asyncExample()

// Ajax requests

