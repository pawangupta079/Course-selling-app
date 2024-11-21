

function createCourseRouts(app){
    app.post("/course/purchase", function(req, res){
        res.json({
            message: "signup endpoint"
        })
    })



    app.get('/courses',(req, res)=>{
        res.send("Hello Pawan Bhiya")
    })
}
module.exports{
    createCourseRouts:createCourseRouts
}