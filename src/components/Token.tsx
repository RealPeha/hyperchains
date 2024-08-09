import styled from '@emotion/styled';
import { warpRouteConfigs } from '@hyperlane-xyz/registry';
import React from 'react';
import { Flex } from './Flex';
import { Text } from './Text';
import { ChainLogo } from './ChainLogo';
import { getChainTags } from '../utils';
import { ChainTag } from '../constants';
import { useStore } from '../store';

interface TokenProps {
  token: (typeof warpRouteConfigs)[string]['tokens'][number];
  withChain?: boolean;
  size?: number;
}

export const Token: React.FC<TokenProps> = ({
  token,
  size = 20,
  withChain = false,
}) => {
  const getChain = useStore.use.getChain();

  const getLinkToToken = () => {
    const chain = getChain(token.chainName);
    const explorer = chain?.blockExplorers && chain.blockExplorers[0];

    if (!explorer) {
      return undefined;
    }

    const tags = getChainTags(chain);

    if (tags.includes(ChainTag.Cosmos)) {
      return `${explorer.url}/wasm/contract/${token.addressOrDenom}`;
    }

    return `${explorer.url}/address/${token.addressOrDenom}`;
  };

  return (
    <Link href={getLinkToToken()} target="_blank">
      <Wrapper gap="5px" center>
        {withChain && <ChainLogo chain={token.chainName} size={size} />}
        <TokenLogo
          size={size}
          title={token.name}
          src={
            token.logoURI
              ? `https://raw.githubusercontent.com/hyperlane-xyz/hyperlane-registry/main${token.logoURI}`
              : 'https://chainlist.org/unknown-logo.png'
          }
          alt={token.symbol}
        />
        <Text size={size - 4}>{token.symbol}</Text>
      </Wrapper>
    </Link>
  );
};

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;

const Wrapper = styled(Flex)`
  background: #f5f5f5;
  border-radius: 20px 10px 10px 20px;
  padding: 0 4px 0 0;
  border: 1px solid #e0e0e0;
  transition: background 0.2s;

  :hover {
    background: #e0e0e0;
  }
`;

const TokenLogo = styled.img<{ size: number }>`
  width: ${(p) => p.size}px;
  height: ${(p) => p.size}px;
  border-radius: 50%;
`;
