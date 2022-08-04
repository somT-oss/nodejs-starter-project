const { Router } = require('express');
const router = Router();

blogArray = [
    {
        id: 0,
        name: 'Somto',
        title: 'Blog Post One',
        description: 'New blog',
        date: '20-20-2022'
    },
    {
        id: 1,
        name: 'David',
        title: 'Blog Post Two',
        description: 'New blog 2',
        date: '20-21-2022'
    },
    {
        id: 2,
        name: 'Daniel',
        title: 'Blog Post Three',
        description: 'New blog 3',
        date: '20-22-2022'
    }
]

router.get('/all', (request, response) => {
    response.cookie();
    response.send(blogArray);
});

router.get('/get-blog/:name', (request, response) => {
    const { name } = request.params;
    const blog = blogArray.find(elements => elements.name == name);
    response.send(blog);
});

router.get('/get-blog/:title', (request, response) => {
    const { title } = request.params;
    const blog = blogArray.find(elements => elements.title === title);
    response.send(blog);
});

router.get('/get-params', (request, response) => {
    console.log(request.query);
});

module.exports = router;