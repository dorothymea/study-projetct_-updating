const tags = document.getElementById('tags')
const textarea = document.getElementById('textarea')


textarea.focus()

textarea.addEventListener('keyup',(e)=>{

    createTags(textarea.value)

    if(e.key === 'Enter'){
        setTimeout(()=>{
            e.target.value = ''
        },10)

        randomSelect()
    }
})

function createTags(input){
    tags.innerHTML = ''
    const tagArr = input
        .split(/,|，/)
        .filter(tag => tag.trim() !== '')
        .map(tag => {
            tags.innerHTML += `<span class="tag">${tag}</span>`
        })
}


function randomSelect(){
    let tagEls = document.getElementsByClassName('tag')
    const times = Math.floor(tagEls.length * 1.5)

    const interval = setInterval(()=>{
        const randomTag = pickRandomTag()
        if(randomTag){
            highlightTag(randomTag)

            setTimeout(()=>{
                unHighlightTag(randomTag)
            },100)
        }
    },100)

    setTimeout(()=>{
        clearInterval(interval)

        setTimeout(()=>{
            const randomTag = pickRandomTag()

        highlightTag(randomTag)
        },100)
    },times*100)
}

function pickRandomTag(){
    let tagEls = document.getElementsByClassName('tag')
    return tagEls[Math.floor(Math.random()*tagEls.length)]
}


function highlightTag(tag){
    tag.classList.add('active')
}

function unHighlightTag(tag){
    tag.classList.remove('active')
}
