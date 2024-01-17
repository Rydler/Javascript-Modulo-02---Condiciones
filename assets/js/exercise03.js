const boton = document.querySelector('button')

boton.addEventListener('click', () => {
    let firstNumber = Number(document.querySelector('#select1').value) * 100
    let secondNumber = Number(document.querySelector('#select2').value) * 10
    let thirdNumber = Number(document.querySelector('#select3').value)
    let result = firstNumber + secondNumber + thirdNumber

    result === 911 ? document.querySelector('p').innerHTML = 'password 1 correcto' 
    : result === 714 ? document.querySelector('p').innerHTML = 'password 2 correcto' 
    : document.querySelector('p').innerHTML = 'password incorrecto'
})


        
