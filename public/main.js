let castle = document.querySelector("img")

castle.addEventListener("click",(evt)=>{
    alert("this is my castle, there are many like it, but this one is mine")
    axios.get('/rollbar').then(response => {

    }).catch(err => console.log(err))
})

let button = document.querySelector("button")

button.addEventListener("click",(evt)=>{
    axios.get('/button').then(response => {

    }).catch(err => console.log(err))
})