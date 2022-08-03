const express = require("express");

const app = express();
const PORT = 3001

// JSON express middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.url);
    next();
});

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
app.get('/users', (request, response, next) => {console.log("Before Handling Requests"), next()}, (request, response) => {
    response.send(userInfo);
});

app.get('/user/:name', (request, response) => {
    const { name } = request.params;
    const user = userInfo.find(elements => elements.name === name);
    response.send(user);
});

// POST request
app.post('/add-user', (request, response) => {
    console.log(request.body);
    userInfo.push(request.body);
    response.send(201);
});

