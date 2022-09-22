import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0x6E71cfbc04eF15db5CcB942f2e4C78efCDD02833";

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/Q7UquY4PDTxxlc5sz_-9bo8gbb8OlkJk",
  },
};
