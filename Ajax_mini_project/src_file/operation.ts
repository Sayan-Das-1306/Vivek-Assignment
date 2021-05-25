import { obj_manager } from "./book_manager.js";

const operation_app = (
    search: HTMLButtonElement,
    search_value: HTMLInputElement,
    choice: HTMLSelectElement
) =>{
    search.addEventListener("click",(e: Event) => {
        e.preventDefault()
        console.log(search)
        console.log(search_value.value,choice.value)
        console.log(obj_manager.show());
        if(choice.value==="id"){
            obj_manager.searchbyID(search_value.value);
        }
        if(choice.value==="author"){
            obj_manager.searchByauthor(search_value.value);
        }
        if(choice.value==="price"){
            obj_manager.searchByprice(search_value.value);
        }
        if(choice.value==="rating"){
            obj_manager.searchByrating(search_value.value);
        }
    })
}

export {operation_app}

