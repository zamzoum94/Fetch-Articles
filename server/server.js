const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const Article = require('./db/article');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));


app.get('/', (req, res)=>{

});

app.post('/postarticle', (req, res)=>{
    console.log(req.body);

    let newArticle = new Article({
        _id : new mongoose.Types.ObjectId,
        name : req.body.name,
        email : req.body.email,
        age : req.body.age,
        userUrlImage : req.body.userUrlImage,
        title : req.body.title,
        description : req.body.description,
        context : req.body.context
    });

    newArticle.save()
    .then(doc=>{
        console.log(doc);
    })
    .catch(err =>{
        console.log(err);
    });
});

const PORT = 3000;
app.listen(PORT, ()=>{
    console.log('server is listening ' + PORT);
})