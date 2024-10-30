import React from 'react';
import { Flex } from '../../components/Flex';
import { WarpRoute, WarpToken } from '../../types';
import { Token } from '../../components/Token';
import styled from '@emotion/styled';

interface TokenRowProps {
  route: WarpRoute;
  onChainClick: (token: WarpToken, source: boolean) => void;
}

export const TokenRow: React.FC<TokenRowProps> = ({ route, onChainClick }) => {
  return (
    <Wrapper gap="10px" justifyContent="space-between">
      <Token
        onChainClick={(t) => onChainClick(t, true)}
        token={route.from}
        withChain
        size={32}
        textSize={20}
      />
      <ArrowRight className="arrow" />
      <Token
        onChainClick={(t) => onChainClick(t, false)}
        token={route.to}
        withChain="right"
        size={32}
        textSize={20}
      />
    </Wrapper>
  );
};

const Wrapper = styled(Flex)`
  cursor: pointer;

  &:hover .arrow {
    opacity: 1;

    :after {
      border-color: #2362c0;
    }

    :before {
      width: 100%;
    }
  }
`;

const ArrowRight = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  height: 2px;
  background-color: black;
  margin-top: 20px;
  opacity: 0.5;
  transition: opacity 0.5s ease-in-out;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 0;
    height: 100%;
    background-color: #2362c0;
    transition: width 0.3s ease-in-out;
  }

  &:after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
    width: 7px;
    height: 7px;
    border-top: 2px solid black;
    border-right: 2px solid black;
    transition: border-color 0.5s ease-in-out;
  }
`;
