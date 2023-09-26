import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import SimpleStorageContract from './contracts/SimpleStorage.json'; // Import the ABI from your contract's JSON file

function App() {
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function initWeb3() {
      if (window.ethereum) {
        const _web3 = new Web3(window.ethereum);
        setWeb3(_web3);

        try {
          await window.ethereum.enable();
          const networkId = await _web3.eth.net.getId();
          const deployedNetwork = SimpleStorageContract.networks[networkId];
          const instance = new _web3.eth.Contract(
            SimpleStorageContract.abi,
            deployedNetwork && deployedNetwork.address,
          );
          setContract(instance);
        } catch (error) {
          console.error('Error connecting to Ethereum:', error);
        }
      } else {
        console.error('Web3 not found. Please install MetaMask.');
      }
    }

    initWeb3();
  }, []);

  const fetchData = async () => {
    if (contract) {
      const result = await contract.methods.getData().call();
      setData(result);
    }
  };

  const setDataInContract = async (newValue) => {
    if (contract && web3) {
      const accounts = await web3.eth.getAccounts();
      await contract.methods.setData(newValue).send({ from: accounts[0] });
    }
  };

  return (
    <div className="App">
      <h1>Simple Storage Smart Contract</h1>
      <p>Stored Data: {data}</p>
      <button onClick={fetchData}>Fetch Data</button>
      <input
        type="number"
        placeholder="New Value"
        onChange={(e) => setDataInContract(e.target.value)}
      />
    </div>
  );
}

export default App;

















// import React, { useState, useEffect } from 'react';
// import { ethers } from 'ethers';
// import './App.css';
// import CounterContract from './contracts/Counter.sol.json'; // ABI of the deployed smart contract

// function App() {
//     const [count, setCount] = useState(0);
//     const [provider, setProvider] = useState();
//     const [contract, setContract] = useState();

//     useEffect(() => {
//         async function setup() {
//             const ethProvider = new ethers.providers.JsonRpcProvider('http://localhost:8545'); // Connect to your Ethereum provider
//             setProvider(ethProvider);

//             const deployedNetwork = CounterContract.networks['<DEPLOYED_NETWORK_ID>']; // Replace with the network ID where the contract is deployed
//             if (deployedNetwork) {
//                 const deployedContract = new ethers.Contract(
//                     deployedNetwork.address,
//                     CounterContract.abi,
//                     ethProvider.getSigner()
//                 );
//                 setContract(deployedContract);

//                 const currentCount = await deployedContract.count();
//                 setCount(currentCount.toNumber());
//             }
//         }

//         setup();
//     }, []);

//     const incrementCount = async () => {
//         if (contract) {
//             await contract.increment();
//             const updatedCount = await contract.count();
//             setCount(updatedCount.toNumber());
//         }
//     };

//     return (
//         <div className="App">
//             <header className="App-header">
//                 <h1>Smart Contract Counter</h1>
//                 <p>Current Count: {count}</p>
//                 <button onClick={incrementCount}>Increment Count</button>
//             </header>
//         </div>
//     );
// }

// export default App;