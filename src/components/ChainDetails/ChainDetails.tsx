import { forwardRef, useEffect } from 'react';
import type { ChainMetadata } from '@hyperlane-xyz/sdk';
import styled from '@emotion/styled';
import { HTMLMotionProps, motion } from 'framer-motion';
import { Flex } from '../Flex';
import { Text } from '../Text';
import { getChainTags } from '../../utils';
import { Tag } from '../Tag';
import { Scrollable } from '../Scrollable';
import { ChainLogo } from '../ChainLogo';
import { ChainAddresses } from './ChainAddresses';
import { ChainWarpRoutes } from './ChainWarpRoutes';
import { useUrlState } from '../../hooks';
import { ChainInfo } from './ChainInfo';
import { Copy } from '../Copy';
import { useStore } from '../../store';

interface ChainDetailsProps {
  chain: ChainMetadata;
}

const tabs = [
  {
    id: 'info',
    title: 'Info',
  },
  {
    id: 'addresses',
    title: 'Addresses',
  },
  {
    id: 'warps',
    title: 'Warp Routes',
  },
] as const satisfies { id: string; title: string }[];

type TabId = (typeof tabs)[number]['id'];

export const ChainDetails = forwardRef<HTMLDivElement, ChainDetailsProps>(
  ({ chain }, ref) => {
    const getAddresses = useStore.use.getAddresses();
    const getWarpRoutes = useStore.use.getWarpRoutes();

    const [activeTab, setActiveTab] = useUrlState<TabId>('tab', 'info');

    const tags = getChainTags(chain);

    useEffect(() => {
      return () => setActiveTab('info', false);
    }, []);

    const addresses = getAddresses(chain.name);

    const withAddresses = !!addresses;
    const withWarpRoutes = getWarpRoutes(chain.name).warpRoutesArray.length > 0;

    const renderTabs: Record<TabId, boolean> = {
      info: withAddresses || withWarpRoutes,
      addresses: withAddresses,
      warps: withWarpRoutes,
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
            <Scrollable>
              <Flex column>
                <Header column gap="10px">
                  <Flex center gap="10px">
                    <ChainLogo size={50} chain={chain.name} />
                    <Text weight="bold" size={24} ellipsis>
                      {chain.displayName ?? chain.name}
                    </Text>
                  </Flex>
                  <Flex gap="10px" center>
                    {tags.map((tag) => (
                      <Tag key={tag} tag={tag} />
                    ))}
                  </Flex>
                </Header>

                <Flex column>
                  <Flex bg="#fff">
                    {tabs
                      .filter((tab) => renderTabs[tab.id])
                      .map((tab) => (
                        <Tab
                          key={tab.id}
                          isActive={tab.id === activeTab}
                          onClick={() => setActiveTab(tab.id)}
                        >
                          <Text weight="bold">{tab.title}</Text>
                          {tab.id === 'addresses' && (
                            <Copy value={JSON.stringify(addresses, null, 2)} />
                          )}
                        </Tab>
                      ))}
                  </Flex>
                  <TabContent center column gap="30px">
                    {activeTab === 'info' && <ChainInfo chain={chain} />}
                    {activeTab === 'addresses' && (
                      <ChainAddresses chain={chain} />
                    )}
                    {activeTab === 'warps' && <ChainWarpRoutes chain={chain} />}
                  </TabContent>
                </Flex>
              </Flex>
            </Scrollable>
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
  background: #f5f5f5;
  border-radius: 20px 0 0 20px;
  box-shadow: -5px 0 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Header = styled(Flex)`
  background: #fff;
  padding: 50px 0 20px 0;
`;

const TabContent = styled(Flex)`
  border-radius: 0 0 10px 10px;
  padding: 20px;
`;

const Tab = styled(Flex)<{ isActive: boolean }>`
  flex-grow: 1;
  flex-basis: 0;
  justify-content: center;
  align-items: center;
  background-color: ${({ isActive }) => (isActive ? '#f5f5f5' : '#fff')};
  cursor: pointer;
  padding: 10px;
  border-radius: 10px 10px 0 0;

  &:hover {
    background-color: #f5f5f5;
  }
`;
