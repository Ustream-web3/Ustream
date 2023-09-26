// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleStorage {
    uint256 public data;

    function setData(uint256 _data) public {
        data = _data;
    }
    
    function getData() public view returns (uint256) {
        return data;
    }
}


// Counter.sol
// pragma solidity ^0.8.0;
// 
// contract Counter {
//     uint256 public count;
// 
//     constructor() {
//         count = 0;
//     }
// 
//     function increment() public {
//         count++;
//     }
// }