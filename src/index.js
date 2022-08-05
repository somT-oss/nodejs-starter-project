const express = require("express");
const session = require("express-session");
const userRouter = require('./routes/users');
const blogRouter = require('./routes/blog');
const authRouter = require('./routes/auth');

const app = express();
const PORT = 3001

// JSON express middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.url);
    next();
});

app.use(session({
    secret: 'JKSDNKJSNDKSNDSLMDSLDKMSLDKMSDL',
    resave: false,
    saveUninitialized: false,
}));
app.use(userRouter);
app.use('/blog', blogRouter);
app.use('/auth', authRouter);
app.listen(PORT, () => console.log(`Running express server on port: ${PORT}`));

