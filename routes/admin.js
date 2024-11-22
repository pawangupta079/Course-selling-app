const { Router } = require("express");
const adminRouter = Router();
const { AdminModel, CourseModel } = require("../db");

// Admin Signup
adminRouter.post("/signup", async function (req, res) {
  const { name, email, password } = req.body;
  try {
    const newAdmin = new AdminModel({ name, email, password });
    await newAdmin.save();
    res.status(201).json({
      message: "Admin signed up successfully",
      admin: newAdmin,
    });
  } catch (err) {
    res.status(500).json({
      message: "Error signing up admin",
      error: err.message,
    });
  }
});

// Admin Signin
adminRouter.post("/signin", async function (req, res) {
  const { email, password } = req.body;
  try {
    const admin = await AdminModel.findOne({ email });
    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }
    if (admin.password !== password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    res.status(200).json({
      message: "Admin signed in successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: "Error signing in admin",
      error: err.message,
    });
  }
});

// Add a New Course
adminRouter.post("/course", async function (req, res) {
  const { title, description, price, instructor } = req.body;
  try {
    const newCourse = new CourseModel({ title, description, price, instructor });
    await newCourse.save();
    res.status(201).json({
      message: "Course added successfully",
      course: newCourse,
    });
  } catch (err) {
    res.status(500).json({
      message: "Error adding course",
      error: err.message,
    });
  }
});

// Update an Existing Course
adminRouter.put("/course/:id", async function (req, res) {
  const { id } = req.params;
  const updates = req.body;
  try {
    const updatedCourse = await CourseModel.findByIdAndUpdate(id, updates, {
      new: true,
    });
    if (!updatedCourse) {
      return res.status(404).json({ message: "Course not found" });
    }
    res.status(200).json({
      message: "Course updated successfully",
      course: updatedCourse,
    });
  } catch (err) {
    res.status(500).json({
      message: "Error updating course",
      error: err.message,
    });
  }
});

// Get All Courses in Bulk
adminRouter.get("/course/bulk", async function (req, res) {
  try {
    const courses = await CourseModel.find();
    res.status(200).json({
      message: "Courses fetched successfully",
      courses,
    });
  } catch (err) {
    res.status(500).json({
      message: "Error fetching courses",
      error: err.message,
    });
  }
});

module.exports = adminRouter;
