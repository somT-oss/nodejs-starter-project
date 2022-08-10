const { Router } = require('express');
const User = require('../database/schemas/user');
const router = Router();

router.post('/register', async (request, response) => {
    const { username, email, password } = request.body;
    const userDB = await User.findOne({ $or: [{username}, {email}] });

    if ( userDB ){
        return response.status(400).send('User already exists');
    }

    const newUser = await User.create({ username, password, email });
    return response.status(201).send({ username, email });
});


router.post('/login', (request, response) => {
    console.log(request.session.id);
    const { username, password } = request.body;
    if ( username && password ) {
        if ( request.session.authenticated ) {
            return response.status(200).send(request.session);
        } else {
            if ( password == "1234" ) {
                request.session.authenticated == true;
                request.session.user = {
                    username: username,
                    password: password
                }

                return response.status(201).send(request.session);
            } else {
                return response.status(403).send("Bad Credentials")
            }
        }
    }
});



module.exports = router;