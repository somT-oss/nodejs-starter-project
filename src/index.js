const express = require("express");
const userRouter = require('./routes/users');
const blogRouter = require('./routes/blog');

const app = express();
const PORT = 3001

// JSON express middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.url);
    next();
});

app.use(userRouter);
app.use('/blog', blogRouter);
app.listen(PORT, () => console.log(`Running express server on port: ${PORT}`));

