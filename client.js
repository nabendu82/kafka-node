const { Kafka } = require("kafkajs")

exports.kafka = new Kafka({
    clientId: "my-kafka",
    brokers: ["192.168.29.68:9092"]
})