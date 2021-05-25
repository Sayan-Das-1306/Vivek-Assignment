var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { makeMongo } from "./myConnect.js";
import express from "express";
import bodyParser from "body-parser";
import { myRouter } from "./myroute.js";
let app = express();
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT");
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
app.listen(port, local, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`Server is running on ${port}`);
    yield makeMongo();
}));
