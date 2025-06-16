export const cryptoWalletRegex = {
  btcMainet:
    /\b(bc(0([ac-hj-np-z02-9]{39}|[ac-hj-np-z02-9]{59})|1[ac-hj-np-z02-9]{8,87})|[13][a-km-zA-HJ-NP-Z1-9]{25,35})\b/,
  btcTestnet:
    /\b(tb(0([ac-hj-np-z02-9]{39}|[ac-hj-np-z02-9]{59})|1[ac-hj-np-z02-9]{8,87})|[mn2][a-km-zA-HJ-NP-Z1-9]{25,39})\b/,
  evm: /^0x[a-fA-F0-9]{40}$/,
  solana: /[1-9A-HJ-NP-Za-km-z]{32,44}/,
  ton: /^[A-Za-z0-9+/_-]+$/,
  // https://nomicon.io/DataStructures/Account
  near: /^(([a-z\d]+[\-_])*[a-z\d]+\.)*([a-z\d]+[\-_])*[a-z\d]+$/,
};
