import mongoose from "mongoose";
const mySchema = new mongoose.Schema({
    myid: {
        type: String,
        required: "Required"
    },
    author: {
        type: String,
        required: "Required"
    },
    price: {
        type: Number,
        required: "Required"
    }
});
const myModel = mongoose.model("myoperation-datas", mySchema);
export { myModel };
