import { isAddress } from "viem";

export const isEVMWallet = (walletAddress: string): boolean => {
  return isAddress(walletAddress);
};
