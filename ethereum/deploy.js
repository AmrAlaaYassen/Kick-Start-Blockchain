const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider (
    'flat general basic excite joy dragon firm act mushroom meat welcome decorate',
    'https://rinkeby.infura.io/v3/31acb7c6f3bc4ca884f4b892c706381a'
);

const web3 = new Web3(provider);
let interface = compiledFactory.interface;
let bytecode = compiledFactory.bytecode;
const deploy = async() => {
    const accounts = await web3.eth.getAccounts();
    console.log('trying to deploy from account ', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy( {data:'0x'+bytecode } )
    .send({from: accounts[0], gas: '1000000'}).catch(err => {
        console.log(err);
    });
    

    console.log(interface);
    console.log('Contract Deployed to the address' , result.options.address)

};

deploy();


//0x0109fc20Ee100fd5764175EB3b0300b6e9075827