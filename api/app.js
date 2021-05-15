require('dotenv').config()
const express   = require('express');
const app       = express();
const cors      = require('cors');
const connectDB = require('./config/db');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

connectDB();

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server runing on port: ${PORT}`));