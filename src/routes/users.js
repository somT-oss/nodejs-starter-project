const { Router } = require('express');


const router = Router();

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
router.get('/users', (request, response, next) => {console.log("Before Handling Requests"), next()}, (request, response) => {
    request.session.isAuth = true;
    response.send(userInfo);
    console.log(request.session);
    console.log(request.session.id);
});

router.get('/user/:name', (request, response) => {
    const { name } = request.params;
    const user = userInfo.find(elements => elements.name === name);
    response.send(user);
});

// POST request
router.post('/add-user', (request, response) => {
    console.log(request.body);
    userInfo.push(request.body);
    response.send(201);
});

module.exports = router;