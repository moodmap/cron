const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 3000;

fs.readFile('student-2.json', (err,data)=> {
    if (err) throw err;
    let value = JSON.parse(data);
    console.log(value);
});

app.get('/', (req,res) => {
    res.send({hi:'there'});
});

app.listen(PORT);