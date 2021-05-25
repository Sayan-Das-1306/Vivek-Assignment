import { display } from "./book.js";
class Bookmanager {
    constructor() { }
    searchbyID(bookarray, id_1) {
        let index, flag = 0;
        for (index = 0; index < bookarray.length; index++) {
            if (bookarray[index].id === id_1) {
                flag++;
                let singleArray = [];
                singleArray.push(bookarray[index]);
                display(singleArray);
            }
        }
    }
    searchByauthor(bookarray, author_1) {
        let index, flag = 0;
        for (index = 0; index < bookarray.length; index++) {
            if (bookarray[index].author === author_1) {
                flag++;
                display(bookarray);
            }
        }
    }
    searchByprice(bookarray, price_1) {
        let index, flag = 0;
        for (index = 0; index < bookarray.length; index++) {
            if (bookarray[index].price === price_1) {
                flag++;
                let singleArray = [];
                singleArray.push(bookarray[index]);
                display(singleArray);
            }
        }
    }
    searchByrating(bookarray, rating_1) {
        let index, flag = 0;
        for (index = 0; index < bookarray.length; index++) {
            if (bookarray[index].rating > rating_1) {
                flag++;
                let singleArray = [];
                singleArray.push(bookarray[index]);
                display(singleArray);
            }
        }
    }
    show() {
        return "it is working";
    }
}
let obj_manager = new Bookmanager();
export { obj_manager };
