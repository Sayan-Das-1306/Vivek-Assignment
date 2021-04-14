import { Book,bookarray } from "./book";
class Bookmanager {
  constructor() {}
  searchbyID(bookarray: Book[], id_1: string) {
    let index, flag=0;
    for (index = 0; index < bookarray.length; index++) {
      if (bookarray[index].id === id_1) {
        flag++;
        bookarray[index].display(flag);
     }
    }
  }
  searchByauthor(bookarray: Book[], author_1: string){
    let index, flag=0;
    for (index = 0; index < bookarray.length; index++) {
      if (bookarray[index].author === author_1) {
        flag++;
        bookarray[index].display(flag);
     }
    }
  }
  searchByprice(bookarray: Book[], price_1: any){
    let index, flag=0;
    for (index = 0; index < bookarray.length; index++) {
      if (bookarray[index].price === price_1) {
        flag++;
        bookarray[index].display(flag);
     }
    }
  }
  searchByrating(bookarray: Book[], rating_1: any){
    let index, flag=0;
    for (index = 0; index < bookarray.length; index++) {
      if (bookarray[index].rating > rating_1) {
        flag++;
        bookarray[index].display(flag);
     }
    }
  }
  show() {
    return "it is working";
  }
}

let obj_manager = new Bookmanager();

function deleteonlyrow(id_2: string) {
  bookarray[0].deleteallrow();
  let index, flag=0;
  for (index = 0; index < bookarray.length; index++) {
    if (bookarray[index].id === id_2) {
      continue;
    }
    else{
      flag++;
      bookarray[index].display(flag);
    }
  }
}


export { obj_manager,deleteonlyrow};

