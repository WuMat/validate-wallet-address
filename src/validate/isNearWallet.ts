import { cryptoWalletRegex } from "./_cryptoWalletRegex";

export const isNearWallet = (walletAddress: string): boolean => {
  return cryptoWalletRegex.near.test(walletAddress);
};
