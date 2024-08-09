import { ChainMetadata } from '@hyperlane-xyz/sdk';
import React from 'react';
import { Flex } from '../Flex';
import { Text } from '../Text';
import { Copy } from '../Copy';
import { getChainTags } from '../../utils';
import { ChainTag } from '../../constants';

interface ChainInfoProps {
  chain: ChainMetadata;
}

export const ChainInfo: React.FC<ChainInfoProps> = ({ chain }) => {
  const explorer = chain.blockExplorers && chain.blockExplorers[0];
  const hasDifferentDomainId = Boolean(
    chain.domainId && chain.chainId !== chain.domainId,
  );
  const tags = getChainTags(chain);

  return (
    <>
      <Flex gap="30px" center>
        <Flex column center gap="10px">
          <Text weight="bold" size={20}>
            {hasDifferentDomainId ? 'Chain ID' : 'Chain/Domain ID'}
          </Text>
          <Flex center>
            <a
              href={
                tags.includes(ChainTag.EVM)
                  ? `https://chainlist.org/chain/${chain.chainId}`
                  : undefined
              }
              target="_blank"
            >
              <Text size={18}>{chain.chainId}</Text>
            </a>
            <Copy value={chain.chainId} />
          </Flex>
        </Flex>
        {hasDifferentDomainId && (
          <Flex column center gap="10px">
            <Text weight="bold" size={20}>
              Domain ID
            </Text>
            <Flex center>
              <Text size={18}>{chain.domainId}</Text>
              <Copy value={chain.domainId!} />
            </Flex>
          </Flex>
        )}
        {chain.nativeToken && (
          <Flex column center gap="10px">
            <Text weight="bold" size={20}>
              Currency
            </Text>
            <Text size={18}>
              <a
                href={
                  chain.gasCurrencyCoinGeckoId
                    ? `https://www.coingecko.com/en/coins/${chain.gasCurrencyCoinGeckoId}`
                    : undefined
                }
                target="_blank"
              >
                {chain.nativeToken.symbol}
                {chain.nativeToken.denom ? ` (${chain.nativeToken.denom})` : ''}
              </a>
            </Text>
          </Flex>
        )}
        {chain.deployer && (
          <Flex column center gap="10px">
            <Text weight="bold" size={20}>
              Deployer
            </Text>
            {chain.deployer.url ? (
              <a href={chain.deployer.url} target="_blank">
                <Text size={18}>{chain.deployer.name}</Text>
              </a>
            ) : (
              <Text size={18}>{chain.deployer.name}</Text>
            )}
          </Flex>
        )}
      </Flex>
      <Flex gap="30px" center>
        {explorer && (
          <Flex column center gap="10px">
            <Text weight="bold" size={20}>
              Explorer
            </Text>
            <a href={explorer.url} target="_blank">
              <Text size={18}>{explorer.name}</Text>
            </a>
          </Flex>
        )}
        <Flex column center gap="10px">
          <Text weight="bold" size={20}>
            Hyperlane Registry
          </Text>
          <a
            href={`https://github.com/hyperlane-xyz/hyperlane-registry/tree/main/chains/${chain.name}`}
            target="_blank"
          >
            <Text size={18}>GitHub</Text>
          </a>
        </Flex>
      </Flex>
    </>
  );
};
