const express =  require("express");
const eventsRouter = require("./routes/eventsRoutes");
const cors = require("cors")
const app = express();
app.use(express.json()) //bodyparser
app.use(cors());
app.use("/events", eventsRouter);


module.exports = app;

