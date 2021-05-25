import { bookarray, display } from "./Need/book.js";
import { obj_manager } from "./Need/bookManger.js";
//import { updateArray } from "./Need/addlist.js";
const book_form = document.querySelector(".book_form");
const choice = document.querySelector(".choice");
const search_value = document.querySelector(".search_value");
const search_btn = document.querySelector(".search_btn");
let myStorage = JSON.parse(window.localStorage.getItem("data"));
if (window.localStorage.getItem("data_1") != null) {
    let updateArray = JSON.parse(window.localStorage.getItem("data_1"));
    myStorage.push(updateArray);
    window.localStorage.setItem("data", JSON.stringify(myStorage));
    window.localStorage.removeItem("data_1");
}
window.listen = {
    deleteonlyrow
};
display(myStorage);
console.log(book_form);
search_btn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(obj_manager);
    console.log(obj_manager.show());
    ///obj_manager.searchbyID(bookarray,choice.value);
    if (choice.value === "id") {
        bookarray[0].deleteallrow();
        obj_manager.searchbyID(myStorage, search_value.value);
    }
    if (choice.value === "author") {
        bookarray[0].deleteallrow();
        obj_manager.searchByauthor(myStorage, search_value.value);
    }
    if (choice.value === "price") {
        bookarray[0].deleteallrow();
        obj_manager.searchByprice(myStorage, search_value.value);
    }
    if (choice.value === "rating") {
        bookarray[0].deleteallrow();
        obj_manager.searchByrating(myStorage, search_value.value);
    }
    console.log(choice.value, search_value.value);
});
function deleteonlyrow(id_2) {
    bookarray[0].deleteallrow();
    let index, flag = 0;
    for (index = 0; index < myStorage.length; index++) {
        if (myStorage[index].id === id_2) {
        }
        else {
            flag++;
            let singleArray = [];
            singleArray.push(myStorage[index]);
            display(singleArray);
        }
    }
}
export { myStorage };
