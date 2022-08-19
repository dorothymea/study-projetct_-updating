const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = '0'
    
    const updateCounter = () => {
        const target = +counter.getAttribute('data-target')
        const curText = +counter.innerText

        const delta = target / 300

        if(curText < target){
            counter.innerText = `${Math.ceil(curText + delta)}`

            setTimeout(updateCounter,4)
        }else{
            counter.innerText = target
        }
    }

    updateCounter()

})

