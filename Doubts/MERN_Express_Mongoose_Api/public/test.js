var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//import { makeMongo } from "./myConnect";
import { myModel } from "./data_model";
console.log(myModel);
const getallBooks = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //await makeMongo()
        let books = yield myModel.find();
        console.log(books);
    }
    catch (e) {
        console.log(e.message);
    }
});
