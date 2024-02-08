const { Web3, FMT_BYTES, FMT_NUMBER } = require("web3");

const web3 = new Web3("https://eth.llamarpc.com");

async function main() {
  //1. when a function return numbers, {number: FMT_NUMBER. } should be used to format the returned number value
  const blockBigInt = await web3.eth.getBlockNumber();
  console.log("default:", blockBigInt);

  const blockNumber = await web3.eth.getBlockNumber({ number: FMT_NUMBER.NUMBER });
  console.log("number:", blockNumber);

  const blockNumberSTR = await web3.eth.getBlockNumber();
  console.log("number str:", blockNumberSTR);

  const blockNumberBigInt = await web3.eth.getBlockNumber({ number: FMT_NUMBER.BIGINT });
  console.log("number bigint:", blockNumberBigInt);

  //2. when a function returns a bytes/hex value, {bytes: FMT_BYTES. } should be used to format the returned hex value

  //3. when a function returns both values (some numbesr and some bytes/hex), you can use both
  //so the hex values in this case will be formated to UINT8ARRAY
  //and the numbers values will be formatted to string
  const getBlock = await web3.eth.getBlock("latest", undefined, { number: FMT_NUMBER.STR, bytes: FMT_BYTES.UINT8ARRAY });
  console.log("GetBlock:", getBlock);
}

main();
