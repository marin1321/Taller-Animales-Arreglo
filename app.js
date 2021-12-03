/*  // Crear grupos de máximo 3 integrantes y realizar los siguientes ejercicios.
  // Entregar carpeta comprimida con cada uno de los ejercicios en js.
  ​
  ​
  // 1. Mostrar todos los animales cuya inicial sea la letra B
  // 2. Mostrar todos los animales que tengan más de 5 años.
  // 3. Mostrar todos los animales que sean de tipo ave y tengan más de 10 años.
  // 4. Muestre un Array con los nombres de todos los animales mamíferos de color negro.
  // 5. Muestre un Array donde se excluyan los animales de color blanco. */

const seccion1 = document.getElementById('seccion1')
const seccion2 = document.getElementById('seccion2')
const seccion3 = document.getElementById('seccion3')
const seccion4 = document.getElementById('seccion4')
const seccion5 = document.getElementById('seccion5')
const template1 = document.getElementById('template1').content
const template2 = document.getElementById('template2').content
const template3 = document.getElementById('template3').content
const template4 = document.getElementById('template4').content
const template5 = document.getElementById('template5').content
const fragment = document.createDocumentFragment()

const animales = [
    {name:"Lobo", type:"Mamifero", age:5,color:"Gris"},
    {name:"Zorro", type:"Mamifero", age:2,color:"Amarillo"},
    {name:"Gato", type:"Mamifero", age:7,color:"Negro"},
    {name:"Caballo", type:"Mamifero", age:3,color:"Café"},
    {name:"León", type:"Mamifero", age:12,color:"Café"},
    {name:"Elefante", type:"Mamifero", age:13,color:"Gris"},
    {name:"Jirafa", type:"Mamifero", age:9,color:"Amarillo"},
    {name:"Tigre", type:"Mamifero", age:5,color:"Amarillo"},
    {name:"Ballena", type:"Mamifero", age:3,color:"Azul"},  
    {name:"Búho", type:"Ave", age:13,color:"Café"},
    {name:"Gallina", type:"Ave", age:9,color:"Blanco"},
    {name:"Águila", type:"Ave", age:4,color:"Rojo"},
    {name:"Perro", type:"Mamifero", age:5,color:"Blanco"},
    {name:"Toro", type:"Mamifero", age:12,color:"Negro"},
    {name:"Oveja", type:"Mamifero", age:13,color:"Blanco"},
    {name:"Hombre", type:"Mamifero", age:9,color:"Piel"},
]

const startB = animales.filter((element) => element.name.startsWith('B'))
renderstartB(startB);

const age = animales.filter((element) => element.age>5)
renderage(age)

const bird = animales.filter((element) => element.type=='Ave' && element.age>10)
renderbird(bird);

const names = animales.filter((element) => element.color=="Negro" ).map(function(element) { return element.name })
rendernames(names);

const whiteNot = animales.filter((element) => element.color!="Blanco")
renderwhiteNot(whiteNot);

function renderstartB(arreglo) {
  arreglo.forEach(element => {
    let clone = document.importNode(template1, true)
    const box = document.createElement('div')
    box.setAttribute('id', 'contain')
    clone.querySelector('#name').textContent = element.name
    clone.querySelector('#type').textContent = element.type
    clone.querySelector('#age').textContent = element.age
    clone.querySelector('#color').textContent = element.color
  
    box.appendChild(clone)
    fragment.appendChild(box) 
  });
  seccion1.appendChild(fragment)
}

function renderage(arreglo) {
  arreglo.forEach(element => {
    let clone = document.importNode(template2, true)
    const box = document.createElement('div')
    box.setAttribute('id', 'contain')
    clone.querySelector('#name').textContent = element.name
    clone.querySelector('#type').textContent = element.type
    clone.querySelector('#age').textContent = element.age
    clone.querySelector('#color').textContent = element.color
  
    box.appendChild(clone)
    fragment.appendChild(box) 
  });
  seccion2.appendChild(fragment)
}

function renderbird(arreglo) {
  arreglo.forEach(element => {
    let clone = document.importNode(template3, true)
    const box = document.createElement('div')
    box.setAttribute('id', 'contain')
    clone.querySelector('#name').textContent = element.name
    clone.querySelector('#type').textContent = element.type
    clone.querySelector('#age').textContent = element.age
    clone.querySelector('#color').textContent = element.color
  
    box.appendChild(clone)
    fragment.appendChild(box) 
  });
  seccion3.appendChild(fragment)
}

function rendernames(arreglo) {
  arreglo.forEach(element => {
    let clone = document.importNode(template4, true)
    const box = document.createElement('div')
    box.setAttribute('id', 'contain')
    clone.querySelector('#name').textContent = element
    box.appendChild(clone)
    fragment.appendChild(box) 
  });
  seccion4.appendChild(fragment)
}

function renderwhiteNot(arreglo) {
  arreglo.forEach(element => {
    let clone = document.importNode(template5, true)
    const box = document.createElement('div')
    box.setAttribute('id', 'contain')
    clone.querySelector('#name').textContent = element.name
    clone.querySelector('#type').textContent = element.type
    clone.querySelector('#age').textContent = element.age
    clone.querySelector('#color').textContent = element.color
  
    box.appendChild(clone)
    fragment.appendChild(box) 
  });
  seccion5.appendChild(fragment)
}