const express = require("express")

const app = express();

app.get("/", (req,res)=>{
  res.status(200).send({
      message: "Rest api ayakta...",
  })  
})

app.listen(3232, ()=>{
    console.log("3232 Portu uzerinden calisiyor...");
})