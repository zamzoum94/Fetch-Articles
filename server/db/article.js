const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fetch_article', {
    useNewUrlParser : true, useUnifiedTopology : true
});

let articleSchema = new mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    title : {type : String , required : true},
    description : {type : String, required : true},
    context : {type : String, required : true},
    data : {type : Date, default : new Date()},
    name : {type : String, required : true},
    email : {type : String, required : true},
    age : {type : Number , required : true},
    userUrlImage : {type : String, required : true}
});

module.exports  = mongoose.model('Article', articleSchema);