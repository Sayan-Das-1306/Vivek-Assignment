var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function sendTomain() {
    return __awaiter(this, void 0, void 0, function* () {
        let uri = "http://localhost:3000/Book";
        const res = yield fetch(uri);
        let book_array = yield res.json();
        createTable(book_array);
    });
}
const createTable = (book_array) => {
    for (let index = 0; index < book_array.length; index++) {
        const table_disp = document.querySelector(".table_disp");
        let newrow = table_disp.insertRow();
        let cell_1 = newrow.insertCell(0);
        cell_1.innerHTML = book_array[index].id;
        let cell_2 = newrow.insertCell(1);
        cell_2.innerHTML = book_array[index].author;
        let cell_3 = newrow.insertCell(2);
        cell_3.innerHTML = book_array[index].price;
        let cell_4 = newrow.insertCell(3);
        cell_4.innerHTML = ` 
            <button class="books_list" onclick="listen.deleteOnlyRow('${book_array[index].id}')">Delete</button> |
            <a href="./details.html?id=${book_array[index].id}">
            Details</a>
        `;
    }
};
const deleteallrow = () => {
    let table_disp = document.querySelector(".table_disp");
    let rows = table_disp.rows;
    let i = rows.length;
    while (--i) {
        //rows[i].parentNode.removeChild(rows[i]);
        // or
        table_disp.deleteRow(i);
    }
};
export { sendTomain, createTable, deleteallrow };
