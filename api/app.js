const express   = require('express');
const app       = express();
const cors      = require('cors');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const PORT = 5000;
app.listen(PORT, () => console.log(`Server runing on port: ${PORT}`));