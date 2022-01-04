const express = require('express');
const userRouter = require('./controllers/users');
const adminRouter = require('./controllers/admin');
const questionRouter = require('./controllers/question');
const answerRouter = require('./controllers/answer');

const app = express();

app.use("/user",userRouter);
app.use("/admin",adminRouter);
app.use("./question",questionRouter);
app.use("/answer",answerRouter);

app.listen(8000);