import nats from "node-nats-streaming";

const stan = nats.connect('ticketing', 'abc' , {url : 'http:localhost:4222'});

stan.on('connect', ()=>{

    console.log("Publisher connected to NATS STREAMING SERVER")
    const data = JSON.stringify({
        id :156,
        title : 'Metallica Concert',
        price :5000
    
    })
    stan.publish('ticket:created', data, ()=>{
    
        console.log("Event published to NATS streaming server");
    })
})

//publish an event

