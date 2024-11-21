const express=require("express");
const { createUserRouts } = require("./routes/user");
const { createCourseRouts } = require("./routes/course");
const express=express();

app.use("/user",userRouts);
app.use("/user",courseRouts);


createUserRouts(express);
createCourseRouts(express);

express.listen(3000); 