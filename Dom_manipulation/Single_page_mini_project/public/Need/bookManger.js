import { bookarray } from "./book.js";
class Bookmanager {
    constructor() { }
    searchbyID(bookarray, id_1) {
        let index, flag = 0;
        for (index = 0; index < bookarray.length; index++) {
            if (bookarray[index].id === id_1) {
                flag++;
                bookarray[index].display(flag);
            }
        }
    }
    searchByauthor(bookarray, author_1) {
        let index, flag = 0;
        for (index = 0; index < bookarray.length; index++) {
            if (bookarray[index].author === author_1) {
                flag++;
                bookarray[index].display(flag);
            }
        }
    }
    searchByprice(bookarray, price_1) {
        let index, flag = 0;
        for (index = 0; index < bookarray.length; index++) {
            if (bookarray[index].price === price_1) {
                flag++;
                bookarray[index].display(flag);
            }
        }
    }
    searchByrating(bookarray, rating_1) {
        let index, flag = 0;
        for (index = 0; index < bookarray.length; index++) {
            if (bookarray[index].rating > rating_1) {
                flag++;
                bookarray[index].display(flag);
            }
        }
    }
    show() {
        return "it is working";
    }
}
let obj_manager = new Bookmanager();
function deleteonlyrow(id_2) {
    bookarray[0].deleteallrow();
    let index, flag = 0;
    for (index = 0; index < bookarray.length; index++) {
        if (bookarray[index].id === id_2) {
            continue;
        }
        else {
            flag++;
            bookarray[index].display(flag);
        }
    }
}
export { obj_manager, deleteonlyrow };
