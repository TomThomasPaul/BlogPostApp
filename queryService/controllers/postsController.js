let postsComments = require("../models/postCommentModel");


exports.getAllPosts = (req,res,next)=>{
   res.status(200).json(postsComments);
   
}