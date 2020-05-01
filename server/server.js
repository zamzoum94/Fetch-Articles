const express = require('experss');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));


app.get('/', (req, res)=>{

});

app.post('/postarticle', (req, res)=>{

});

const PORT = 3000;
app.listen(PORT, ()=>{
    console.log('server is listening ' + PORT);
})