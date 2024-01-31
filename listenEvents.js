const { Web3 } = require("web3");

const web3 = new Web3("wss://...");

const address = "";

// create a new contract object, providing the ABI and address
const contract = new web3.eth.Contract(abi, address);

// using contract.methods to get value
const subscription = contract.events.RandomEvent();

subscription.on("data", console.log); // new value every time the event is emitted
