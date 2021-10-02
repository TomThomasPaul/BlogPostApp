const axios = require("axios");

exports.getAllEvents = async (req,res,next)=>{

const {type,data} = req.body;
console.log(req.body);

        if(type=="CommentCreated"){


            const status = data.comment.includes("orange")? "rejected" : "approved" ;

            await axios.post("http://event-bus-srv:4005/events",{

                type: "CommentModerated",
                data : {

                    id: data.id,
                    comment : data.comment,
                    postId :  data.postId,
                    status

                }

            })
             console.log(status);

        }
    res.status(200).json({

        message : "Comment Moderated and event sent to Event Broker"
    })
}


