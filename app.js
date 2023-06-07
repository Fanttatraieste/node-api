const express = require('express');
const app = express();
const mongoose = require('mongoose');
const apiController = require('./controllers/apiController');

const setupController = require('./controllers/setupController');

const port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');



const url = 'mongodb+srv://vladuta61:lalele@nodetodo.qiyopdp.mongodb.net/?retryWrites=true&w=majority';
//mongoose.connect(config.getDbConnectionString());

async function connect() {
    try {
        await mongoose.connect(url);
        console.log("conectat");
    }
    catch(e) {
        console.log(e);
    }
}

connect();
setupController(app);
apiController(app);

app.listen(port);