const { Web3 } = require("web3");

const web3 = new Web3("https://eth.llamarpc.com");

web3.setProvider("https://binance.llamarpc.com");

web3.currentProvider.httpProviderOptions = {
  cache: "force-cache",
  headers: {
    "Content-Type": "application/json",
  },
  method: "GET",
};
console.log("PROVIDER", web3.currentProvider);
