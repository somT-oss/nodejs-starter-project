const express = require("express");

const app = express();
const PORT = 3001

app.listen(PORT, () => console.log(`Running express server on port: ${PORT}`));


app.get('/groceries', (request, response) => {
    response.send([
        {
            name: 'somto',
            age: 19
        },
        {
            name: 'chibueze',
            age: 21
        }
    ]);
})

