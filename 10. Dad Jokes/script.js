const verse = document.getElementById('verse')
const author = document.getElementById('author');
const btn = document.getElementById('changeBtn')

btn.addEventListener('click',generateVerse)

generateVerse()

function generateVerse(){
    fetch('https://v1.jinrishici.com/all.json',{headers:{'Accept':'application/json'}})
    .then(res => res.json())
    .then(data => {
        verse.innerHTML = data.content
        author.innerHTML = '——  '+ data.author
    })
}

