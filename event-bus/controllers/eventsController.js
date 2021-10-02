let events = require("../models/eventBusHistory");
const axios =require("axios");

exports.getAllEvents = async (req,res,next)=>{

    const event = req.body; //get the event message emitted by respective microservice
    console.log(event);
    events.push(event);
    await axios.post("http://posts-clusterip-srv:4000/events", event).catch(err=>{console.log(err.message)});
    await axios.post("http://comments-srv:4001/events", event).catch(err=>{console.log(err.message)});
    await axios.post("http://queryservice-srv:4002/events", event).catch(err=>{console.log(err.message)});
    await axios.post("http://moderation-srv:4003/events", event).catch(err=>{console.log(err.message)});
 
    res.status(200).json({

        message: "Event received by Event broker and emiitted to all microservices"
    })


}


exports.returnEventHistory = (req,res,next)=>{

    res.status(200).json({

        events
    })
}


