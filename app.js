const container = document.getElementById("cont")
const quoteTag = document.getElementById("quoteC")
const authorTag = document.getElementById("authorC")
const button = document.getElementById("button")

addEventListener("load", async event =>{
    try{

        const post =  await fetch("http://api.quotable.io/random",{method : 'GET'})
        const data =  await post.json()
        const quote = data.content
        const autor = data.author
        quoteTag.innerText = `"${quote}"`
        authorTag.innerText = `___${autor}`
    }
        catch{(error => console.error('Error:', error));
        }
})

async function changeQuote(e) {
    e.preventDefault()

    try{
        button.addEventListener("click", event =>{
            button.disabled = true;
            button.classList.add("btnLoading")
            setTimeout(() => {
                button.disabled = false
                button.classList.remove("btnLoading")
            },1000
        )
        })
        const post = await fetch("http://api.quotable.io/random",{method : 'GET'})
        const data = await post.json()
        const quote = data.content
        const autor = data.author
        quoteTag.innerText = `"${quote}"`
        authorTag.innerText = `___${autor}`
    }
    catch{(error => console.error('Error:', error));
    }
        
}