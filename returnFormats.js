const { Web3, FMT_BYTES, FMT_NUMBER } = require("web3");

const web3 = new Web3("https://eth.llamarpc.com");

async function main() {
  const blockBigInt = await web3.eth.getBlockNumber();
  console.log("default:", blockBigInt);

  const blockBytesHex = await web3.eth.getBlockNumber({ bytes: FMT_BYTES.HEX });
  console.log("bytes hex:", blockBytesHex);

  const blockBytesArray = await web3.eth.getBlockNumber({ bytes: FMT_BYTES.UINT8ARRAY });
  console.log("bytes array:", blockBytesArray);

  const blockNumber = await web3.eth.getBlockNumber({ number: FMT_NUMBER.NUMBER });
  console.log("number:", blockNumber);

  const blockNumberSTR = await web3.eth.getBlockNumber({ number: FMT_NUMBER.STR });
  console.log("number str:", blockNumberSTR);

  const blockNumberBigInt = await web3.eth.getBlockNumber({ number: FMT_NUMBER.BIGINT });
  console.log("number bigint:", blockNumberBigInt);
}

main();
