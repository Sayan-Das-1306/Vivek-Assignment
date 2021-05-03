import mongoose from "mongoose";

const mySchema = new mongoose.Schema({
    title: {
        type: String,
        required : "Required"
    },
    author : {
        type: String,
        required : "Required"
    },
    price : {
        type : String,
        required : "Required"
    },
    cover : {
        type: String,
        required : "Required"
    }
    // description : {
    //     type: String,
    //     required : "Required"
    // },
})

const myModel = mongoose.model("vivek-data",mySchema) 


export { myModel } 