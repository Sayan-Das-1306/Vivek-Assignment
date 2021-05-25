"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const id_1 = new URLSearchParams(window.location.search).get("id");
const show_1 = document.querySelector(".show_1");
const sendDetails = () => __awaiter(void 0, void 0, void 0, function* () {
    let uri = ("http://localhost:3000/Book/" + id_1);
    const res = yield fetch(uri);
    let single_book = yield res.json();
    console.log("it is from sendDetails");
    let template = `
        <h2>Books Id  : ${single_book.id}</h2>
        <h2>Author : ${single_book.author}</h2>
        <h2>Price  : ${single_book.price}</h2> 
    `;
    show_1.innerHTML = template;
});
window.addEventListener("DOMContentLoaded", () => sendDetails());
