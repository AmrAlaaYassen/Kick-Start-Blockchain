import web3 from './web3';

import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x0109fc20Ee100fd5764175EB3b0300b6e9075827'
);

export default instance;

