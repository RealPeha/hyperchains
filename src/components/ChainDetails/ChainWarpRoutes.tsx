import React from 'react';
import { warpRouteConfigs } from '@hyperlane-xyz/registry';
import { ChainMetadata } from '@hyperlane-xyz/sdk';
import { Flex } from '../Flex';
import { Token } from '../Token';
import { FaLongArrowAltRight } from 'react-icons/fa';

interface ChainWarpRoutesProps {
  chain: ChainMetadata;
}

export const ChainWarpRoutes: React.FC<ChainWarpRoutesProps> = ({ chain }) => {
  const warpRoutesArray = Object.entries(warpRouteConfigs).filter(([id]) =>
    id.includes(chain.name),
  );
  const warpRoutes = Object.fromEntries(warpRoutesArray);

  console.log(warpRoutes);

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
