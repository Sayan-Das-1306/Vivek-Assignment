

import { makeMongo  } from "./myConnect.js";
import express from 'express';
import bodyParser from 'body-parser';
import { myModel } from "./data_model.js";
import { myRouter } from "./myroute.js";



let app=express();
app.use(bodyParser.json()); 
app.use(express.json())


app.get("/",(req,res) =>{
    res.send("This is my Express Api")
})

app.use("/book",myRouter)


const port=5000;
const local = "127.0.0.1"

app.on('error', value => console.log("error is occured: ",value))
app.listen(port,local, async () => {
    console.log("Server is running on 5000")
    await makeMongo()
})