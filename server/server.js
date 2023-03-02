const express = require("express")
const cors = require("cors")
const path = require("path")

const app = express()
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: 'fd142cac0b6c4baa8e0082edadc99bce',
  captureUncaught: true,
  captureUnhandledRejections: true,
})
app.use(express.json())
app.use(cors())
app.use(express.static("public"))



app.get('/',(req,res)=>{
    res.status(200).sendFile(path.join(__dirname, '../public/index.html'))
    
    
})
app.get('/css',(req,res)=>{
    res.status(200).sendFile(path.join(__dirname, '../public/styles.css'))
    
    
})
app.get('/js',(req,res)=>{
    res.status(200).sendFile(path.join(__dirname, '../public/main.js'))
    
    

})
app.get('/rollbar', (req,res) => {
    res.sendStatus(200)
    rollbar.log('site visited')
})
app.get('/button',(req,res)=>{
    res.sendStatus(200)
    rollbar.info("button is clicked")
})




app.listen(4000,console.log("app running on 4000"))