import { isAddress } from "tronweb/utils";

export const isTronWallet = (walletAddress: string): boolean => {
  return isAddress(walletAddress);
};
