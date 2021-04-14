import { bookarray } from "./book.js";

import "../public/Css/booklist.css";

for (let index = 0; index < bookarray.length; index++) {
    bookarray[index].display(index+1);   
}



