import styled from '@emotion/styled';
import React from 'react';

interface ChainLogoProps {
  chain: string;
  size: number;
}

export const ChainLogo: React.FC<ChainLogoProps> = ({ chain, size }) => {
  return (
    <Logo
      size={size}
      title={chain}
      src={`https://raw.githubusercontent.com/hyperlane-xyz/hyperlane-registry/main/chains/${chain}/logo.svg`}
      alt={chain}
    />
  );
};

const Logo = styled.img<{ size: number }>`
  width: ${(p) => p.size}px;
  height: ${(p) => p.size}px;
  border-radius: 50%;
`;
