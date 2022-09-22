import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0x434F202FEF6fAba39E614dE6fF565118Ad8c1FF2" 

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/Q7UquY4PDTxxlc5sz_-9bo8gbb8OlkJk",
  },
};