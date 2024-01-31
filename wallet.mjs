import { Web3 } from "web3";

const web3 = new Web3("https://gnosis.drpc.org");

/*
 * 1st - creating a wallet with `1` random account
 * @param: number of accounts you want to create within the wallet
 */
const account = web3.eth.accounts.wallet.create(1);
console.log(account);

web3.eth.getBlock().then(console.log);
/* ↳
Wallet(1) [
  {
    address: '0x0770B4713B62E0c08C43743bCFcfBAA39Fa703EF',
    privateKey: '0x97b0c07e275a0d8d9983331ca1a7ecb1a4a6f7dcdd7657529fe07446fa4dfe23',
    signTransaction: [Function: signTransaction],
    sign: [Function: sign],
    encrypt: [Function: encrypt]
  },
  _accountProvider: {
    create: [Function: createWithContext],
    privateKeyToAccount: [Function: privateKeyToAccountWithContext],
    decrypt: [Function: decryptWithContext]
  },
  _addressMap: Map(1) { '0x0770b4713b62e0c08c43743bcfcfbaa39fa703ef' => 0 },
  _defaultKeyName: 'web3js_wallet'
]
*/
