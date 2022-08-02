const express = require("express");

const app = express();
const PORT = 3001

// JSON express middleware
app.use(express.json());

app.listen(PORT, () => console.log(`Running express server on port: ${PORT}`));

const userInfo = [
    {
        name: 'somto',
        age: 19
    },
    {
        name: 'chibueze',
        age: 21
    }
]

// GET request
app.get('/users', (request, response) => {
    response.send(userInfo);
})

// POST request
app.post('/add-user', (request, response) => {
    console.log(request.body);
    userInfo.push(request.body);
    response.send(201);
});

