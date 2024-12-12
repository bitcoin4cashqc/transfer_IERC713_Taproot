# Transfer Ownership Script

This is a Node.js script using `web3.js` to call the `transferOwnership` function on a smart contract implementing the `IERC173` interface. This script assumes you have access to your private key for signing the transaction.

![Node.js](https://img.shields.io/badge/Node.js-v14.17.0-green)
![web3.js](https://img.shields.io/badge/web3.js-v1.5.0-blue)

## Installation

```bash
npm install 
```

## Usage/Examples

Replace the placeholders in the script as follows:

1. Replace `https://your-scroll-mainnet-rpc-url` with the actual Scroll mainnet RPC URL. (I already putted some public scroll rpc)
2. Replace `0xYourContractAddress` with the address of your contract. (I already putted the NFT contract on scroll)
3. Replace `0xYourPrivateKey` with the private key of the owner account (keep it secure).
4. Replace `0xYourOwnerAddress` with the owner's wallet address. (I already putted the actual owner)
5. Replace `0xNewOwnerAddress` with the address of the new owner.

Then run the script:

```bash
node transferOwnership.js
```

## Check the Transaction

The script will log the transaction hash. Use it to verify the transaction on a Scroll block explorer.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or raise an issue.

## License

This project is licensed under the MIT License.