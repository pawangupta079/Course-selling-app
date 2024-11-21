const { Router } = require ("express");
const adminRouter = Router();

adminRouter.post ("/signup", function(reg, res) {
    res. json ({
        message: "signup endpoint"
    })
})


adminRouter.post ("/signin", function (reg, res) {
    res. json ({
        message: "signup endpoint"
    })
})


adminRouter.post (" /course", function (req, res) {
    res. json ({
        message: "signup endpoint"
    })
})

adminRouter.put ("/course", function (reg, res) {
    res. json ({
        message: "signup endpoint"
    })
})

adminRouter.get("/course/bulk", function (req, res) {
    res. json ({
        message: "signup endpoint"
    })
})