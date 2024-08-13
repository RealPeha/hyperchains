import type { ChainMetadata } from '@hyperlane-xyz/sdk';
import React from 'react';
import { Flex } from './Flex';
import styled from '@emotion/styled';
import { Tag } from './Tag';
import { ChainTag } from '../constants';
import { Text } from './Text';
import { getChainTags } from '../utils';
import { ChainLogo } from './ChainLogo';

interface ChainCardProps {
  chain: ChainMetadata;
  onClick?: () => void;
}

export const ChainCard: React.FC<ChainCardProps> = ({ chain, onClick }) => {
  const tags = getChainTags(chain);
  const hasDifferentDomainId = Boolean(
    chain.domainId && chain.chainId !== chain.domainId,
  );

  return (
    <Card full gap="10px" column onClick={onClick}>
      <Flex center="y" gap="10px">
        <LogoWrapper center>
          <ChainLogo size={34} chain={chain.name} />
        </LogoWrapper>
        <Text weight="bold" size={22} ellipsis>
          {chain.displayName ?? chain.name}
        </Text>
      </Flex>
      <Flex gap="10px">
        <Tags column gap="5px">
          {tags.map((tag) => {
            // Hide community tag
            if (tag === ChainTag.Community) {
              return null;
            }

            return <Tag key={tag} tag={tag} />;
          })}
        </Tags>
        <Flex column>
          <Flex gap="5px">
            <Text weight="bold">
              {hasDifferentDomainId ? 'Chain ID' : 'Chain/Domain ID'}:
            </Text>
            <Text>{chain.chainId}</Text>
          </Flex>
          {hasDifferentDomainId && (
            <Flex gap="5px">
              <Text weight="bold">Domain ID:</Text>
              <Text>{chain.domainId}</Text>
            </Flex>
          )}
          {chain.nativeToken && (
            <Flex gap="5px">
              <Text weight="bold">Currency:</Text>
              <Text>
                {chain.nativeToken.symbol}
                {chain.nativeToken.denom ? ` (${chain.nativeToken.denom})` : ''}
              </Text>
            </Flex>
          )}
        </Flex>
      </Flex>
    </Card>
  );
};

const Card = styled(Flex)`
  background: rgba(255, 255, 255, 0.5);
  width: 300px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: transform 0.3s;

  :hover {
    transform: scale(1.05);
  }
`;

const LogoWrapper = styled(Flex)`
  width: 70px;
`;

const Tags = styled(Flex)`
  width: 70px;
`;
