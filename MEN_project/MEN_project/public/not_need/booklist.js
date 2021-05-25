function sendTomain() {
    let req_1 = new XMLHttpRequest();
    req_1.open("GET", "./database.json", true);
    req_1.send();
    let move = "";
    req_1.onreadystatechange = function () {
        if (req_1.readyState == 4) {
            if (req_1.status == 200) {
                let object_book = JSON.parse(req_1.responseText);
                let book_array = object_book.Book;
                for (let index = 0; index < book_array.length; index++) {
                    const table_disp = document.querySelector(".table_disp");
                    let newrow = table_disp.insertRow();
                    let cell_1 = newrow.insertCell(0);
                    cell_1.innerHTML = book_array[index].id;
                    let cell_2 = newrow.insertCell(1);
                    cell_2.innerHTML = book_array[index].author;
                    let cell_3 = newrow.insertCell(2);
                    cell_3.innerHTML = book_array[index].price;
                }
            }
            else {
                console.log(req_1.status);
            }
        }
    };
}
export { sendTomain };
