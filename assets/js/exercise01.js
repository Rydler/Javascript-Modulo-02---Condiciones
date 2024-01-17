const imagen = document.querySelector('img')
imagen.addEventListener('click', () => {
    imagen.style.border === '2px solid red' ? imagen.style.border = 'none' : imagen.style.border = '2px solid red'
})
