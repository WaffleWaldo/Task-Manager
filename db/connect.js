const mongoose = require("mongoose")

const connectDB = (url) =>{
    console.log("\n[connected to the ATLAS DB, welcome to the cloud]\n")
    mongoose.connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
}

module.exports = connectDB