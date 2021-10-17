import nats, { Subscription,Message } from "node-nats-streaming";
import { randomBytes } from "crypto";
import { Console } from "console";



const stan = nats.connect('ticketing', randomBytes(4).toString('hex') , {url : 'http:localhost:4222'}); //make sure 123 is not used in publisher.ts..got error on stan id 
console.log("before connect")
stan.on('connect', ()=>{

    console.log("Listener connected to NATS STREAMING SERVER")

    stan.on('close', ()=>{


        console.log("Shutting listener");
        process.exit();
    })

    const options = stan.subscriptionOptions().setManualAckMode(true)
    const  subscriber = stan.subscribe('ticket:created', 'order-service-queue-group',options);
    subscriber.on('message', (message : Message)=>{

    

    const recievedData = message.getData();

    if(typeof recievedData == 'string'){
        console.log(`Received event #${message.getSequence()} with data: ${recievedData}`);
    }
    
    message.ack();

   })

    
})


stan.on('SIGINT',()=>{
    console.log("interrupt signal");
    stan.close();

})
stan.on('SIGTERM',()=>{ //not supported on windows
    
    console.log("terminate signal")
    stan.close();

})


