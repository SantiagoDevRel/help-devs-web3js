const { Web3 } = require("web3");
//import ABI of the contract
const abi = require("./abiJason.json");

//initialize provider with the network where u deployed the contract
const web3 = new Web3("https://rpc2.sepolia.org");

async function getBalance() {
  //initialize contract
  const contractAddress = "0x...";
  const myContract = new web3.eth.Contract(abi, contractAddress);

  //make call
  const myAddress = "0x..."; //the address u want to get the balance from
  const balance = myContract.methods.getBalance(myAddress).call();
  //change the 'getBalance()' for the name of the function you are calling in the contract

  return balance;
}
