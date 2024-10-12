import type { ChainMetadata } from '@hyperlane-xyz/sdk';
import React from 'react';
import { Flex } from '../Flex';
import { Text } from '../Text';
import { Address } from '../Address';
import { useStore } from '../../store';

interface ChainValidatorsProps {
  chain: ChainMetadata;
}

export const ChainValidators: React.FC<ChainValidatorsProps> = ({ chain }) => {
  const validators = useStore.use.getValidators()(chain.name);
  const explorer = chain.blockExplorers && chain.blockExplorers[0];

  if (!validators) {
    return null;
  }

  return (
    <Flex column gap="10px">
      {validators.map(({ address, name }) => {
        return (
          <Flex gap="5px" center="y" column key={address}>
            <Text weight="bold">{name}</Text>
            <Address address={address} explorer={explorer?.url} />
          </Flex>
        );
      })}
    </Flex>
  );
};
