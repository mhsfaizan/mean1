const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());
app.use(express.static(path.join(process.cwd(),'public')));



mongoose.connect("mongodb://faizan:faizan%40123@ds149820.mlab.com:49820/mongo-test", { useNewUrlParser: true }, (err, db) => {
    if (err) {
        console.log(err);
        return;
    }
    else {
        console.log("connected");
    }
});



const routes = require('./routers/router');

app.use('/apis', routes);
app.listen(port, () => console.log(`server is listen ${port}`));