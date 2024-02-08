const { Web3PluginBase, Web3 } = require("web3");

class Swtr extends Web3PluginBase {
  pluginNamespace = "swisstronik";
  web3;

  constructor() {
    super();
    this.web3 = new Web3("https://ethereum-sepolia.publicnode.com"); //swtr RPC
  }

  async getStorage(address, slot) {
    const value = this.web3.eth.getStorageAt(address, slot);
    return value;
  }

  async estimateGas(txObject) {
    const estimatedGas = this.web3.eth.estimateGas(txObject);
    return estimatedGas;
  }

  async encryptDataAndSendTx(txObject) {
    //1. encrypt data field with swtr library
    //const encryptedData = encryptDataField()

    //add encrypted data to txObject
    //(just becareful with the values required by swtr like gas, gaslimit, maxfee, etc...)
    /* const txObject = {
        from: account.address,
        to: '0x5875da5854c2adadbc1a7a448b5b2a09b26baff8',
        value: 1,
        maxFeePerGas: (await web3.eth.getBlock()).baseFeePerGas * 2n,
        maxPriorityFeePerGas: 100000, //high
        gasLimit: 2000000,
        nonce: await web3.eth.getTransactionCount(account.address), //optional - get the current nonce of the account 
      }; */
    //overwrite the data field with the encrypted data
    txObject.data = encryptedData;

    //sign tx
    const signedTransaction = await web3.eth.accounts.signTransaction(rawTransaction, account.privateKey);

    //send tx
    const txReceipt = await web3.eth.sendSignedTransaction(signedTransaction.rawTransaction);
  }

  async makeCall(txObject) {
    const returnedValue = await this.web3.eth.call(txObject);
    //decrypt returned value
    //return finalResult
  }

  async otherRPCMethods() {}
}

module.exports = Swtr;
