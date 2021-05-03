import mongoose from "mongoose";
import env from "dotenv";
env.config();
console.log("process.env.mongoUser: ", process.env.mongoUser);
//console.log("process.env.mongoUser: ",process.env.mongoUser)
//const uri = `mongodb+srv://${process.env.mongoUser}:${process.env.mongoPassword}@${process.env.mongoServer}/cluster0?retryWrites=true&w=majority`;
const makeMongo = () => {
    return new Promise((resolve, reject) => {
        //const uri = "mongodb+srv://Sayan-Server:sayan123@cluster0.byb1t.mongodb.net/Node-Server?retryWrites=true&w=majority";
        const uri = `mongodb+srv://${process.env.mongoUser}:${process.env.mongoPassword}@${process.env.mongoServer}/Node-Server?retryWrites=true&w=majority`;
        //console.log(uri)
        mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true })
            .then((result) => {
            console.log("Successfully Connected ");
            //console.log(result)
        })
            .catch((error) => console.log(error.message));
    });
};
export { makeMongo };
