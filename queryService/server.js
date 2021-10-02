const app = require("./app");
const axios = require("axios");
let postsComments = require("./models/postCommentModel");
const eventsController = require("./controllers/eventsController");


app.listen(4002,async ()=>{

    console.log("Query service is up and running")
    const res = await axios.get("http://event-bus-srv:4005/events");
    
    res.data.events.forEach(event=>{

        console.log("Processing event: " + event.type);
        eventsController.handleEvent(event.type, event.data);
    })

})