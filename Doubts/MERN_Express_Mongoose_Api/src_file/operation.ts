import { myModel } from "./data_model.js";


//using id part operation
const getByid = (req:any,res:any) => {
    console.log("inside getbyid func")
    console.log(req.params.id)
    const id: any = req.params.id
    myModel.findById(id)
    .then(value =>{
        res.send(value)
    })
}

const putByid = (req: any,res: any) => {
    const mybook = new myModel({
        _id:req.params.id,
        title: req.body.title,
        author : req.body.author,
        price : req.body.price,
        rating : req.body.rating,
        description : req.body.description
    })
    console.log(mybook)
    myModel.updateOne({_id  : req.params.id},mybook)
    .then(() =>{
        //res.status(201).res.write("your Data is Updated")
        res.send("updation is done")
        //res.send(mybook)
    })
    .catch((error: Error) => console.log(error))
}

const delByid = async (req: any,res:any ) => {
    //myModel.deleteOne({_id : req.params.id})
    try{
        await myModel.deleteOne({_id : req.params.id})
        //myModel.findByIdAndDelete(req.params.id)
        //res.send("Deleted Succesfully")
    }
    catch(err : any){
        console.log(err.message)
    }
}

//using different search part

const getBymytext = async (req:any ,res:any,search:any) => {
    try{
        const mydata = await myModel.find({$or:[{"author" : search},{"title" : search}]})
        res.send(mydata)
    }
    catch(error :any){
        console.log(error.message);
    }
}

const getByauthor = async (req:any, res:any, search: any ) => {
    try{
        console.log("this is author search")
        const mydata = await myModel.find({"author" : search})
        res.send(mydata)
    }
    catch(error :any){
        console.log(error.message);
    }
}

const getbyPricerange = async (req:any, res:any, min: any , max: any ) => {
    try{
        const mydata = await myModel.find({$and : [{"price" : {$gte:min}},
            {"price" : {$lte:max}}]})
        res.send(mydata)
    }
    catch(error :any){
        console.log(error.message);
    }
}

//adding data

const addBook= (req: any,res: any) => {
    let result = new myModel(req.body)
    result.save()
    //res.send("Succesfully added new Book")
}
    

export {getByid,putByid,delByid, getByauthor,getbyPricerange,getBymytext,addBook}