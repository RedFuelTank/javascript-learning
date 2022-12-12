const heading = document.getElementById('hello')
console.dir(heading)

// const heading2 = document.getElementsByTagName('h2')[0] // Старый метод
// const heading2 = document.getElementsByClassName('h2-class')[0] // Так - же достаточно старый метод
// const heading2 = document.querySelector('.h2-class') // CSS selector
const heading2 = document.querySelector('h2') // CSS selector

console.dir(heading2)

const heading3 = heading2.nextElementSibling;
console.log(heading3)

const h2List = document.querySelectorAll('h2')
console.log(h2List)

const set = (node, text, color, fontSize) => {
  setTimeout(() => {
    addStylesTo(node, text, color, fontSize)
  }, 2500)
}

set(heading, "test")


function addStylesTo(node, text, color='red', fontSize) {
  node.textContent = text;
  node.style.color = color;
  node.style.textAlign = 'center'
  node.style.backgroundColor = 'black'
  node.style.padding = '2rem'

  // false: "", null, 0, undefined, false
  if (fontSize) {
    node.style.fontSize = fontSize;
  }
}

heading.onclick = () => {
  console.log('click')
}

heading2.addEventListener('dblclick', () => {
  heading2.style.textAlign = 'center'
  heading2.style.backgroundColor = 'black'
  heading2.style.padding = '2rem'
})
