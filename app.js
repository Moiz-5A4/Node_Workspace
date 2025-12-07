const express  = require('express');
const app = express();

app.route("/api/v1/demo").get((req,res)=>{
    res.status(200).json({
        message:"Success",

    })
});

app.listen(3000,()=>{
    console.log("App running on 3000");
    
})