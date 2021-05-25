
const submit_btn = document.querySelector(".submit_btn") as HTMLButtonElement;



/*submit_btn.addEventListener("click", (e:Event) => {
    console.log("id_val: ",id_val.value);
    e.preventDefault();
    addDetails(); 
})*/

const addDetails = async () => {
    const id_val = document.querySelector(".id_val") as HTMLInputElement;
    const author_val = document.querySelector(".author_val") as HTMLInputElement;
    const price_val = document.querySelector(".price_val") as HTMLInputElement;

    const data = {
        id : id_val.value,
        author : author_val.value,
        price : price_val.value
    }
    await fetch("http://localhost:3000/Book", 
    {   method : "POST",
        body : JSON.stringify(data) ,
        headers : {"content-type" : "application/json"}
    });
    //window.location.replace("default.html")
}

export { addDetails }