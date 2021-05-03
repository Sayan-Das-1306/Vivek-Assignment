import express from "express";
import { myModel } from "./data_model.js";
import { getByid, putByid, delByid, getByauthor, getBymytext, getbyPricerange, addBook, } from "./operation.js";
let app_1 = express();
let myRouter = express.Router();
app_1.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT");
    next();
});
//using different search params
myRouter
    .route("/fetch/")
    .get((req, res) => {
    if (req.query.q) {
        let search = req.query.q;
        getBymytext(req, res, search);
    }
    else if (req.query.author) {
        let search = req.query.author;
        getByauthor(req, res, search);
    }
    //req.query.["price"]
    //let prices = req.query.["price"]
    else if (req.query.max || req.query.min) {
        let max = req.query.max;
        let min = req.query.min;
        getbyPricerange(req, res, min, max);
    }
    else {
        myModel.find().then((value) => {
            console.log(value);
            res.send(value);
        });
    }
})
    .post((req, res) => {
    addBook(req, res);
});
//using only id of data
myRouter
    .route("/:id")
    .get((req, res) => {
    //console.log(req.params.id)
    getByid(req, res);
})
    .put((req, res) => {
    putByid(req, res);
})
    .delete((req, res) => {
    delByid(req, res);
});
export { myRouter };
