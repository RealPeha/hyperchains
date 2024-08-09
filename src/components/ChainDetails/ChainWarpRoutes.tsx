import React from 'react';
import type { ChainMetadata } from '@hyperlane-xyz/sdk';
import { Flex } from '../Flex';
import { Token } from '../Token';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { useStore } from '../../store';

interface ChainWarpRoutesProps {
  chain: ChainMetadata;
}

export const ChainWarpRoutes: React.FC<ChainWarpRoutesProps> = ({ chain }) => {
  const { warpRoutesArray, warpRoutes } = useStore.use.getWarpRoutes()(
    chain.name,
  );

  if (!warpRoutesArray.length) {
    return null;
  }

  return (
    <Flex column gap="10px">
      {warpRoutesArray.flatMap(([id]) => {
        return warpRoutes[id].tokens
          .filter((tokenFrom) => tokenFrom.chainName === chain.name)
          .flatMap((tokenFrom, i1) => {
            return warpRoutes[id].tokens.flatMap((tokenTo, i2) => {
              if (tokenFrom === tokenTo) {
                return null;
              }

              return (
                <Flex key={`${id}:${i1}:${i2}`} gap="10px" center>
                  <Token token={tokenFrom} size={26} />
                  <FaLongArrowAltRight />
                  <Token token={tokenTo} withChain size={26} />
                </Flex>
              );
            });
          });
      })}
    </Flex>
  );
};
