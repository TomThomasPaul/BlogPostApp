let commentsByPostId = require("../models/commentsModel");
const {randomBytes} = require("crypto")
const axios = require("axios");

exports.getAllCommentsByPostId = (req,res,next)=>{

    let comments= commentsByPostId[req.params.id];
res.status(200).json({

    comments

})
}


exports.createCommentByPostId = async (req,res,next)=>{
    const {comment} = req.body;
    
    const id = randomBytes(4).toString("hex");
   
    commentsByPostId[req.params.id]? commentsByPostId[req.params.id].push({id,comment,status:"pending"}) : (commentsByPostId[req.params.id] = [{id,comment,status:"pending"}])

    await axios.post("http://event-bus-srv:4005/events",{
        type:"CommentCreated",
        data : {
            id,
            comment,
            postId : req.params.id,
            status: "pending"
        }


    })
    
    res.status(201).json({
    
       data : commentsByPostId[req.params.id][commentsByPostId[req.params.id].length-1]
    })
    }
    exports.receiveEvent= async (req,res,next)=>{
        console.log("recievd event from broker : " + req.body.type);
          const {type,data} =req.body;
         if(type=== "CommentModerated"){

             const {id,postId,status,comment} =data;

             let commentsArray = commentsByPostId[postId];

             let commentToBeUpdated = commentsArray.find(el=>el.id ===id);

             commentToBeUpdated.status =status;

            await axios.post("http://event-bus-srv:4005/events", {

            type : "CommentUpdated", 
            data : {

                id,
                postId,
                status,
                comment
            }

            })

         }

        res.status(200).json({
            message: "Received event from Broker",
            eventType: req.body.type
        })
  
      }