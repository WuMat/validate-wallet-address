import { cryptoWalletRegex } from "./_cryptoWalletRegex";

export const isBitcoinWallet = (walletAddress: string): boolean => {
  return (
    cryptoWalletRegex.btcMainet.test(walletAddress) ||
    cryptoWalletRegex.btcTestnet.test(walletAddress)
  );
};

export const isBitcoinTestnetWallet = (walletAddress: string): boolean => {
  return cryptoWalletRegex.btcTestnet.test(walletAddress);
};

export const isBitcoinMainnetWallet = (walletAddress: string): boolean => {
  return cryptoWalletRegex.btcMainet.test(walletAddress);
};
