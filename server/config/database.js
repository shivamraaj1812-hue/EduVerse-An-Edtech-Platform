const mongoose = require('mongoose')
require('dotenv').config()
const MONGODB_URL= "mongodb+srv://sumbamraj3:0oCXIpNF5QkuaRrV@sumbamraj3.eynpz2s.mongodb.net/StudyVerseDB"

exports.connectDB = () => {
    mongoose.connect(MONGODB_URL, {
        useUnifiedTopology:true,
        useNewUrlParser: true
    })
    .then(()=>{
        console.log("DB connection successfull!")
    })
    .catch( (error) => {
        console.log("DB Connection Failed");
        console.error(error);
        process.exit(1);
    } )
}