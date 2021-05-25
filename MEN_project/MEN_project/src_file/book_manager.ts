import { createTable } from "./booklistcopy.js";
import { deleteallrow } from "./booklistcopy.js";


class Bookmanager {
    constructor() {}
    async searchbyID(id_1: string) {
        console.log("inside searchbyId")
        let uri = ("http://localhost:5000/book/" + `${id_1}`);
        const res = await fetch(uri);
        let book_array = await res.json();
        let mybook = []
        mybook.push(book_array)
        // console.log(mybook)
        // console.log(mybook.length)
        deleteallrow()
        createTable(mybook)
    }
    
      async searchByauthor(author_1: string){
        console.log("inside searchbyauthor")
        let uri = ("http://localhost:5000/book/fetch/" + `?author=${author_1}`);
        const res = await fetch(uri);
        let book_array = await res.json();
        //let mybook = []
        //mybook.push(book_array)
        // console.log(mybook)
        // console.log(mybook.length)
        deleteallrow()
        createTable(book_array)
       }
    async searchByprice(price_1: any){
      console.log("inside searchbyauthor")
        let uri = ("http://localhost:5000/Book/" + `?min=${price_1}&max=${price_1+2000}`);
        const res = await fetch(uri);
        let book_array = await res.json();
        //let mybook = []
        //mybook.push(book_array)
        // console.log(mybook)
        // console.log(mybook.length)
        deleteallrow()
        createTable(book_array)
    }
    /*async searchByrating(rating_1: any){
      let uri = ("http://localhost:3000/Book/" + `?rating=${rating_1}`);
        const res = await fetch(uri);
        let book_array = await res.json();
        //let mybook = []
        //mybook.push(book_array)
        // console.log(mybook)
        // console.log(mybook.length)
        deleteallrow()
        createTable(book_array)
    }*/
    show() {
      return "it is working";
    }
}
  
let obj_manager = new Bookmanager();



export {obj_manager}