import TonWeb from "tonweb";

export const isTonWallet = (walletAddress: string): boolean => {
  return TonWeb.utils.Address.isValid(walletAddress);
};
