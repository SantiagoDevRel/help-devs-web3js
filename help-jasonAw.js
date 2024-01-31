const { Web3 } = require("web3");
const abi = require("./abiJason.json");

const web3 = new Web3("https://rpc2.sepolia.org");

async function signAndSendTx() {
  const privateKey = "YOUR PK";
  const myAccount = web3.eth.accounts.privateKeyToAccount(privateKey);

  const contractAddress = "0x21B5f741421B568580de67405E128B773418d87e";
  const myContract = new web3.eth.Contract(abi, contractAddress);

  const tx = myContract.methods.createToken("Gold Coin", "GC", "10", "10", "10");
  const data = tx.encodeABI();

  const txObject = {
    from: myAccount.address,
    to: contractAddress,
    data: data,
    gas: (await web3.eth.estimateGas(tx)) * 2n, //updated depending on the network
    maxFeePerGas: (await web3.eth.getBlock()).baseFeePerGas * 2n,
    maxPriorityFeePerGas: 10_000,
  };

  const signatureObject = await myAccount.signTransaction(txObject);

  const sendTx = await web3.eth.sendSignedTransaction(signatureObject.rawTransaction);
  console.log("SENT:", sendTx);
}

signAndSendTx();
