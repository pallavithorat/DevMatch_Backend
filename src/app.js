const express = require('express');

const app = express(); //creating a new web server, so i have to call listen over here so anybody can connect to us

app.use("/test", (req,res) => {
    res.send("Hello from Server");
})

app.listen(3000, () =>{
    console.log("Server is listening on port 3000");
});
