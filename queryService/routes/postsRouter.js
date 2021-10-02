const express = require("express");
const postsController = require("../controllers/postsController");
const router = express.Router();


router.get("/",postsController.getAllPosts);


module.exports =  router;