import { isEVMWallet } from "./isEVMWallet";
import { isSolanaWallet } from "./isSolanaWallet";
import { isTonWallet } from "./isTonWallet";
import { isTronWallet } from "./isTronWallet";
import { isNearWallet } from "./isNearWallet";
import { isBitcoinWallet } from "./isBitcoinWallet";
import { isStellarWallet } from "./isStellarWallet";

const networks = {
  evm: "evm",
  erc20: "erc20",
  ethereum: "ethereum",
  polygon: "polygon",
  binance: "binance",
  bep20: "bep20",
  arbitrum: "arbitrum",
  solana: "solana",
  sol: "sol",
  ton: "ton",
  tron: "tron",
  trc20: "trc20",
  near: "near",
  bitcoin: "bitcoin",
  avalanche: "avalanche",
  cchain: "cchain",
  stellar: "stellar",
  optimism: "optimism",
  whitechain: "whitechain",
} as const;

export type Network = keyof typeof networks;
export const networksList = Object.values(networks);

type IsWalletParams = {
  walletAddress: string;
  network: Network;
};

const exhaustiveGuard = (_value: never): never => {
  throw new Error(
    `ERROR! Reached forbidden guard function with unexpected value: ${JSON.stringify(
      _value
    )}`
  );
};

export const isWallet = ({ walletAddress, network }: IsWalletParams) => {
  switch (network) {
    case networks.evm:
      return isEVMWallet(walletAddress);
    case networks.solana:
      return isSolanaWallet(walletAddress);
    case networks.sol:
      return isSolanaWallet(walletAddress);
    case networks.ton:
      return isTonWallet(walletAddress);
    case networks.tron:
      return isTronWallet(walletAddress);
    case networks.near:
      return isNearWallet(walletAddress);
    case networks.bitcoin:
      return isBitcoinWallet(walletAddress);
    case networks.ethereum:
      return isEVMWallet(walletAddress);
    case networks.polygon:
      return isEVMWallet(walletAddress);
    case networks.erc20:
      return isEVMWallet(walletAddress);
    case networks.trc20:
      return isTronWallet(walletAddress);
    case networks.avalanche:
      return isEVMWallet(walletAddress);
    case networks.stellar:
      return isStellarWallet(walletAddress);
    case networks.optimism:
      return isEVMWallet(walletAddress);
    case networks.bep20:
      return isEVMWallet(walletAddress);
    case networks.cchain:
      return isEVMWallet(walletAddress);
    case networks.binance:
      return isEVMWallet(walletAddress);
    case networks.arbitrum:
      return isEVMWallet(walletAddress);
    case networks.whitechain:
      return isEVMWallet(walletAddress);
    default:
      return exhaustiveGuard(network);
  }
};
