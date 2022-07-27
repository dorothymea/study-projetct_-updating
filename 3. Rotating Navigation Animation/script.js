const container = document.querySelector('.container')
const menu = document.getElementById('menu')
const exit = document.getElementById('exit')

menu.addEventListener('click',()=>{
    container.classList.add('show-nav')
})

exit.addEventListener('click',()=>{
    container.classList.remove('show-nav')
})