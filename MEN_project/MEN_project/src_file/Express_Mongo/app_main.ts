import { makeMongo } from "./myConnect.js";
import express from "express";
import bodyParser from "body-parser";
import { myModel } from "./data_model.js";
import { myRouter } from "./myroute.js";
import path from "path";



let app = express();
app.use((req,res,next) => {
  res.header("Access-Control-Allow-Origin","*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods","GET,POST,DELETE,PUT");
  next();
});

app.use(bodyParser.json());
app.use(express.json());

// let __dirname = path.resolve(path.dirname(""))
//console.log(path.resolve(path.dirname("")))
// console.log(path.join(__dirname,"/public"))
// let static_path =path.join(__dirname,"/public")
// console.log(express.static(static_path))
// app.use(express.static(static_path)) 
 
app.get("/", (req, res) => {
   res.send("This is my Express Api"); 
});



app.use("/book", myRouter);


//D:\Javascript\MEN_project\public\default.html

const port = 5000;
const local = "127.0.0.1";

app.on("error", (value) => console.log("error is occured: ", value));
app.listen(port, local, async () => {
  console.log(`Server is running on ${port}`);
  await makeMongo();
});
