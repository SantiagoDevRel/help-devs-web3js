import { Web3 } from "web3";
import ABI from "./ABI.json";

function App() {
  const contract_address = "0xd3e7B4BF6FB03bdECbe5Db0b348285A22bF33Bf6";

  async function main() {
    const web3 = new Web3(window.ethereum);

    const contract = new web3.eth.Contract(ABI, contract_address);

    const result = await contract.methods.touristRewardOnPostID("0x1a620c351c07763f430897AeaA2883E37cA0aaCD", "0x26eecb00ddef76d58362552f4fd2e782ae49d1e064ccd5b06bd70dcd8039ec35").call();
    console.log("result", result);
  }

  return (
    <div className="App">
      <button onClick={main}>Connect</button>
    </div>
  );
}

export default App;
