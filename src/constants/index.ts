import { chainAddresses, chainMetadata } from '@hyperlane-xyz/registry';

export const chains = Object.values(chainMetadata).sort(
  (a, b) => Number(a.chainId) - Number(b.chainId),
);

export const addresses = chainAddresses;

export enum ChainTag {
  All = 'All',
  Mainnet = 'Mainnet',
  Testnet = 'Testnet',
  Core = 'Core',
  Community = 'Community',
  EVM = 'EVM',
  Solana = 'Solana',
  Cosmos = 'Cosmos',
}

export enum ProtocolType {
  Ethereum = 'ethereum',
  Sealevel = 'sealevel',
  Cosmos = 'cosmos',
}

export const protocolToTag: Record<ProtocolType, ChainTag> = {
  [ProtocolType.Ethereum]: ChainTag.EVM,
  [ProtocolType.Sealevel]: ChainTag.Solana,
  [ProtocolType.Cosmos]: ChainTag.Cosmos,
};
