const id_1=new URLSearchParams(window.location.search).get("id");

const show_1 = document.querySelector(".show_1") as HTMLDivElement;

const sendDetails = async () => {
    let uri = ("http://localhost:3000/book/" + id_1);
    const res = await fetch(uri);
    let single_book = await res.json();

    console.log("it is from sendDetails");
    let template=`
        <h2>Books myId  : ${single_book.myid}</h2>
        <h2>Author : ${single_book.author}</h2>
        <h2>Price  : ${single_book.price}</h2> 
    `
    show_1.innerHTML=template;
}

window.addEventListener("DOMContentLoaded" , () => sendDetails())
