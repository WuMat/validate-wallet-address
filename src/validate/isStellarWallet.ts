import { StrKey } from "@stellar/stellar-base";

export const isStellarWallet = (walletAddress: string): boolean => {
  return StrKey.isValidEd25519PublicKey(walletAddress);
};
