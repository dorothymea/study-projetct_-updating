const toggle = document.getElementById('toggle')
const nav = document.getElementById('nav')
let isActive = true


toggle.addEventListener('click',()=>{
    isActive = !isActive
    reRender(isActive)
})

function reRender(isActive){
    if(!isActive){
        nav.classList.remove('active')
    }else{
        nav.classList.add('active')
    }
}