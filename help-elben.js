const { Web3 } = require("web3");

main();

async function main() {
  const provider = new Web3.providers.HttpProvider("https://test-rpc-node-http.svmscan.io/");
  const w3 = new Web3(provider);
  console.log("TX BUILDER", w3.eth.transactionBuilder);
  const wallet = { pubKey: "0xefD592B118B920d8b57434b13F6eBE708d6f3B1D", privKey: "0x0a58189a0b404fa63a5ed434da979272e9c91ea56bea661f4868447b14825934" };

  //const wallet = w3.eth.accounts.wallet.add("0x0a58189a0b404fa63a5ed434da979272e9c91ea56bea661f4868447b14825934");
  const txObject = {
    from: wallet.pubKey,
    to: wallet.pubKey,
    value: "0x0",
    data: "0x0",
    gas: 21004,
    maxFeePerGas: 10000000,
    maxPriorityFeePerGas: 10000000,
  };
  try {
    const signedTx = await w3.eth.accounts.signTransaction(txObject, wallet.privKey);
    console.log("SIGNED", signedTx);
    const txReceipt = await w3.eth.sendSignedTransaction(signedTx.rawTransaction);
    //const txReceipt = await w3.eth.sendTransaction(txObject);
    console.log(txReceipt.transactionHash.toString());
  } catch (error) {
    console.error(new Date(), "Transaction failed", error);
  }
}
