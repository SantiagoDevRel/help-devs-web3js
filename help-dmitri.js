const { Web3 } = require("web3");

const web3 = new Web3("https://eth-sepolia.public.blastapi.io");

async function main() {
  const walletAddress = "0xEA9eEca67682Cd9c6Ce3DdD1681049D7A897289F";
  const a = await web3.eth.getTransactionCount(walletAddress);
  console.log(a);
  console.log(await web3.eth.getBlock(1));
}

main();
