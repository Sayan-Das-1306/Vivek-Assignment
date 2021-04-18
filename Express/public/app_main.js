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
import express from 'express';
import bodyParser from 'body-parser';
import { myRouter } from "./myroute.js";
let app = express();
app.use(bodyParser.json());
app.use(express.json());
app.get("/", (req, res) => {
    res.send("This is my Express Api");
});
app.use("/book", myRouter);
const port = 5000;
const local = "127.0.0.1";
app.on('error', value => console.log("error is occured: ", value));
app.listen(port, local, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Server is running on 5000");
    yield makeMongo();
}));
