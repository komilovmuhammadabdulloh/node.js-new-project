const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose')


const PORT = 3000;
const app = express();
app.use(cors());
app.use(bodyParser.json());



mongoose.connect(config.mongoUri,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>{
        console.log('Bazaga Ulandi');
    })
    .catch((err)=>{
        console.log('Xatolik', err);
    });

mongoose.set('useFindAndModify', false);
app.use(cookieParser())

app.use('/quota', require('./routes/quota'))
app.use('/driver', require('./routes/Driver'))
app.use('/admin', require('./routes/admin'))


app.listen(PORT,()=> {
    console.log('Server running ' + PORT);
})
