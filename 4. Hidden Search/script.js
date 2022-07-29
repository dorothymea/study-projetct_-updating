let active = false

const btn = document.querySelector('.btn')
const search = document.querySelector('.search')

btn.addEventListener('click',()=>{
    active = !active
    toggle()
})

const toggle = ()=>{
    if(active){
        search.classList.add('active')
    }else{
        search.classList.remove('active')
    }
}