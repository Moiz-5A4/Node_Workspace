const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config({path:'./config.env'});
const DB = process.env.DATABASE
mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => {
    console.log("DB connection success");

})

const app = require('./App');
const port = process.env.PORT;

app.listen(port,()=>{
    console.log(`App running on port ${port}`);
    
})
