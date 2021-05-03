//import { makeMongo } from "./myConnect";
import { myModel } from "./data_model";

console.log(myModel)
const getallBooks = async () =>{ 
    try{
        //await makeMongo()
    let books = await myModel.find()
    console.log(books)
    }
    catch(e)
    {
        console.log(e.message)
    }
}