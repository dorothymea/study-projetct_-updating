const circles = document.querySelectorAll('.circle')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const progress = document.getElementById('progress')



let currentActive = 1
update()
next.addEventListener('click',()=>{
    currentActive++
    if(currentActive>circles.length){
        currentActive = circles.length
    }

    update()
})

prev.addEventListener('click',()=>{
    currentActive--
    if(currentActive<1){
        currentActive = 1
    }

    update()
})

function update(){
    circles.forEach((circle,idx) => {
        if(idx<currentActive){
            circle.classList.add('active')
        }else{
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')
    progress.style.width = (actives.length-1)/(circles.length-1)*100 + '%'
    console.log(currentActive)
    if(currentActive===1){
        prev.classList.add('disabled')
    }else if (currentActive===circles.length){
        next.classList.add('disabled')
    }else{
        prev.classList.remove('disabled')
        next.classList.remove('disabled')
    }
}