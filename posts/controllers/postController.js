let posts = require("../models/postModel");
const {randomBytes} = require("crypto")
const axios = require("axios");

exports.getAllPosts = (req,res,next)=>{

res.status(200).json({

    posts
})
}


exports.createPost = async (req,res,next)=>{
    console.log("ENTERED CREATE POST ROUTER");
    const {title} = req.body;
    console.log(req.body);
    
    const id = randomBytes(4).toString("hex");
    posts[id] = {id,title}
    

    await axios.post("http://event-bus-srv:4005/events",{
        type:"PostCreated",
        data : {
            id,
            title
        }


    })

    res.status(201).json({
    
        posts
    })
    }


    exports.receiveEvent=(req,res,next)=>{
          console.log("recievd event from broker : " + req.body.type);
      res.status(200).json({
          message: "Received event from Broker",
          eventType: req.body.type
      })

    }