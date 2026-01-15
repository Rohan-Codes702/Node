const mongoose=require('mongoose');

MongoURL=process.env.MongoURL||'mongodb://localhost:27017/Auth_DB';

mongoose.connect(MongoURL).then(() => {
    console.log("Connected to MongoDB");
    
})