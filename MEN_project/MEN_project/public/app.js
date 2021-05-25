//import "../public/Css/default.css";
import { sendTomain } from "./booklistcopy.js";
import { addDetails } from "./addlist.js";
import { deleteOnlyRow } from "./delete.js";
import { operation_app } from "./operation.js";
const books_list = document.querySelector(".books_list");
const add_list = document.querySelector(".add_list");
const show = document.querySelector(".show");
books_list.addEventListener("click", (e) => {
    e.preventDefault();
    let req = new XMLHttpRequest();
    req.open("GET", "./view_file/booklist.html", true);
    req.send();
    req.onreadystatechange = function () {
        if (req.readyState == 4) {
            if (req.status == 200) {
                console.log("trying to call a function");
                sendTomain();
                show.innerHTML = req.responseText;
                const search = document.querySelector(".search_btn");
                const search_value = document.querySelector(".search_value");
                const choice = document.querySelector(".choice");
                console.log(search);
                operation_app(search, search_value, choice);
                window.listen = {
                    deleteOnlyRow
                };
            }
            else {
                console.log(req.status);
            }
        }
    };
    console.log(show);
    /*search.addEventListener("click",(e: Event) => {
        e.preventDefault()
        console.log(search)
    })*/
});
add_list.addEventListener("click", (e) => {
    e.preventDefault();
    let req = new XMLHttpRequest();
    req.open("GET", "./view_file/addlist.html", true);
    req.send();
    req.onreadystatechange = function () {
        if (req.readyState == 4) {
            if (req.status == 200) {
                show.innerHTML = req.responseText;
            }
            else {
                console.log(req.status);
            }
        }
    };
    show.addEventListener("submit", (e) => {
        console.log("it is addlist button working");
        e.preventDefault();
        setTimeout(() => {
            addDetails();
        }, 5000);
    });
});
