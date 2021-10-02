const express =  require("express");
const eventsRouter = require("./routes/eventsRouter");
const app = express();
app.use(express.json()) //bodyparser

app.use("/events", eventsRouter);



module.exports = app;