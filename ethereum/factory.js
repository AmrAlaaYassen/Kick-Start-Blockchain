import web3 from './web3';

import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x67C745392B98F15bBA0B464f5ea6ba561de584C3'
);

export default instance;

