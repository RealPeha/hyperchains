import styled from '@emotion/styled';
import React from 'react';
import { Flex } from './Flex';
import { Text } from './Text';
import { ChainLogo } from './ChainLogo';
import { getChainTags, getTokenLogoUrl } from '../utils';
import { ChainTag } from '../constants';
import { useStore } from '../store';
import { WarpToken } from '../types';

interface TokenProps {
  token: WarpToken;
  withChain?: boolean | 'left' | 'right';
  size?: number;
  textSize?: number;
  onChainClick?: (token: WarpToken) => void;
}

export const Token: React.FC<TokenProps> = ({
  token,
  size = 20,
  textSize,
  withChain = false,
  onChainClick,
}) => {
  const getChain = useStore.use.getChain();

  const getLinkToToken = () => {
    const chain = getChain(token.chainName);
    const explorer = chain?.blockExplorers && chain.blockExplorers[0];

    if (!explorer || !token.addressOrDenom) {
      return undefined;
    }

    const tags = getChainTags(chain);

    if (tags.includes(ChainTag.Cosmos)) {
      return `${explorer.url}/wasm/contract/${token.addressOrDenom}`;
    }

    return `${explorer.url}/address/${token.addressOrDenom}`;
  };

  const handleChainClick = (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>,
  ) => {
    if (onChainClick) {
      e.preventDefault();
      onChainClick(token);
    }
  };

  const symbolSize = textSize || size - 4;

  return (
    <Link href={getLinkToToken()} target="_blank">
      <Wrapper gap="5px" center>
        {(withChain === true || withChain === 'left') && (
          <ChainLogo
            onClick={handleChainClick}
            chain={token.chainName}
            size={size}
          />
        )}
        <TokenLogo
          size={size}
          title={token.name}
          src={getTokenLogoUrl(token)}
          alt={token.symbol}
        />
        <EllipsisText size={symbolSize}>{token.symbol}</EllipsisText>
        {withChain === 'right' && (
          <ChainLogo
            onClick={handleChainClick}
            chain={token.chainName}
            size={size}
          />
        )}
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

const EllipsisText = styled(Text)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100px;
`;
