const express = require("express");
const app = express();
const userModel = require("./models/User")
const cors = require("cors");
app.use(cors());


app.use(express.json());

app.get("/", async function (req, res) {
    const data = await userModel.find({})
    res.json(data)
})

app.post("/createEmp", async (req, res) => {
    try {
        const data = await userModel.create(req.body)
        res.json(data)
    } catch (err) {
        console.log(err)
    }
})

app.get("/getUsers/:id", async (req, res) => {

    const data = await userModel.findById(req.params.id)
    res.json(data)
})

app.put("/updateUser/:id", async (req, res) => {
    const updatedUser = await userModel.findByIdAndUpdate( req.params.id , req.body , { new: true });
    res.json(updatedUser);
})

app.delete("/deleteUser/:id", async (req,res)=>{
    
    const data =await userModel.findByIdAndDelete(req.params.id)
    res.json(data)
})


app.listen(5000);