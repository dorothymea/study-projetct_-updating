const sounds = ['applause','boo','gasp','tada','victory','wrong']
const buttons = document.querySelector('.buttons')

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound

    btn.addEventListener('click',()=>{
        stopPlay()

        let s = document.getElementById(sound)
        s.play()
    })

    buttons.appendChild(btn)
})

function stopPlay(){
    sounds.forEach(sound => {
        let s = document.getElementById(sound)

        s.pause()
        s.currentTime = 0
    })
}