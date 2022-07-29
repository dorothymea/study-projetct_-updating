const bg = document.querySelector('.bg')
const load = document.querySelector('.loading')

let progress = 0
let int = setInterval(blurring, 25)
let blur

function blurring() {
    progress ++


    if(progress > 99){
        clearInterval(int)
    }

    load.innerText = `${progress}%`
    load.style.opacity = 1 - progress*0.01
    blur = (100-progress)/100 *35
    bg.style.filter = `blur(${blur}px)`
}