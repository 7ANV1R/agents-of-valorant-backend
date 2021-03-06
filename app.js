const express = require('express');
const cors = require('cors');
const { urlencoded } = require('express');
require('dotenv').config();


const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));


const routes = require('./server/route/serverRouter.js');
app.use('/', routes);


app.listen(port, () => console.log(`listening on port ${port}`));