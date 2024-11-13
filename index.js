const express=require("express")
const express=express()

app.post("/user/signin", function(req, res){
    res.json({
        message: "signin endpoint"
    })
})

app.get("/user/signup", function(req, res){
    res.json({
        message: "signup endpoint"
    })
})

app.get("/user/purchases", function(req, res){
    res.json({
        message: "signup endpoint"
    })
})

app.get("/course/purchases", function(req, res){
    res.json({
        message: "signup endpoint"
    })
})



app.get('/courses',(req, res)=>{
    res.send("Hello Pawan Bhiya")
})



express.listen(3000);