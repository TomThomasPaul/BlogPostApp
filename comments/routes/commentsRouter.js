const express = require("express");
const commentsController = require("../controllers/commentsController");
const router = express.Router();


router.get("/posts/:id/comments",commentsController.getAllCommentsByPostId);
router.post("/posts/:id/comments",commentsController.createCommentByPostId);
router.post("/events",commentsController.receiveEvent);

module.exports =  router;