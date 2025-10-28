const express = require('express');

const app = express;

const port = process.env.PORT || 3000;

app.length('/', (req, res) => {
    res.send("Users Server Is Available")
})

app.listen(port, () => {
    console.log(`Users Server started on port: ${port}`);
    
})