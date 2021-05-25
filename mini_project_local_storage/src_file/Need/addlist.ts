import { myStorage } from "../app.js";

const id_box = document.querySelector(".id_box") as HTMLInputElement;
const author_box = document.querySelector(".author_box") as HTMLInputElement;
const rating_box = document.querySelector(".rating_box") as HTMLInputElement;
const price_box = document.querySelector(".price_box") as HTMLInputElement;



const send = document.querySelector(".send") as HTMLButtonElement;
send.addEventListener("click", (e: Event) => {
    let updateArray = {
        "id" : id_box.value,
        "author" : author_box.value,
        "rating" : rating_box.value,
        price : price_box.value,
    }
    console.log("it is addlist calling ")
    console.log(id_box.value)
    window.localStorage.setItem("data_1",JSON.stringify(updateArray));
}) 

/*send.addEventListener("click", (e: Event) => {
    e.preventDefault();
    myStorage.push(updateArray)
    window.localStorage.setItem("data",JSON.stringify(myStorage));*/ 