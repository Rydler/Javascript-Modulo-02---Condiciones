const boton = document.querySelector('button')

boton.addEventListener('click', () => {
    let firstElement = Number(document.querySelector('#firstElement').value)
    let secondElement = Number(document.querySelector('#secondElement').value)
    let thirdElement = Number(document.querySelector('#thirdElement').value)
    let suma = firstElement + secondElement + thirdElement
    suma <= 10 ? document.querySelector('#suma').innerHTML = suma 
    : document.querySelector('#suma').innerHTML = 'Llevas demasiados stickers'
})