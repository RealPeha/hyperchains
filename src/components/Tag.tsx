import React from 'react';
import styled from '@emotion/styled';
import { Text } from './Text';
import { Flex } from './Flex';
import { ChainTag } from '../constants';

interface TagProps {
  tag: ChainTag;
  big?: boolean;
  className?: string;
}

const colors: Record<ChainTag, string> = {
  [ChainTag.Mainnet]: '#37ac58',
  [ChainTag.Testnet]: '#b5b73e',
  [ChainTag.Core]: '#1976D2',
  [ChainTag.Community]: '#FFA000',
  [ChainTag.EVM]: '#7f7e7e',
  [ChainTag.Solana]: '#9544c4',
  [ChainTag.Cosmos]: '#000a7d',
  [ChainTag.Starknet]: '#1c4ac7',
  [ChainTag.All]: '#000',
};

export const Tag: React.FC<TagProps> = ({ tag, big = false, className }) => {
  return (
    <TagStyled color={colors[tag]} center big={big} className={className}>
      <Text color="#fff" size={big ? 16 : 14}>
        {tag}
      </Text>
    </TagStyled>
  );
};

const TagStyled = styled(Flex)<{ color: string; big: boolean }>`
  background: ${(props) => props.color};
  border-radius: 4px;
  padding: ${(p) => (p.big ? '3px 6px' : '2px 6px')};
`;
