import { Book, display,bookarray} from "./book.js";

class Bookmanager {
  constructor() {}
  searchbyID(bookarray: any, id_1: string) {
    let index, flag=0;
    for (index = 0; index < bookarray.length; index++) {
      if (bookarray[index].id === id_1) {
        flag++;
        let singleArray = []
        singleArray.push(bookarray[index]);
        display(singleArray);
     }
    }
  }
  searchByauthor(bookarray: any, author_1: string){
    let index, flag=0;
    for (index = 0; index < bookarray.length; index++) {
      if (bookarray[index].author === author_1) {
        flag++;
        display(bookarray);
     }
    }
  }
  searchByprice(bookarray: any, price_1: any){
    let index, flag=0;
    for (index = 0; index < bookarray.length; index++) {
      if (bookarray[index].price === price_1) {
        flag++;
        let singleArray = []
        singleArray.push(bookarray[index]);
        display(singleArray);
     }
    }
  }
  searchByrating(bookarray: any, rating_1: any){
    let index, flag=0;
    for (index = 0; index < bookarray.length; index++) {
      if (bookarray[index].rating > rating_1) {
        flag++;
        let singleArray = []
        singleArray.push(bookarray[index]);
        display(singleArray);
     }
    }
  }
  show() {
    return "it is working";
  }
}

let obj_manager = new Bookmanager();

export { obj_manager };

