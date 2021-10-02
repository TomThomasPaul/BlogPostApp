const express = require("express");
const postController = require("../controllers/postController");
const router = express.Router();

console.log("ENTERED POSTS ROUTER");

router.get("/posts",postController.getAllPosts);
router.post("/posts/create",postController.createPost);
router.post("/events",postController.receiveEvent);

module.exports =  router;