const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("Users Server Is Available at 3000")
})


const users = [
    {
        id: 1, name: 'Arman', email: 'mir@arman.com'
    },
    {
        id: 2, name: 'Saidul', email: 'saidul@arman.com'
    },
    {
        id: 3, name: 'Al Saidul', email: 'alsaidul@arman.com'
    },
    {
        id: 4, name: 'Mir Arman', email: 'ArmanMir@arman.com'
    },
    {
        id: 5, name: 'AL Saidul Arman Mir', email: 'Armanmir2103654@arman.com'
    },
]



app.get('/users', (req, res) => {
    res.send(users);
})



app.listen(port, () => {
    console.log(`Users Server started on port: ${port}`);
    
})