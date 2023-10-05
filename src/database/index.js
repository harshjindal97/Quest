import mongoose from "mongoose";

const configOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
const connectToDatabase =async () => {
    const connectioUrl = "mongodb+srv://hasrh9466438:harshjindall@cluster0.jkgo8ij.mongodb.net/"
    mongoose.connect(connectioUrl , configOptions).then(()=>{
        console.log("connected successfully");
    }).catch(err => console.log(err));
}

export default connectToDatabase;