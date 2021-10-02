const express =  require("express");
const eventsRouter = require("./routes/eventsRouter");
const postsRouter = require("./routes/postsRouter");
const cors = require("cors")
const app = express();
app.use(express.json()) //bodyparser
app.use(cors());
app.use("/events", eventsRouter);
app.use("/posts", postsRouter);


module.exports = app;

