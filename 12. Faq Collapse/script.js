const toggleBtn = document.querySelectorAll('.toggle')
const faqs = document.querySelectorAll('.faq')
let table = [true,false,false,false,false]


toggleBtn.forEach((btn,idx)=>{
    btn.addEventListener('click',()=>{
        toggle(idx)
    })
})

function toggle(idx){
    if(table[idx]){
        faqs[idx].classList.remove('active')
        
    }else{
        faqs[idx].classList.add('active')
    }
    table[idx] = !table[idx]
}