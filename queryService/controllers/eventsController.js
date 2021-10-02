let postsComments = require("../models/postCommentModel");


exports.handleEvent = (type,data)=>{

    if(type === "PostCreated"){

        postsComments[data.id] = {

            id : data.id,
            title : data.title,
            comments : []
        }
    }

    if(type==="CommentCreated"){
        postsComments[data.postId].comments.push({id : data.id,comment : data.comment, status: data.status})
           
    }

    if(type==="CommentUpdated"){

        const {id,comment,postId,status} = data;

        let postCommentToUpdate = postsComments[postId];

        let commentToUpdate = postCommentToUpdate.comments.find(el=>el.id === id);

        commentToUpdate.status =status;
        commentToUpdate.comment = comment;



    }



}

exports.getAllEvents =  (req,res,next)=>{
    
    const {type,data} = req.body;
    
    this.handleEvent(type,data); //this keyword is required as handleEvent is used in exports

    console.log(postsComments);

    res.status(200).json({

        message : "Created/updated master postcomment data structure"
    })

}
