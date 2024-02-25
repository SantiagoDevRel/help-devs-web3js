const { Web3 } = require("web3");
const abi = require("./abiBoredApe.json");

const web3 = new Web3("https://eth.llamarpc.com");

async function main() {
  const contractAddress = "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D";
  const contract = new web3.eth.Contract(abi, contractAddress);

  //is returning logs which matches ANY of those 2 (topic hash or address)
  const filter = {
    topics: "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef", //will return all events emitted with this topic hash
    address: "0xBA1BA61Ff159422bCb07F78017186624e94E6936", //will return all the events emitted including this wallet
    fromBlock: "19305000", //from this block
    toBlock: "latest", //to this block
  };
  const logs = await contract.getPastEvents("Transfer", filter);

  console.log("logs", logs);
}

main();
