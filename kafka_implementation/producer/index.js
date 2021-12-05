const { Kafka } = require("kafkajs");

run().then(() => console.log("Done"), err => console.log(err));

async function run() {
  const kafka = new Kafka({ brokers: ["localhost:9092"] });
 console.log(true)
  const producer = kafka.producer();
  await producer.connect();

  await producer.send({
    topic: "test",
    messages: [
      { value: "tenant_name : mubeeen aftab, address : House no # 50" },
    ],
  });
} 

setInterval(()=> {
    run()
}, 3000)