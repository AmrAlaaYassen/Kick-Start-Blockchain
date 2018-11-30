import Web3 from 'web3' ; 
const HDWalletProvider = require('truffle-hdwallet-provider');

let web3;

if (typeof window !=='undefined' && typeof window.web3 !=='undefined') {
    // using browser & metamask 
    web3 = new Web3(window.web3.currentProvider);
    
}else {
    // using serve or not using metamask 
    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/31acb7c6f3bc4ca884f4b892c706381a'
    );
    web3 = new Web3(provider)
}




export default web3;

