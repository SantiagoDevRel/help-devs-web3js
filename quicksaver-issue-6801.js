const { Web3 } = require("web3");

const web3 = new Web3("https://polygon-mumbai-pokt.nodies.app");

async function main() {
  const wallet = web3.eth.accounts.wallet.add("0xca0f203073b871007e1b050d2d318e073816078d7c1a04d73baee3cad3127cdf");

  //create tx object
  const tx = {
    from: wallet[0].address,
    to: "0xfB6eE09bb37311813e474Ea19a963d6891689179",
    value: 1,
    input: "0x00",
  };

  //estimate gas & gasPrice
  const gasEstimated = await web3.eth.estimateGas(tx);
  const gasPrice = await web3.eth.getGasPrice();

  //update tx object
  tx.gas = gasEstimated;
  tx.gasPrice = gasPrice;

  console.log(tx);
}

main();
