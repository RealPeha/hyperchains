import type { ChainMetadata } from '@hyperlane-xyz/sdk';
import React from 'react';
import { Flex } from '../Flex';
import { Text } from '../Text';
import { Address } from '../Address';
import { useStore } from '../../store';

const convertIdToTitle = (id: string) => {
  return id
    .replace(/([A-Z])/g, ' $1') // Insert space before each uppercase letter
    .replace(/^./, (str) => str.toUpperCase()) // Capitalize the first letter of the string
    .replace('Ism', 'ISM') // Capitalize ISM
    .trim();
};

interface ChainAddressesProps {
  chain: ChainMetadata;
}

export const ChainAddresses: React.FC<ChainAddressesProps> = ({ chain }) => {
  const addresses = useStore.use.getAddresses()(chain.name);
  const explorer = chain.blockExplorers && chain.blockExplorers[0];

  if (!addresses) {
    return null;
  }

  return (
    <Flex column gap="10px">
      {Object.entries(addresses)
        .sort((a, b) => {
          // Move mailbox to the top
          if (a[0] === 'mailbox') {
            return -1;
          }

          if (b[0] === 'mailbox') {
            return 1;
          }

          return 0;
        })
        .map(([key, value]) => {
          if (value === '0x0000000000000000000000000000000000000000') {
            return null;
          }

          return (
            <Flex gap="5px" center="y" column key={key}>
              <Text weight="bold">{convertIdToTitle(key)}</Text>
              <Address address={value} explorer={explorer?.url} />
            </Flex>
          );
        })}
    </Flex>
  );
};
