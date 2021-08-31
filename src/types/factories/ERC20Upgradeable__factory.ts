/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  ERC20Upgradeable,
  ERC20UpgradeableInterface,
} from "../ERC20Upgradeable";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";

const _abi = [
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
        name: "recipient",
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
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611399806100206000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80633950935111610071578063395093511461016857806370a082311461019857806395d89b41146101c8578063a457c2d7146101e6578063a9059cbb14610216578063dd62ed3e14610246576100a9565b806306fdde03146100ae578063095ea7b3146100cc57806318160ddd146100fc57806323b872dd1461011a578063313ce5671461014a575b600080fd5b6100b6610276565b6040516100c39190610e39565b60405180910390f35b6100e660048036038101906100e19190610c87565b610308565b6040516100f39190610e1e565b60405180910390f35b610104610326565b6040516101119190610f3b565b60405180910390f35b610134600480360381019061012f9190610c38565b610330565b6040516101419190610e1e565b60405180910390f35b610152610428565b60405161015f9190610f56565b60405180910390f35b610182600480360381019061017d9190610c87565b610431565b60405161018f9190610e1e565b60405180910390f35b6101b260048036038101906101ad9190610bd3565b6104dd565b6040516101bf9190610f3b565b60405180910390f35b6101d0610526565b6040516101dd9190610e39565b60405180910390f35b61020060048036038101906101fb9190610c87565b6105b8565b60405161020d9190610e1e565b60405180910390f35b610230600480360381019061022b9190610c87565b6106a3565b60405161023d9190610e1e565b60405180910390f35b610260600480360381019061025b9190610bfc565b6106c1565b60405161026d9190610f3b565b60405180910390f35b6060603680546102859061106b565b80601f01602080910402602001604051908101604052809291908181526020018280546102b19061106b565b80156102fe5780601f106102d3576101008083540402835291602001916102fe565b820191906000526020600020905b8154815290600101906020018083116102e157829003601f168201915b5050505050905090565b600061031c610315610748565b8484610750565b6001905092915050565b6000603554905090565b600061033d84848461091b565b6000603460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000610388610748565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905082811015610408576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103ff90610ebb565b60405180910390fd5b61041c85610414610748565b858403610750565b60019150509392505050565b60006012905090565b60006104d361043e610748565b84846034600061044c610748565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546104ce9190610f8d565b610750565b6001905092915050565b6000603360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6060603780546105359061106b565b80601f01602080910402602001604051908101604052809291908181526020018280546105619061106b565b80156105ae5780601f10610583576101008083540402835291602001916105ae565b820191906000526020600020905b81548152906001019060200180831161059157829003601f168201915b5050505050905090565b600080603460006105c7610748565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905082811015610684576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161067b90610f1b565b60405180910390fd5b61069861068f610748565b85858403610750565b600191505092915050565b60006106b76106b0610748565b848461091b565b6001905092915050565b6000603460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156107c0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107b790610efb565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610830576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161082790610e7b565b60405180910390fd5b80603460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258360405161090e9190610f3b565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561098b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161098290610edb565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156109fb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109f290610e5b565b60405180910390fd5b610a06838383610b9f565b6000603360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610a8d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a8490610e9b565b60405180910390fd5b818103603360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081603360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610b229190610f8d565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610b869190610f3b565b60405180910390a3610b99848484610ba4565b50505050565b505050565b505050565b600081359050610bb881611335565b92915050565b600081359050610bcd8161134c565b92915050565b600060208284031215610be557600080fd5b6000610bf384828501610ba9565b91505092915050565b60008060408385031215610c0f57600080fd5b6000610c1d85828601610ba9565b9250506020610c2e85828601610ba9565b9150509250929050565b600080600060608486031215610c4d57600080fd5b6000610c5b86828701610ba9565b9350506020610c6c86828701610ba9565b9250506040610c7d86828701610bbe565b9150509250925092565b60008060408385031215610c9a57600080fd5b6000610ca885828601610ba9565b9250506020610cb985828601610bbe565b9150509250929050565b610ccc81610ff5565b82525050565b6000610cdd82610f71565b610ce78185610f7c565b9350610cf7818560208601611038565b610d00816110fb565b840191505092915050565b6000610d18602383610f7c565b9150610d238261110c565b604082019050919050565b6000610d3b602283610f7c565b9150610d468261115b565b604082019050919050565b6000610d5e602683610f7c565b9150610d69826111aa565b604082019050919050565b6000610d81602883610f7c565b9150610d8c826111f9565b604082019050919050565b6000610da4602583610f7c565b9150610daf82611248565b604082019050919050565b6000610dc7602483610f7c565b9150610dd282611297565b604082019050919050565b6000610dea602583610f7c565b9150610df5826112e6565b604082019050919050565b610e0981611021565b82525050565b610e188161102b565b82525050565b6000602082019050610e336000830184610cc3565b92915050565b60006020820190508181036000830152610e538184610cd2565b905092915050565b60006020820190508181036000830152610e7481610d0b565b9050919050565b60006020820190508181036000830152610e9481610d2e565b9050919050565b60006020820190508181036000830152610eb481610d51565b9050919050565b60006020820190508181036000830152610ed481610d74565b9050919050565b60006020820190508181036000830152610ef481610d97565b9050919050565b60006020820190508181036000830152610f1481610dba565b9050919050565b60006020820190508181036000830152610f3481610ddd565b9050919050565b6000602082019050610f506000830184610e00565b92915050565b6000602082019050610f6b6000830184610e0f565b92915050565b600081519050919050565b600082825260208201905092915050565b6000610f9882611021565b9150610fa383611021565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610fd857610fd761109d565b5b828201905092915050565b6000610fee82611001565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b8381101561105657808201518184015260208101905061103b565b83811115611065576000848401525b50505050565b6000600282049050600182168061108357607f821691505b60208210811415611097576110966110cc565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206160008201527f6c6c6f77616e6365000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b61133e81610fe3565b811461134957600080fd5b50565b61135581611021565b811461136057600080fd5b5056fea26469706673582212203cfaa17b5676b49df599f0506cf080f87bfc0fd4f8ee6c2479a037ac5184043564736f6c63430008040033";

export class ERC20Upgradeable__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC20Upgradeable> {
    return super.deploy(overrides || {}) as Promise<ERC20Upgradeable>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ERC20Upgradeable {
    return super.attach(address) as ERC20Upgradeable;
  }
  connect(signer: Signer): ERC20Upgradeable__factory {
    return super.connect(signer) as ERC20Upgradeable__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20UpgradeableInterface {
    return new utils.Interface(_abi) as ERC20UpgradeableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20Upgradeable {
    return new Contract(address, _abi, signerOrProvider) as ERC20Upgradeable;
  }
}
