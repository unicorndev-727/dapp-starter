/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  ITManToken,
  ITManTokenInterface,
} from "../../contracts/ITManToken";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "proxiableUUID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040523073ffffffffffffffffffffffffffffffffffffffff1660809073ffffffffffffffffffffffffffffffffffffffff1681525034801561004357600080fd5b5060805161355661007b600039600081816105fe0152818161068c015281816107e501528181610873015261092301526135566000f3fe6080604052600436106101355760003560e01c80635c975abb116100ab5780638da5cb5b1161006f5780638da5cb5b146103cf57806395d89b41146103fa578063a457c2d714610425578063a9059cbb14610462578063dd62ed3e1461049f578063f2fde38b146104dc57610135565b80635c975abb1461032257806370a082311461034d578063715018a61461038a5780638129fc1c146103a15780638456cb59146103b857610135565b80633659cfe6116100fd5780633659cfe614610235578063395093511461025e5780633f4ba83a1461029b57806340c10f19146102b25780634f1ef286146102db57806352d1902d146102f757610135565b806306fdde031461013a578063095ea7b31461016557806318160ddd146101a257806323b872dd146101cd578063313ce5671461020a575b600080fd5b34801561014657600080fd5b5061014f610505565b60405161015c9190611f5f565b60405180910390f35b34801561017157600080fd5b5061018c60048036038101906101879190612029565b610597565b6040516101999190612084565b60405180910390f35b3480156101ae57600080fd5b506101b76105ba565b6040516101c491906120ae565b60405180910390f35b3480156101d957600080fd5b506101f460048036038101906101ef91906120c9565b6105c4565b6040516102019190612084565b60405180910390f35b34801561021657600080fd5b5061021f6105f3565b60405161022c9190612138565b60405180910390f35b34801561024157600080fd5b5061025c60048036038101906102579190612153565b6105fc565b005b34801561026a57600080fd5b5061028560048036038101906102809190612029565b610784565b6040516102929190612084565b60405180910390f35b3480156102a757600080fd5b506102b06107bb565b005b3480156102be57600080fd5b506102d960048036038101906102d49190612029565b6107cd565b005b6102f560048036038101906102f091906122b5565b6107e3565b005b34801561030357600080fd5b5061030c61091f565b604051610319919061232a565b60405180910390f35b34801561032e57600080fd5b506103376109d8565b6040516103449190612084565b60405180910390f35b34801561035957600080fd5b50610374600480360381019061036f9190612153565b6109ef565b60405161038191906120ae565b60405180910390f35b34801561039657600080fd5b5061039f610a38565b005b3480156103ad57600080fd5b506103b6610a4c565b005b3480156103c457600080fd5b506103cd610c39565b005b3480156103db57600080fd5b506103e4610c4b565b6040516103f19190612354565b60405180910390f35b34801561040657600080fd5b5061040f610c75565b60405161041c9190611f5f565b60405180910390f35b34801561043157600080fd5b5061044c60048036038101906104479190612029565b610d07565b6040516104599190612084565b60405180910390f35b34801561046e57600080fd5b5061048960048036038101906104849190612029565b610d7e565b6040516104969190612084565b60405180910390f35b3480156104ab57600080fd5b506104c660048036038101906104c1919061236f565b610da1565b6040516104d391906120ae565b60405180910390f35b3480156104e857600080fd5b5061050360048036038101906104fe9190612153565b610e28565b005b606060368054610514906123de565b80601f0160208091040260200160405190810160405280929190818152602001828054610540906123de565b801561058d5780601f106105625761010080835404028352916020019161058d565b820191906000526020600020905b81548152906001019060200180831161057057829003601f168201915b5050505050905090565b6000806105a2610eab565b90506105af818585610eb3565b600191505092915050565b6000603554905090565b6000806105cf610eab565b90506105dc85828561107c565b6105e7858585611108565b60019150509392505050565b60006012905090565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff160361068a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161068190612481565b60405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166106c961138a565b73ffffffffffffffffffffffffffffffffffffffff161461071f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161071690612513565b60405180910390fd5b610728816113e1565b61078181600067ffffffffffffffff8111156107475761074661218a565b5b6040519080825280601f01601f1916602001820160405280156107795781602001600182028036833780820191505090505b5060006113ec565b50565b60008061078f610eab565b90506107b08185856107a18589610da1565b6107ab9190612562565b610eb3565b600191505092915050565b6107c361155a565b6107cb6115d8565b565b6107d561155a565b6107df828261163b565b5050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff1603610871576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161086890612481565b60405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166108b061138a565b73ffffffffffffffffffffffffffffffffffffffff1614610906576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108fd90612513565b60405180910390fd5b61090f826113e1565b61091b828260016113ec565b5050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff16146109af576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109a690612608565b60405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b905090565b6000606560009054906101000a900460ff16905090565b6000603360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610a4061155a565b610a4a600061179b565b565b60008060019054906101000a900460ff16159050808015610a7d5750600160008054906101000a900460ff1660ff16105b80610aaa5750610a8c30611861565b158015610aa95750600160008054906101000a900460ff1660ff16145b5b610ae9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ae09061269a565b60405180910390fd5b60016000806101000a81548160ff021916908360ff1602179055508015610b26576001600060016101000a81548160ff0219169083151502179055505b610b9a6040518060400160405280600a81526020017f49544d616e546f6b656e000000000000000000000000000000000000000000008152506040518060400160405280600381526020017f49544d0000000000000000000000000000000000000000000000000000000000815250611884565b610ba26118e1565b610baa61193a565b610bb2611993565b610bdd33610bbe6105f3565b600a610bca91906127ed565b620f4240610bd89190612838565b61163b565b8015610c365760008060016101000a81548160ff0219169083151502179055507f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024986001604051610c2d91906128bf565b60405180910390a15b50565b610c4161155a565b610c496119e4565b565b6000609760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b606060378054610c84906123de565b80601f0160208091040260200160405190810160405280929190818152602001828054610cb0906123de565b8015610cfd5780601f10610cd257610100808354040283529160200191610cfd565b820191906000526020600020905b815481529060010190602001808311610ce057829003601f168201915b5050505050905090565b600080610d12610eab565b90506000610d208286610da1565b905083811015610d65576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d5c9061294c565b60405180910390fd5b610d728286868403610eb3565b60019250505092915050565b600080610d89610eab565b9050610d96818585611108565b600191505092915050565b6000603460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b610e3061155a565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610e9f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e96906129de565b60405180910390fd5b610ea88161179b565b50565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610f22576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f1990612a70565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610f91576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f8890612b02565b60405180910390fd5b80603460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258360405161106f91906120ae565b60405180910390a3505050565b60006110888484610da1565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811461110257818110156110f4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110eb90612b6e565b60405180910390fd5b6111018484848403610eb3565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603611177576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161116e90612c00565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036111e6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111dd90612c92565b60405180910390fd5b6111f1838383611a47565b6000603360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015611278576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161126f90612d24565b60405180910390fd5b818103603360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081603360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461130d9190612562565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161137191906120ae565b60405180910390a3611384848484611a5f565b50505050565b60006113b87f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b611a64565b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6113e961155a565b50565b6114187f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd914360001b611a6e565b60000160009054906101000a900460ff161561143c5761143783611a78565b611555565b8273ffffffffffffffffffffffffffffffffffffffff166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa9250505080156114a457506040513d601f19601f820116820180604052508101906114a19190612d70565b60015b6114e3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114da90612e0f565b60405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b8114611548576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161153f90612ea1565b60405180910390fd5b50611554838383611b31565b5b505050565b611562610eab565b73ffffffffffffffffffffffffffffffffffffffff16611580610c4b565b73ffffffffffffffffffffffffffffffffffffffff16146115d6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115cd90612f0d565b60405180910390fd5b565b6115e0611b5d565b6000606560006101000a81548160ff0219169083151502179055507f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa611624610eab565b6040516116319190612354565b60405180910390a1565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036116aa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116a190612f79565b60405180910390fd5b6116b660008383611a47565b80603560008282546116c89190612562565b9250508190555080603360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461171e9190612562565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161178391906120ae565b60405180910390a361179760008383611a5f565b5050565b6000609760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081609760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b600060019054906101000a900460ff166118d3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118ca9061300b565b60405180910390fd5b6118dd8282611ba6565b5050565b600060019054906101000a900460ff16611930576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119279061300b565b60405180910390fd5b611938611c19565b565b600060019054906101000a900460ff16611989576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119809061300b565b60405180910390fd5b611991611c85565b565b600060019054906101000a900460ff166119e2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119d99061300b565b60405180910390fd5b565b6119ec611ce6565b6001606560006101000a81548160ff0219169083151502179055507f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258611a30610eab565b604051611a3d9190612354565b60405180910390a1565b611a4f611ce6565b611a5a838383611d30565b505050565b505050565b6000819050919050565b6000819050919050565b611a8181611861565b611ac0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ab79061309d565b60405180910390fd5b80611aed7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b611a64565b60000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b611b3a83611d35565b600082511180611b475750805b15611b5857611b568383611d84565b505b505050565b611b656109d8565b611ba4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b9b90613109565b60405180910390fd5b565b600060019054906101000a900460ff16611bf5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611bec9061300b565b60405180910390fd5b8160369081611c0491906132cb565b508060379081611c1491906132cb565b505050565b600060019054906101000a900460ff16611c68576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611c5f9061300b565b60405180910390fd5b6000606560006101000a81548160ff021916908315150217905550565b600060019054906101000a900460ff16611cd4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ccb9061300b565b60405180910390fd5b611ce4611cdf610eab565b61179b565b565b611cee6109d8565b15611d2e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611d25906133e9565b60405180910390fd5b565b505050565b611d3e81611a78565b8073ffffffffffffffffffffffffffffffffffffffff167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b60405160405180910390a250565b6060611d8f83611861565b611dce576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611dc59061347b565b60405180910390fd5b6000808473ffffffffffffffffffffffffffffffffffffffff1684604051611df691906134e2565b600060405180830381855af49150503d8060008114611e31576040519150601f19603f3d011682016040523d82523d6000602084013e611e36565b606091505b5091509150611e5e82826040518060600160405280602781526020016134fa60279139611e68565b9250505092915050565b60608315611e7857829050611ec8565b600083511115611e8b5782518084602001fd5b816040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ebf9190611f5f565b60405180910390fd5b9392505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611f09578082015181840152602081019050611eee565b60008484015250505050565b6000601f19601f8301169050919050565b6000611f3182611ecf565b611f3b8185611eda565b9350611f4b818560208601611eeb565b611f5481611f15565b840191505092915050565b60006020820190508181036000830152611f798184611f26565b905092915050565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611fc082611f95565b9050919050565b611fd081611fb5565b8114611fdb57600080fd5b50565b600081359050611fed81611fc7565b92915050565b6000819050919050565b61200681611ff3565b811461201157600080fd5b50565b60008135905061202381611ffd565b92915050565b600080604083850312156120405761203f611f8b565b5b600061204e85828601611fde565b925050602061205f85828601612014565b9150509250929050565b60008115159050919050565b61207e81612069565b82525050565b60006020820190506120996000830184612075565b92915050565b6120a881611ff3565b82525050565b60006020820190506120c3600083018461209f565b92915050565b6000806000606084860312156120e2576120e1611f8b565b5b60006120f086828701611fde565b935050602061210186828701611fde565b925050604061211286828701612014565b9150509250925092565b600060ff82169050919050565b6121328161211c565b82525050565b600060208201905061214d6000830184612129565b92915050565b60006020828403121561216957612168611f8b565b5b600061217784828501611fde565b91505092915050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6121c282611f15565b810181811067ffffffffffffffff821117156121e1576121e061218a565b5b80604052505050565b60006121f4611f81565b905061220082826121b9565b919050565b600067ffffffffffffffff8211156122205761221f61218a565b5b61222982611f15565b9050602081019050919050565b82818337600083830152505050565b600061225861225384612205565b6121ea565b90508281526020810184848401111561227457612273612185565b5b61227f848285612236565b509392505050565b600082601f83011261229c5761229b612180565b5b81356122ac848260208601612245565b91505092915050565b600080604083850312156122cc576122cb611f8b565b5b60006122da85828601611fde565b925050602083013567ffffffffffffffff8111156122fb576122fa611f90565b5b61230785828601612287565b9150509250929050565b6000819050919050565b61232481612311565b82525050565b600060208201905061233f600083018461231b565b92915050565b61234e81611fb5565b82525050565b60006020820190506123696000830184612345565b92915050565b6000806040838503121561238657612385611f8b565b5b600061239485828601611fde565b92505060206123a585828601611fde565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806123f657607f821691505b602082108103612409576124086123af565b5b50919050565b7f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060008201527f64656c656761746563616c6c0000000000000000000000000000000000000000602082015250565b600061246b602c83611eda565b91506124768261240f565b604082019050919050565b6000602082019050818103600083015261249a8161245e565b9050919050565b7f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060008201527f6163746976652070726f78790000000000000000000000000000000000000000602082015250565b60006124fd602c83611eda565b9150612508826124a1565b604082019050919050565b6000602082019050818103600083015261252c816124f0565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061256d82611ff3565b915061257883611ff3565b92508282019050808211156125905761258f612533565b5b92915050565b7f555550535570677261646561626c653a206d757374206e6f742062652063616c60008201527f6c6564207468726f7567682064656c656761746563616c6c0000000000000000602082015250565b60006125f2603883611eda565b91506125fd82612596565b604082019050919050565b60006020820190508181036000830152612621816125e5565b9050919050565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b6000612684602e83611eda565b915061268f82612628565b604082019050919050565b600060208201905081810360008301526126b381612677565b9050919050565b60008160011c9050919050565b6000808291508390505b6001851115612711578086048111156126ed576126ec612533565b5b60018516156126fc5780820291505b808102905061270a856126ba565b94506126d1565b94509492505050565b60008261272a57600190506127e6565b8161273857600090506127e6565b816001811461274e576002811461275857612787565b60019150506127e6565b60ff84111561276a57612769612533565b5b8360020a91508482111561278157612780612533565b5b506127e6565b5060208310610133831016604e8410600b84101617156127bc5782820a9050838111156127b7576127b6612533565b5b6127e6565b6127c984848460016126c7565b925090508184048111156127e0576127df612533565b5b81810290505b9392505050565b60006127f882611ff3565b91506128038361211c565b92506128307fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff848461271a565b905092915050565b600061284382611ff3565b915061284e83611ff3565b925082820261285c81611ff3565b9150828204841483151761287357612872612533565b5b5092915050565b6000819050919050565b6000819050919050565b60006128a96128a461289f8461287a565b612884565b61211c565b9050919050565b6128b98161288e565b82525050565b60006020820190506128d460008301846128b0565b92915050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b6000612936602583611eda565b9150612941826128da565b604082019050919050565b6000602082019050818103600083015261296581612929565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b60006129c8602683611eda565b91506129d38261296c565b604082019050919050565b600060208201905081810360008301526129f7816129bb565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000612a5a602483611eda565b9150612a65826129fe565b604082019050919050565b60006020820190508181036000830152612a8981612a4d565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b6000612aec602283611eda565b9150612af782612a90565b604082019050919050565b60006020820190508181036000830152612b1b81612adf565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b6000612b58601d83611eda565b9150612b6382612b22565b602082019050919050565b60006020820190508181036000830152612b8781612b4b565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b6000612bea602583611eda565b9150612bf582612b8e565b604082019050919050565b60006020820190508181036000830152612c1981612bdd565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b6000612c7c602383611eda565b9150612c8782612c20565b604082019050919050565b60006020820190508181036000830152612cab81612c6f565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b6000612d0e602683611eda565b9150612d1982612cb2565b604082019050919050565b60006020820190508181036000830152612d3d81612d01565b9050919050565b612d4d81612311565b8114612d5857600080fd5b50565b600081519050612d6a81612d44565b92915050565b600060208284031215612d8657612d85611f8b565b5b6000612d9484828501612d5b565b91505092915050565b7f45524331393637557067726164653a206e657720696d706c656d656e7461746960008201527f6f6e206973206e6f742055555053000000000000000000000000000000000000602082015250565b6000612df9602e83611eda565b9150612e0482612d9d565b604082019050919050565b60006020820190508181036000830152612e2881612dec565b9050919050565b7f45524331393637557067726164653a20756e737570706f727465642070726f7860008201527f6961626c65555549440000000000000000000000000000000000000000000000602082015250565b6000612e8b602983611eda565b9150612e9682612e2f565b604082019050919050565b60006020820190508181036000830152612eba81612e7e565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000612ef7602083611eda565b9150612f0282612ec1565b602082019050919050565b60006020820190508181036000830152612f2681612eea565b9050919050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b6000612f63601f83611eda565b9150612f6e82612f2d565b602082019050919050565b60006020820190508181036000830152612f9281612f56565b9050919050565b7f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960008201527f6e697469616c697a696e67000000000000000000000000000000000000000000602082015250565b6000612ff5602b83611eda565b915061300082612f99565b604082019050919050565b6000602082019050818103600083015261302481612fe8565b9050919050565b7f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60008201527f6f74206120636f6e747261637400000000000000000000000000000000000000602082015250565b6000613087602d83611eda565b91506130928261302b565b604082019050919050565b600060208201905081810360008301526130b68161307a565b9050919050565b7f5061757361626c653a206e6f7420706175736564000000000000000000000000600082015250565b60006130f3601483611eda565b91506130fe826130bd565b602082019050919050565b60006020820190508181036000830152613122816130e6565b9050919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b60006008830261318b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8261314e565b613195868361314e565b95508019841693508086168417925050509392505050565b60006131c86131c36131be84611ff3565b612884565b611ff3565b9050919050565b6000819050919050565b6131e2836131ad565b6131f66131ee826131cf565b84845461315b565b825550505050565b600090565b61320b6131fe565b6132168184846131d9565b505050565b5b8181101561323a5761322f600082613203565b60018101905061321c565b5050565b601f82111561327f5761325081613129565b6132598461313e565b81016020851015613268578190505b61327c6132748561313e565b83018261321b565b50505b505050565b600082821c905092915050565b60006132a260001984600802613284565b1980831691505092915050565b60006132bb8383613291565b9150826002028217905092915050565b6132d482611ecf565b67ffffffffffffffff8111156132ed576132ec61218a565b5b6132f782546123de565b61330282828561323e565b600060209050601f8311600181146133355760008415613323578287015190505b61332d85826132af565b865550613395565b601f19841661334386613129565b60005b8281101561336b57848901518255600182019150602085019450602081019050613346565b868310156133885784890151613384601f891682613291565b8355505b6001600288020188555050505b505050505050565b7f5061757361626c653a2070617573656400000000000000000000000000000000600082015250565b60006133d3601083611eda565b91506133de8261339d565b602082019050919050565b60006020820190508181036000830152613402816133c6565b9050919050565b7f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f60008201527f6e74726163740000000000000000000000000000000000000000000000000000602082015250565b6000613465602683611eda565b915061347082613409565b604082019050919050565b6000602082019050818103600083015261349481613458565b9050919050565b600081519050919050565b600081905092915050565b60006134bc8261349b565b6134c681856134a6565b93506134d6818560208601611eeb565b80840191505092915050565b60006134ee82846134b1565b91508190509291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220cdb04e178edf2c555e43e826dccc6cdaa6991dc2a0e5c12a686520ecd27ff3b164736f6c63430008110033";

type ITManTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ITManTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ITManToken__factory extends ContractFactory {
  constructor(...args: ITManTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ITManToken> {
    return super.deploy(overrides || {}) as Promise<ITManToken>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ITManToken {
    return super.attach(address) as ITManToken;
  }
  override connect(signer: Signer): ITManToken__factory {
    return super.connect(signer) as ITManToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ITManTokenInterface {
    return new utils.Interface(_abi) as ITManTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ITManToken {
    return new Contract(address, _abi, signerOrProvider) as ITManToken;
  }
}
