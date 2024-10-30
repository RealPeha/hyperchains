import styled from '@emotion/styled';
import React from 'react';

interface ChainLogoProps {
  chain: string;
  size: number;
  onClick?: (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => void;
}

export const ChainLogo: React.FC<ChainLogoProps> = ({
  chain,
  size,
  onClick,
}) => {
  return (
    <Logo
      size={size}
      title={chain}
      src={`https://cdn.jsdelivr.net/gh/hyperlane-xyz/hyperlane-registry/chains/${chain}/logo.svg`}
      alt={chain}
      onClick={onClick}
    />
  );
};

const Logo = styled.img<{ size: number }>`
  width: ${(p) => p.size}px;
  height: ${(p) => p.size}px;
  border-radius: 50%;
`;
