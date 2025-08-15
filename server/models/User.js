const mongoose=require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/EmployeeData")
const data=mongoose.Schema({
    empname: String,
    id: Number,
    email: String,
    address: String,
    salary: Number,
})

module.exports=mongoose.model("employee",data)