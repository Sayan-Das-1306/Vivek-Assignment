
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
  display(row: number) {
    let table_disp = document.querySelector(".table_disp") as HTMLTableElement;
    let newrow = table_disp.insertRow(row);

    let cell_1 = newrow.insertCell(0);
    cell_1.innerHTML = this.id;
    let cell_2 = newrow.insertCell(1);
    cell_2.innerHTML = this.author;
    let cell_3 = newrow.insertCell(2);
    cell_3.innerHTML = this.price;
    let cell_4 = newrow.insertCell(3);
    cell_4.innerHTML = this.rating;
    let cell_5 = newrow.insertCell(4);
    cell_5.innerHTML = `<td>
                    <button class="delete_btn" value="${this.id}" 
                    onclick="listen.deleteonlyrow('${this.id}')"
                    >Delete</button>
                    <button class="delete_btn" value="${this.id}" 
                    onclick='console.log("id","${this.id}")'>Info</button>
                    </td>`;
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




export { bookarray, Book,};
