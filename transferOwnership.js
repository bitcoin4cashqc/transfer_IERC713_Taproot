// Import Web3.js
const Web3 = require('web3');

// Set up your provider for Scroll mainnet (replace with the actual Scroll mainnet RPC URL)
const web3 = new Web3('https://rpc.scroll.io');

// Replace with your contract address and ABI
const contractAddress = '0x4ea995fBA65292D65F2Ee65CFd5402d7923c2c43'; //DIAMOND / NFT 

const contractABI = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"address","name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"owner_","type":"address"}],"stateMutability":"view","type":"function"}];


// Create the contract instance
const contract = new web3.eth.Contract(contractABI, contractAddress);

// Replace with your owner account private key and address
const ownerPrivateKey = '0xYourPrivateKey'; // Ensure this is kept secure
const ownerAddress = '0xcE716032dFe9d5BB840568171F541A6A046bBf90'; //actual owner

// Replace with the new owner's address
const newOwnerAddress = '0xNewOwnerAddress'; //Ask TinyKiss brother

async function transferOwnership() {
  try {
    // Estimate gas for the transaction
    const gasEstimate = await contract.methods
      .transferOwnership(newOwnerAddress)
      .estimateGas({ from: ownerAddress });

    // Create the transaction object
    const tx = {
      from: ownerAddress,
      to: contractAddress,
      gas: gasEstimate,
      data: contract.methods.transferOwnership(newOwnerAddress).encodeABI()
    };

    // Sign the transaction
    const signedTx = await web3.eth.accounts.signTransaction(tx, ownerPrivateKey);

    // Send the signed transaction
    const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);

    console.log('Transaction successful with hash:', receipt.transactionHash);
  } catch (error) {
    console.error('Error transferring ownership:', error);
  }
}

// Execute the function
transferOwnership();
