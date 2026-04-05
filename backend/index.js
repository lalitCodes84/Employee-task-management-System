const express = require("express");
const cors = require("cors");
 const PORT = 4444;
 const db = require("./config/db");

 
const app = express();
app.use(cors());
app.use(express.json());

app.get("/",(req,res) => {
    try {
        res.send(`Server Started Successfully`);
    } catch (error) {
        res.send(`Server Error`);
    }
});

app.listen(PORT,()=>{
    console.log(`Server Started Successfully On Port ${PORT}`);
});



