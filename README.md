# Validate Wallet Address

[![npm version](https://img.shields.io/npm/v/validate-wallet-address.svg)](https://www.npmjs.com/package/validate-wallet-address)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A simple and efficient library to validate cryptocurrency wallet addresses for various blockchains.

## Supported Blockchains

This library supports a wide range of blockchains and their aliases:

- **EVM-compatible**
- **Solana**
- **Tron**
- **TON**
- **Bitcoin**
- **NEAR**
- **Stellar**

A full list of supported network identifiers is exported as `networksList`.

## Installation

You can install the package using npm, yarn, or pnpm:

```bash
npm install validate-wallet-address
```

```bash
yarn add validate-wallet-address
```

```bash
pnpm add validate-wallet-address
```

## Usage

The library exports a primary function `isWallet` to validate addresses.

```javascript
import { isWallet, networksList } from "validate-wallet-address";

// Check if a network is supported
console.log(networksList);
// [ 'evm', 'erc20', 'ethereum', 'polygon', 'binance', 'bep20', 'arbitrum', 'solana', 'sol', 'ton', 'tron', 'trc20', 'near', 'bitcoin', 'avalanche', 'cchain', 'stellar', 'optimism', 'whitechain' ]

// EVM Address
const isEvmValid = isWallet({
  walletAddress: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
  network: "evm",
});
console.log("Is EVM address valid?", isEvmValid); // true

// Solana Address
const isSolanaValid = isWallet({
  walletAddress: "So11111111111111111111111111111111111111112",
  network: "solana",
});
console.log("Is Solana address valid?", isSolanaValid); // true

// Bitcoin Address
const isBitcoinValid = isWallet({
  walletAddress: "1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2",
  network: "bitcoin",
});
console.log("Is Bitcoin address valid?", isBitcoinValid); // true

// NEAR Address
const isNearValid = isWallet({
  walletAddress: "example.near",
  network: "near",
});
console.log("Is NEAR address valid?", isNearValid); // true

// Stellar Address
const isStellarValid = isWallet({
  walletAddress: "GA5ZSEJYB37JRC5AVCIA5MOP4RHTM335X2KGX3IHOJAPP5RE34K4KZVN",
  network: "stellar",
});
console.log("Is Stellar address valid?", isStellarValid); // true

// TON Address
const isTonValid = isWallet({
  walletAddress: "EQCudP0_3b2Yt6POj6p651sQ_22sRJd2b4I4f3d2eJ-c-s-l",
  network: "ton",
});
console.log("Is TON address valid?", isTonValid); // true

// Tron Address
const isTronValid = isWallet({
  walletAddress: "TPAj4wQWd8nnsB5w4JvjF5o2d2QJg5gYvV",
  network: "tron",
});
console.log("Is Tron address valid?", isTronValid); // true
```

## API

### `isWallet({ walletAddress, network })`

- **`walletAddress: string`**: The wallet address to validate.
- **`network: Network`**: The blockchain identifier.

Returns `true` if the address is valid for the specified chain, `false` otherwise.

### `Network`

A TypeScript type representing all supported network identifiers.

```typescript
import type { Network } from "validate-wallet-address";

const myNetwork: Network = "ethereum";
```

### `networksList`

An array of strings containing all supported network identifiers.

## Development

This project uses `pnpm` as a package manager.

### Available Scripts

- `pnpm build`: Build the project for production.
- `pnpm dev`: Build the project and watch for changes.
- `pnpm test`: Run tests using vitest.
- `pnpm check`: Check code for formatting and linting issues with Biome.
- `pnpm format`: Format code with Biome.

## Contributing

Contributions are welcome! Please feel free to submit a pull request.

## License

This project is licensed under the MIT License.
