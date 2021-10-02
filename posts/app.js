const express =  require("express");
const postRouter = require("./routes/postRouter");
const cors = require("cors")
const app = express();
app.use(express.json()) //bodyparser
app.use(cors());
console.log("HIT POSTS SERVICE")
//app.use("/", postRouter);
app.all('*',postRouter);



module.exports = app;

