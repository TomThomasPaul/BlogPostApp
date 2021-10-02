const express = require("express");
const eventsController = require("../controllers/eventsController");
const router = express.Router();
const {handleEvent} =require("../controllers/eventsController");


router.post("/",eventsController.getAllEvents);


module.exports =  router;