//DEPENDENCIES
const express = require('express');

//VARS
const app = express();
app.get('/', (req, res) => res.send('API Running'));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on Port ${PORT}`));