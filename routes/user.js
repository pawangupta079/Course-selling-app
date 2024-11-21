
function createUserRouts(app){

app.post("/user/signup", function(req, res){
    res.json({
        message: "signup endpoint"
    })
})

app.get("/user/signin", function(req, res){
    res.json({
        message: "signin endpoint"
    })
})

app.get("/user/purchases", function(req, res){
    res.json({
        message: "signup endpoint"
    })
})
}

module.exports={
    createUserRouts:createUserRouts
}