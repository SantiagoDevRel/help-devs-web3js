const { Web3 } = require("web3");

const web3 = new Web3("https://arbitrum.llamarpc.com");

async function getBlock() {
  const blockNumber = await web3.eth.getBlockNumber();

  console.log("last block in arbitrum mainnet is: ", blockNumber);

  //change provider to arbitrum sepolia testnet
  web3.setProvider("https://public.stackup.sh/api/v1/node/arbitrum-sepolia");
  const blockNumberSepolia = await web3.eth.getBlockNumber();

  console.log("last block in arbitrum sepolia is: ", blockNumberSepolia);
}

getBlock();
