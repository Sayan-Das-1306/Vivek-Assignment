var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { createTable } from "./booklistcopy.js";
import { deleteallrow } from "./booklistcopy.js";
class Bookmanager {
    constructor() { }
    searchbyID(id_1) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("inside searchbyId");
            let uri = ("http://localhost:3000/Book/" + `${id_1}`);
            const res = yield fetch(uri);
            let book_array = yield res.json();
            let mybook = [];
            mybook.push(book_array);
            // console.log(mybook)
            // console.log(mybook.length)
            deleteallrow();
            createTable(mybook);
        });
    }
    searchByauthor(author_1) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("inside searchbyauthor");
            let uri = ("http://localhost:3000/Book/" + `?author=${author_1}`);
            const res = yield fetch(uri);
            let book_array = yield res.json();
            //let mybook = []
            //mybook.push(book_array)
            // console.log(mybook)
            // console.log(mybook.length)
            deleteallrow();
            createTable(book_array);
        });
    }
    searchByprice(price_1) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("inside searchbyauthor");
            let uri = ("http://localhost:3000/Book/" + `?price=${price_1}`);
            const res = yield fetch(uri);
            let book_array = yield res.json();
            //let mybook = []
            //mybook.push(book_array)
            // console.log(mybook)
            // console.log(mybook.length)
            deleteallrow();
            createTable(book_array);
        });
    }
    searchByrating(rating_1) {
        return __awaiter(this, void 0, void 0, function* () {
            let uri = ("http://localhost:3000/Book/" + `?rating=${rating_1}`);
            const res = yield fetch(uri);
            let book_array = yield res.json();
            //let mybook = []
            //mybook.push(book_array)
            // console.log(mybook)
            // console.log(mybook.length)
            deleteallrow();
            createTable(book_array);
        });
    }
    show() {
        return "it is working";
    }
}
let obj_manager = new Bookmanager();
export { obj_manager };
