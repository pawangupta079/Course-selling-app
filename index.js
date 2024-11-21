const express=require("express");
const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const app=express();

app.use("/api/v1/user",userRouter);
app.use("api/v1/course",courseRouter);


createUserRouts(express);
createCourseRouts(express);

express.listen(3000); 