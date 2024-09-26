import { ethers } from "ethers";
import web3Modal from "web3modal";
import { ChatAppAddress, ChatAppABI } from '../Context/constants';

//Check Wallet connection
export const checkIfWalletConnected = async () => {
    try{
        if (!window.ethereum) return console.log("Install MetaMask");
        const accounts = await window.ethereum.request({
            method: "eth_accounts",
        });
        const firstAccount = accounts[0];
        return firstAccount;
    }catch(error){
        console.log(error);
    }
};

//Connect Wallet (MetaMask)
export const connectWallet = async () => {
    try{
        if (!window.ethereum) return console.log("Install MetaMask");
        const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
        });
        const firstAccount = accounts[0];
        return firstAccount;
    }catch(error){
        console.log(error);
    }
};

//fetching smart contracts and connecting it
const fetchContract = (signerOrProvider) =>
    new ethers.Contract(ChatAppAddress, ChatAppABI, signerOrProvider);
export const connectingWithContract = async () => {
    try{
        const web3modal = new web3Modal();
        const connection = await web3modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
        const contract = fetchContract(signer);
        return contract;
    }catch(error){
        console.log("Contract Connection error :", error);
    }
};

//get time (with proper format)
export const convertTime = (time) => {
    const newTime = new Date(time.toNumber());
    const realTime = newTime.getHours() + "/" + newTime.getMinutes() + "/" + newTime.getSeconds() + " Date:" + newTime.getDate() + "/" + (newTime.getMonth() + 1) + "/" + newTime.getFullYear();
    return realTime;
}

 