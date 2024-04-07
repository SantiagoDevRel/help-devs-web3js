const { Web3 } = require("web3");
const ABI = require("./abimrkalten.json");

async function main() {
  const provider = new Web3("https://polygon-bor-rpc.publicnode.com");

  const token_address = "0xc2132D05D31c914a87C6611C10748AEb04B58e8F";

  const from = "0x.."; //10 USDT and MATIC on this account
  const to = "0xfB6eE09bb37311813e474Ea19a963d6891689179";

  //1dc0bca5325fb16c9a31859e8ab2f3bbab0bda45d7b12b8d2bfc9ec6d95bd131
  const wallet = provider.eth.wallet.add("0x1dc0bca5325fb16c9a31859e8ab2f3bbab0bda45d7b12b8d2bfc9ec6d95bd131");
  let contract = new provider.eth.Contract(ABI, token_address);

  let amount_to_transfer = "5440000"; //This is to transfer the 5.44 USDT from the wallet.

  let call = contract.methods.transfer(to, provider.utils.toHex(amount_to_transfer)).send({ from: wallet[0].address });
  const gas = provider.eth.estimateGas(call);
  console.log(gas);
}

main();
