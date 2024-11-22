const express = require("express");
const userRouter = require("./routes/user"); // Correct import
const courseRouter = require("./routes/course"); // Correct import
const adminRouter = require("./routes/admin"); // Correct import

const app = express();

app.use(express.json()); // Middleware to parse JSON requests

// Define routes
app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", courseRouter);
app.use("/api/v1/admin", adminRouter);

// Start the server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
