import { PublicKey } from "@solana/web3.js";

export const isSolanaWallet = (walletAddress: string): boolean => {
  try {
    const key = new PublicKey(walletAddress);
    return PublicKey.isOnCurve(key.toBytes());
  } catch (_err) {
    return false;
  }
};
