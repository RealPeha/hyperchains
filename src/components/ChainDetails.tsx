import { forwardRef } from 'react';
import { ChainMetadata } from '@hyperlane-xyz/sdk';
import { chainAddresses } from '@hyperlane-xyz/registry';
import styled from '@emotion/styled';
import { HTMLMotionProps, motion } from 'framer-motion';
import { Flex } from './Flex';
import { Text } from './Text';
import { Space } from './Space';
import { getChainTags } from '../utils';
import { Tag } from './Tag';
import { Copy } from './Copy';
import { Address } from './Address';
import { Scrollable } from './Scrollable';
import { ChainTag } from '../constants';

type ChainAddresses = (typeof chainAddresses)[keyof typeof chainAddresses];

interface ChainDetailsProps {
  chain: ChainMetadata;
}

export const ChainDetails = forwardRef<HTMLDivElement, ChainDetailsProps>(
  ({ chain }, ref) => {
    const addresses = chainAddresses[
      chain.name as keyof typeof chainAddresses
    ] as ChainAddresses | undefined;
    const explorer = chain.blockExplorers && chain.blockExplorers[0];

    const tags = getChainTags(chain);
    const hasDifferentDomainId = Boolean(
      chain.domainId && chain.chainId !== chain.domainId,
    );

    const convertIdToTitle = (id: string) => {
      return id
        .replace(/([A-Z])/g, ' $1') // Insert space before each uppercase letter
        .replace(/^./, (str) => str.toUpperCase()) // Capitalize the first letter of the string
        .replace('Ism', 'ISM') // Capitalize ISM
        .trim();
    };

    return (
      <>
        <Background
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { delay: 0.2 } }}
          transition={{ duration: 0.3 }}
        />
        <Center ref={ref}>
          <Wrapper
            as={motion.div}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.5, type: 'spring' }}
            column
          >
            <Flex center gap="10px">
              <Logo
                src={`https://raw.githubusercontent.com/hyperlane-xyz/hyperlane-registry/main/chains/${chain.name}/logo.svg`}
                alt={chain.name}
              />
              <Text weight="bold" size={24} ellipsis>
                {chain.displayName ?? chain.name}
              </Text>
            </Flex>
            <Space height="10px" />
            <Flex gap="10px" center>
              {tags.map((tag) => (
                <Tag key={tag} tag={tag} />
              ))}
            </Flex>
            <ChainInfo center column gap="30px">
              <Flex gap="30px" center>
                <Flex column center gap="10px">
                  <Text weight="bold" size={20}>
                    {hasDifferentDomainId ? 'Chain ID' : 'Chain/Domain ID'}
                  </Text>
                  <Flex center>
                    <a
                      href={
                        tags.includes(ChainTag.EVM)
                          ? `https://chainlist.org/chain/${chain.chainId}`
                          : undefined
                      }
                      target="_blank"
                    >
                      <Text size={18}>{chain.chainId}</Text>
                    </a>
                    <Copy value={chain.chainId} />
                  </Flex>
                </Flex>
                {hasDifferentDomainId && (
                  <Flex column center gap="10px">
                    <Text weight="bold" size={20}>
                      Domain ID
                    </Text>
                    <Flex center>
                      <Text size={18}>{chain.domainId}</Text>
                      <Copy value={chain.domainId!} />
                    </Flex>
                  </Flex>
                )}
                {chain.nativeToken && (
                  <Flex column center gap="10px">
                    <Text weight="bold" size={20}>
                      Currency
                    </Text>
                    <Text size={18}>
                      <a
                        href={
                          chain.gasCurrencyCoinGeckoId
                            ? `https://www.coingecko.com/en/coins/${chain.gasCurrencyCoinGeckoId}`
                            : undefined
                        }
                        target="_blank"
                      >
                        {chain.nativeToken.symbol}
                        {chain.nativeToken.denom
                          ? ` (${chain.nativeToken.denom})`
                          : ''}
                      </a>
                    </Text>
                  </Flex>
                )}
                {chain.deployer && (
                  <Flex column center gap="10px">
                    <Text weight="bold" size={20}>
                      Deployer
                    </Text>
                    {chain.deployer.url ? (
                      <a href={chain.deployer.url} target="_blank">
                        <Text size={18}>{chain.deployer.name}</Text>
                      </a>
                    ) : (
                      <Text size={18}>{chain.deployer.name}</Text>
                    )}
                  </Flex>
                )}
              </Flex>
              <Flex gap="30px" center>
                {explorer && (
                  <Flex column center gap="10px">
                    <Text weight="bold" size={20}>
                      Explorer
                    </Text>
                    <a href={explorer.url} target="_blank">
                      <Text size={18}>{explorer.name}</Text>
                    </a>
                  </Flex>
                )}
                <Flex column center gap="10px">
                  <Text weight="bold" size={20}>
                    Hyperlane Registry
                  </Text>
                  <a
                    href={`https://github.com/hyperlane-xyz/hyperlane-registry/tree/main/chains/${chain.name}`}
                    target="_blank"
                  >
                    <Text size={18}>GitHub</Text>
                  </a>
                </Flex>
              </Flex>
            </ChainInfo>

            {addresses && (
              <>
                <Flex center>
                  <Text size={22} weight="bold">
                    Addresses
                  </Text>
                  <Copy value={JSON.stringify(addresses, null, 2)} />
                </Flex>

                <Space height="20px" />

                <Scrollable>
                  <Flex column gap="10px" center>
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
                        if (
                          value === '0x0000000000000000000000000000000000000000'
                        ) {
                          return null;
                        }

                        return (
                          <Flex gap="5px" center="y" column key={key}>
                            <Text weight="bold">{convertIdToTitle(key)}</Text>
                            <Address address={value} explorer={explorer?.url} />
                          </Flex>
                        );
                      })}
                    <Space height="20px" />
                  </Flex>
                </Scrollable>
              </>
            )}
          </Wrapper>
        </Center>
      </>
    );
  },
);

const Background = styled(motion.div)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(2px);
`;

const Center = styled.div`
  position: fixed;
  right: 0;
  width: 600px;
  height: 100%;
  max-height: 800px;
  top: 50%;
  transform: translateY(-50%);
`;

const Wrapper = styled(Flex)<HTMLMotionProps<'div'>>`
  background: #fff;
  border-radius: 20px 0 0 20px;
  box-shadow: -5px 0 10px rgba(0, 0, 0, 0.1);
  padding: 50px 15px 0 15px;
  width: 100%;
  height: 100%;
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const ChainInfo = styled(Flex)`
  background: #f5f5f5;
  border-radius: 10px;
  padding: 20px;
  margin: 20px 0;
`;
