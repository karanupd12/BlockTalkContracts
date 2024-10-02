require("@nomicfoundation/hardhat-toolbox");
/* this is for local host, contact the developer for polygon setup*/
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    hardhat: {
      chainId: 31337,
    },
  },
};
