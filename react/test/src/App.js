import { Web3 } from "web3";
import ABI from "./ABI.json";

function App() {
  const contract_address = "0xd3e7B4BF6FB03bdECbe5Db0b348285A22bF33Bf6";

  async function main() {
    //CONNECT METAMASK
    const web3 = new Web3(window.ethereum);
    //await window.ethereum.send("eth_requestAccounts");
    const accounts = await web3.eth.requestAccounts();
    console.log("account conneted:", accounts[0]);

    //INITIALIZE CONTRACT
  }
  //donate(){}

  //withdraw(){}

  return (
    <div className="App">
      <button onClick={main}>Connect</button>
      <button onClick={main}>Donate</button>
      <button onClick={main}>Withdraw</button>
    </div>
  );
}

export default App;
