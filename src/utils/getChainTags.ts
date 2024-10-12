import type { ChainMetadata } from '@hyperlane-xyz/sdk';
import { ChainTag, protocolToTag } from '../constants';

export const getChainTags = (chain: ChainMetadata): ChainTag[] => {
  const tags: ChainTag[] = [];

  if (chain.isTestnet) {
    tags.push(ChainTag.Testnet);
  } else {
    tags.push(ChainTag.Mainnet);
  }

  if (chain.deployer?.name === 'Abacus Works') {
    tags.push(ChainTag.Core);
  } else {
    tags.push(ChainTag.Community);
  }

  tags.push(protocolToTag[chain.protocol]);

  return tags;
};
