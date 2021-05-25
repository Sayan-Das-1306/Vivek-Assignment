import { bookarray } from "./Need/book.js";
import { obj_manager, deleteonlyrow } from "./Need/bookManger.js";
const book_form = document.querySelector(".book_form");
const choice = document.querySelector(".choice");
const search_value = document.querySelector(".search_value");
const search_btn = document.querySelector(".search_btn");
window.listen = {
    deleteonlyrow,
};
for (let index = 0; index < bookarray.length; index++) {
    bookarray[index].display(index + 1);
}
console.log(book_form);
search_btn.addEventListener("click", (e) => {
    e.preventDefault(); // does it require????
    console.log(obj_manager);
    console.log(obj_manager.show());
    obj_manager.searchbyID(bookarray, choice.value);
    if (choice.value === "id") {
        bookarray[0].deleteallrow();
        obj_manager.searchbyID(bookarray, search_value.value);
    }
    if (choice.value === "author") {
        bookarray[0].deleteallrow();
        obj_manager.searchByauthor(bookarray, search_value.value);
    }
    if (choice.value === "price") {
        bookarray[0].deleteallrow();
        obj_manager.searchByprice(bookarray, search_value.value);
    }
    if (choice.value === "rating") {
        bookarray[0].deleteallrow();
        obj_manager.searchByrating(bookarray, search_value.value);
    }
    console.log(choice.value, search_value.value);
});
const add_book = document.querySelector(".add_book");
const book_list = document.querySelector(".book_list");
const myfunction = () => {
    //console.log("myfunc",add_book.style.display,"mylist",list_btn.style.display)
    if (add_book.style.display === "block") {
        book_list.style.display = "block";
        add_book.style.display = "none";
    }
    else {
        book_list.style.display = "none";
        add_book.style.display = "block";
    }
};
const add_btn = document.querySelector(".add_btn");
const list_btn = document.querySelector(".list_btn");
console.log(add_btn, list_btn);
add_btn.addEventListener("click", (e) => {
    e.preventDefault();
    myfunction();
    //console.log(add_book.style.display);
});
list_btn.addEventListener("click", (e) => {
    e.preventDefault();
    myfunction();
});
