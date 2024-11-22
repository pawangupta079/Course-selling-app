const { Schema, default: mongoose } = require("mongoose");
mongoose.connect("mongodb+srv://pg777869:jsatkGnSfER0VU9d@cluster0.ybfgd.mongodb.net/coursera-app");
// const Schema = mongoose.Schema;
// const ObjectId=mongoose.Types.ObjectId;

// User Schema
const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["student", "instructor", "admin"], default: "student" },
  enrolledCourses: [{ type: Schema.Types.ObjectId, ref: "Course" }], // References Course
}, { timestamps: true });

// Admin Schema
const adminSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["admin"], default: "admin" },
}, { timestamps: true });

// Course Schema
const courseSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  instructor: { type: Schema.Types.ObjectId, ref: "User" }, // References User (Instructor)
  content: [{ title: String, videoUrl: String }], // Course content with videos
}, { timestamps: true });

// Purchase Schema
const purchaseSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true }, // References User
  course: { type: Schema.Types.ObjectId, ref: "Course", required: true }, // References Course
  purchaseDate: { type: Date, default: Date.now },
  amount: { type: Number, required: true },
}, { timestamps: true });

// Models
const UserModel = mongoose.model("User", userSchema);
const AdminModel = mongoose.model("Admin", adminSchema);
const CourseModel = mongoose.model("Course", courseSchema);
const PurchaseModel = mongoose.model("Purchase", purchaseSchema);
// expporting
module.export = {
  UserModel,
  AdminModel,
  CourseModel,
  PurchaseModel,
  
}
