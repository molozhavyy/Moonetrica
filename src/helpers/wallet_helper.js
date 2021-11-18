
import Onboard from "bnc-onboard";
// import { ethers } from 'ethers';
// import { chainId, contractAddress } from '../constants/address'

const chainId = 4;
const RPC_URL = "https://rinkeby.infura.io/v3/ea4e9dbe0feb463da320e8bd8056f82f";
const INFURA_KEY = "ea4e9dbe0feb463da320e8bd8056f82f";

const wallets = [
    { walletName: "metamask", preferred: true },
    { walletName: "trust", preferred: true, rpcUrl: RPC_URL },
    { walletName: "walletConnect", preferred: true, infuraKey: INFURA_KEY },

];

let walletProvider;

const onboard = Onboard({
    networkId: chainId,     // dappId: "877e8915-22d9-450e-a9b8-799bfd51798e", // [String] The API key created by step one above// [Integer] The Ethereum network ID your Dapp uses.
    hideBranding: true,
    walletSelect: {
        wallets: wallets
    },
    subscriptions: {
        wallet: (wallet) => {
            walletProvider = wallet.provider;
            console.log(`${wallet.name} is now connected`);
        }
    }
});

export const connectWallet =  async () => {
    const currentState = onboard.getState();
    if(currentState["address"] != null) {
        return currentState["address"];
    }
    const walletSelected = await onboard.walletSelect();
    if (walletSelected !== false) {
        const walletCheck = await onboard.walletCheck();
        if (walletCheck === true) {
            const currentState = onboard.getState();
            return currentState["address"]
        } else {
            return ""
        }
    }

}

export const disConnectWallet = () => {
    onboard.walletReset()
    return ""
}

export const getCurrentWalletConnected = async () => {
    const currentState = onboard.getState();

    if(currentState["address"] != null) {
        return currentState["address"]
    } else {
        return ""
    }

}

// export const getContract = (walletAddress) => {
//     const contractABI = require("../constants/contract.json")
//     let contract
  
//     try {
//         if(walletAddress === null || walletAddress === '' || walletAddress === undefined) {
//             if(parseInt(chainId) == 4) 
//                 contract = new ethers.Contract(contractAddress, contractABI, ethers.getDefaultProvider('rinkeby'))
//             if(parseInt(chainId) == 1) 
//                 contract = new ethers.Contract(contractAddress, contractABI, ethers.getDefaultProvider('mainnet'))
//         } else {
//             // const provider = new ethers.providers.Web3Provider(window.ethereum);
//             const provider = new ethers.providers.Web3Provider(walletProvider);
//             const signer = provider.getSigner();
//             contract = new ethers.Contract(contractAddress, contractABI, signer)
//         }
//     } catch (error) {
//         contract = null
//     }
//     return contract
// }


