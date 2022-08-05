const { Router } = require('express');
const router = Router();

router.post('/login', (request, response) => {
    const { username, password } = request.body;
    if ( username && password ) {
        if (request.session.user) {
            response.send(
                request.session.user
            );
        } else {
            request.session.user = {
                username,
            };
        }
    } else {
        response.send(401);
    }
});

module.exports = router;