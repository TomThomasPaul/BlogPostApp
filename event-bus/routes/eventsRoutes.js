const express = require("express");
const eventsController = require("../controllers/eventsController");
const router = express.Router();


router.post("/",eventsController.getAllEvents);
router.get("/",eventsController.returnEventHistory);


module.exports =  router;