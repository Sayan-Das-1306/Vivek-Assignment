
class Book {
  id: string;
  author: string;
  price: string;
  rating: string;
  constructor(id: string, author: string, price: string, rating: string) {
    this.id = id;
    this.author = author;
    this.rating = rating;
    this.price = price;
  }
  
  deleteallrow() {
    let table_disp = document.querySelector(".table_disp") as HTMLTableElement;
    let rows = table_disp.rows;
    let i = rows.length;
    while (--i) {
      //rows[i].parentNode.removeChild(rows[i]);
      // or
      table_disp.deleteRow(i);
    }
  }
}

let bookarray: Book[] = [];
let obj = new Book("M12", "Sayan", "1200", "4");
bookarray.push(obj);
obj = new Book("M14", "sayan_1", "1400", "5");
bookarray.push(obj);
obj = new Book("M20", "sayan_2", "1600", "2");
bookarray.push(obj);


if(window.localStorage.getItem("data")==null){
  window.localStorage.setItem("data",JSON.stringify(bookarray))
}


  
function display(myStorage : any ) {
  let row = 1; 
  let table_disp = document.querySelector(".table_disp") as HTMLTableElement;
  for (let index = 0; index < myStorage.length; index++) {
  let newrow = table_disp.insertRow(row);

  let cell_1 = newrow.insertCell(0);
  cell_1.innerHTML = myStorage[index].id;
  let cell_2 = newrow.insertCell(1);
  cell_2.innerHTML = myStorage[index].author;
  let cell_3 = newrow.insertCell(2);
  cell_3.innerHTML = myStorage[index].rating;
  let cell_4 = newrow.insertCell(3);
  cell_4.innerHTML = myStorage[index].price;
  let cell_5 = newrow.insertCell(4);
  cell_5.innerHTML = `<td>
                  <button class="delete_btn" value="${myStorage[index].id}" 
                  onclick="listen.deleteonlyrow('${myStorage[index].id}')"
                  >Delete</button>
                  <button class="delete_btn" value="${myStorage[index].id}" 
                  onclick='console.log("id","${myStorage[index].id}")'>Info</button>
                  </td>`;
  }
}




export { bookarray, Book, display};
