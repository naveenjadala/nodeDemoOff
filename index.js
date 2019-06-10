const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

//connect to db
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true })
.then(() => console.log("db connected"));

//db error connection
mongoose.connection.on( "error", err => {
    console.log(`DB connection error: ${ err.message }`)
});

app.use(bodyParser.json());

//create a server
const port = process.env.PORT || 8080;

app.listen( port, () => console.log(`port number is:${port}`));

// import router

const studentRouter = require('./router/studentDetails.router');
const authRouter = require('./router/authRouter');
const userRouter = require('./router/userRouter');
const teamRouter = require('./router/teamRouter');

app.use("/", studentRouter);
app.use("/auth", authRouter);
app.use("/userdetail", userRouter);
app.use("/team", teamRouter);

