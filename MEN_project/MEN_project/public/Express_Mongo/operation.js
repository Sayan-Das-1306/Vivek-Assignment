var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { myModel } from "./data_model.js";
//using id part operation
const getByid = (req, res) => {
    console.log("inside getbyid func");
    console.log(req.params.id);
    const id = req.params.id;
    myModel.findById(id)
        .then(value => {
        res.send(value);
    });
};
const putByid = (req, res) => {
    const mybook = new myModel({
        _id: req.params.id,
        myid: req.body.myid,
        author: req.body.author,
        price: req.body.price
    });
    console.log(mybook);
    myModel.updateOne({ _id: req.params.id }, mybook)
        .then(() => {
        //res.status(201).res.write("your Data is Updated")
        res.send("updation is done");
        //res.send(mybook)
    })
        .catch((error) => console.log(error));
};
const delByid = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //myModel.deleteOne({_id : req.params.id})
    try {
        yield myModel.deleteOne({ _id: req.params.id });
        //myModel.findByIdAndDelete(req.params.id)
        //res.send("Deleted Succesfully")
    }
    catch (err) {
        console.log(err.message);
    }
});
//using different search part
const getBymytext = (req, res, search) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const mydata = yield myModel.find({ $or: [{ "author": search }, { "myid": search }] });
        res.send(mydata);
    }
    catch (error) {
        console.log(error.message);
    }
});
const getByauthor = (req, res, search) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("this is author search");
        const mydata = yield myModel.find({ "author": search });
        res.send(mydata);
    }
    catch (error) {
        console.log(error.message);
    }
});
const getbyPricerange = (req, res, min, max) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const mydata = yield myModel.find({ $and: [{ "price": { $gte: min } },
                { "price": { $lte: max } }] });
        res.send(mydata);
    }
    catch (error) {
        console.log(error.message);
    }
});
//adding data
const addBook = (req, res) => {
    let result = new myModel(req.body);
    result.save();
    //res.send("Succesfully added new Book")
};
export { getByid, putByid, delByid, getByauthor, getbyPricerange, getBymytext, addBook };
