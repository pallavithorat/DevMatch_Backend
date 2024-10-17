const express = require('express');

const app = express(); //creating a new web server, so i have to call listen over here so anybody can connect to us

//this will only handle GET call to /user
app.get("/user", (req,res) =>{
    res.send({firstName: "Pallavi" , lastName: "Thorat"});
});

app.post("/user", (req,res) =>{
    //save data to db
    res.send("data saved to DB")
});

//this will match all http methods API calls to /test
app.use("/test", (req,res) => {
    res.send("Hello from Server");
})

app.delete("/user", (req,res) =>{
    //save data to db
    res.send("Deleted")
});



app.listen(3000, () =>{
    console.log("Server is listening on port 3000");
});
