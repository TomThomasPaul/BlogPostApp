const express =  require("express");
const commentsRouter = require("./routes/commentsRouter");
const cors = require("cors")
const app = express();
app.use(express.json()) //bodyparser
app.use(cors());

app.use("/", commentsRouter);


module.exports = app;