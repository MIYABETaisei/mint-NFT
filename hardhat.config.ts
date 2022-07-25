require("@nomiclabs/hardhat-waffle");
require("dotenv").config()

import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-ethers";

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  networks: {
    rinkeby: {
      url: process.env.ALCHEMY_KINKEBY_URL,
      accounts: [process.env.ACCOUNT_PRIVATE_KEY],
    }
  }
};

export default config;
