
async function sendTomain(){
    let uri = "http://localhost:5000/book/fetch/";
    const res = await fetch(uri,
        {   method : "GET"
            //mode: "no-cors"
        })  
    console.log(res)
    //let book_array = await res.json();
    let book_array = await res.json();
    createTable(book_array)
}

const createTable = (book_array: any)=>{
    for (let index = 0; index < book_array.length; index++) {
        const table_disp = document.querySelector(".table_disp") as HTMLTableElement;
        let newrow = table_disp.insertRow();

        let cell_1 = newrow.insertCell(0);
        cell_1.innerHTML = book_array[index].myid;
        let cell_2 = newrow.insertCell(1);
        cell_2.innerHTML = book_array[index].author;
        let cell_3 = newrow.insertCell(2);
        cell_3.innerHTML = book_array[index].price;
        let cell_4 = newrow.insertCell(3);
        cell_4.innerHTML = ` 
            <button class="books_list" onclick="listen.deleteOnlyRow('${book_array[index]._id}')">Delete</button> |
            <a href="./details.html?id=${book_array[index]._id}">
            Details</a>
        `
    }
}

const deleteallrow= () => {
    let table_disp = document.querySelector(".table_disp") as HTMLTableElement;
    let rows = table_disp.rows;
    let i = rows.length;
    while (--i) {
      //rows[i].parentNode.removeChild(rows[i]);
      // or
      table_disp.deleteRow(i);
    }
  }


export { sendTomain,createTable,deleteallrow };