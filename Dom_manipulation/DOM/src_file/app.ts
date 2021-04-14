import { bookarray } from "./Need/book.js";
import { obj_manager,deleteonlyrow } from "./Need/bookManger.js";

const book_form=document.querySelector(".book_form") as HTMLFormElement;
const choice = document.querySelector(".choice") as HTMLSelectElement;
const search_value = document.querySelector(".search_value") as HTMLInputElement;
const search_btn=document.querySelector(".search_btn") as HTMLButtonElement;

//console.log(book_form);

window.listen= { 
    deleteonlyrow
}
for (let index = 0; index < bookarray.length; index++) {
    bookarray[index].display(index+1);   
}
console.log(book_form);




search_btn.addEventListener("click",(e: Event)=> {
e.preventDefault();
console.log(obj_manager);
console.log(obj_manager.show());
obj_manager.searchbyID(bookarray,choice.value);
if(choice.value==="id"){
    bookarray[0].deleteallrow();
    obj_manager.searchbyID(bookarray,search_value.value);
}
if(choice.value==="author"){
    bookarray[0].deleteallrow();
    obj_manager.searchByauthor(bookarray,search_value.value);
}
if(choice.value==="price"){
    bookarray[0].deleteallrow();
    obj_manager.searchByprice(bookarray,search_value.value);
}
if(choice.value==="rating"){
    bookarray[0].deleteallrow();
    obj_manager.searchByrating(bookarray,search_value.value);
}
console.log(choice.value,search_value.value);
})