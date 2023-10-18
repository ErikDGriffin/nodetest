let express = require("express");
let myApp = express()

myApp.use(express.urlencoded({extended: false}))

myApp.get( '/', function (req, res) {
    res.send(`
    
    <form action="/answer" method="POST">
    <p> "What color is the sky on a sunny day? </p>
    <input name = "skyColor" autocomplete="off">
    <button> submit answer </button>
    </form>

    `)

})
myApp._router.post('/answer', function(req , res){
    //res.send("thanks for submitting the form")
  
    if (req.body.skyColor.toUpperCase() == "BLUE") {
        res.send(`
        <p> congrats, you are correct!</p>
        <a href = "/">back to the homepage</a>
        `)

    } else {  

res.send(`
        <p> sorry! , you suck!</p>
        <a href = "/">back to the homepage</a>
        `)
    }

})
myApp._router.get('/answer', function(req , res){
    res.send("Nothing to see here bub")

})

myApp.listen(3000)
