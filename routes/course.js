const { Router } = require("express");
const courseRouter = Router();

// Endpoint to handle course purchases
courseRouter.post("/purchase", function (req, res) {
    res.json({
        message: "Course purchase endpoint"
    });
});

// Endpoint to preview a course
courseRouter.get("/preview", function (req, res) {
    res.json({
        message: "Hello Pawan Bhiya"
    });
});

// Export the router
module.exports = courseRouter;
